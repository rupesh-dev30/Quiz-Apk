export type AnswerProps = {
  option: String;
};

export type QuestionProps = {
  title: string;
  options: string[];
  correctAnswer: string;
};

export type Question = {
  question: QuestionProps
}
