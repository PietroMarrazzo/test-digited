export type IQuizPromise = {
  data: IQuiz[];
};

export type IQuiz = {
  quiz: string;
  type: "enum" | "multienum";
  options: [
    {
      label: string;
      isCorrect: boolean;
    }
  ];
};
