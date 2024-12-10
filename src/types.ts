export type AnswerProps = {
  option: String;
};

export type QuestionProps = {
  question: {
    title: string;
    options: string[];
    correctAnswer: string;
  };
};