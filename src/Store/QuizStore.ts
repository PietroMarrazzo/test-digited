import { create } from "zustand";

type IAnswerState = {
  correctAnswer: number;
  addCorretAnswer: () => void;
  answers: {
    [key: number]: boolean;
  };
  setAnswers: (isCorret: boolean, index: string) => void;
};

export const useStoreAnswers = create<IAnswerState>((set) => ({
  correctAnswer: 0,
  addCorretAnswer: () =>
    set((state) => ({ correctAnswer: state.correctAnswer + 1 })),
  answers: {},
  setAnswers: (isCorrect: boolean, index: string) =>
    set((state) => ({ answers: { ...state.answers, [index]: isCorrect } })),
}));
