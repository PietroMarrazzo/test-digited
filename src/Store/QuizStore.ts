import { create } from "zustand";
import type { IQuiz } from "../types/IQuizPromise";

export const useStoreQuestions = create((set) => ({
  questionsList: [],
  setQuestionList: (newQuestions: IQuiz[]) =>
    set({ questionsList: newQuestions }),
}));
export const useStoreAnswers = create((set) => ({
  correctAnswer: 0,
  addCorretAnswer: (prev: number) => set({ correctAnswer: prev + 1 }),
  answers: [],
  setAnswers: (answers: string) => set({ answers: answers }),
}));
