import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import questions from "../questions";
import { QuestionProps } from "../types";

type QuizContextProps = {
  question?: QuestionProps;
  questionIndex: number;
  onNext: () => void;
  selectedOption?: string;
  setSelectedOption: (option: string) => void;
  score: number;
  totalQuestion: number;
  correctAnswer: number;
  isFinished: boolean;
  bestScore: number;
};

export const QuizContext = createContext<QuizContextProps>({
  questionIndex: 0,
  onNext: () => {},
  selectedOption: "",
  setSelectedOption: () => {},
  score: 0,
  totalQuestion: 0,
  correctAnswer: 0,
  isFinished: false,
  bestScore: 0,
});

export default function QuizProvider({ children }: PropsWithChildren) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  const [score, setScore] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const question = questions[questionIndex];
  const isFinished = questionIndex >= questions.length;

  useEffect(() => {
    //check if there is a new best score
    if (isFinished === true && score > bestScore) {
      setBestScore(score);
    }
  }, [isFinished]);

  const restart = () => {
    setQuestionIndex(0);
    setSelectedOption("");
    setScore(0);
    setCorrectAnswer(0);
  };

  const onNext = () => {
    if (isFinished) {
      restart();
      return;
    }

    // checking answer is correct
    if (selectedOption === question.correctAnswer) {
      setScore((currScore) => currScore + 10);
      setCorrectAnswer((curr) => curr + 1);
    }
    setQuestionIndex((currValue) => currValue + 1);
  };

  console.warn("Score", score);

  return (
    <QuizContext.Provider
      value={{
        question,
        questionIndex,
        onNext,
        selectedOption,
        setSelectedOption,
        score,
        totalQuestion: questions.length,
        correctAnswer,
        isFinished,
        bestScore
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export const useQuizContext = () => useContext(QuizContext);
