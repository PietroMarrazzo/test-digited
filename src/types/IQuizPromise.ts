export type IQuizPromise = IQuiz[];

export type IQuiz = {
  quiz: string;
  type: "enum" | "multienum";
  options: {
    label: string;
    value: string;
    isCorrect: boolean;
  }[];
};
