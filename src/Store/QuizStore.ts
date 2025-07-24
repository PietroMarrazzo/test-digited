import { create } from "zustand";
import type { IQuiz } from "../types/IQuizPromise";

export const useStore = create((set) => ({
  questionsList: [],
  setQuestionList: (newQuestions: IQuiz[]) =>
    set({ questionsList: newQuestions }),
  correctAnswer: 0,
  addCorretAnswer: (prev: number) => set({ correctAnswer: prev + 1 }),
}));
