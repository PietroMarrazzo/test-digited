export type IQuizPromise = IQuiz[];

export type IQuizOption = {
  label: string;
  value: string;
  isCorrect: boolean;
};

export type IQuiz = {
  quiz: string;
  type: "enum" | "multienum";
  options: IQuizOption[];
};
