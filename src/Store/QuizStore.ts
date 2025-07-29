import { create } from "zustand";

type IAnswerState = {
  answers: {
    [key: number]: boolean;
  };
  setAnswers: (isCorret: boolean, index: string) => void;
};

export const useStoreAnswers = create<IAnswerState>((set) => ({
  answers: {},
  setAnswers: (isCorrect: boolean, index: string) =>
    set((state) => ({ answers: { ...state.answers, [index]: isCorrect } })),
}));
