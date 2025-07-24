import type { IQuizActive } from "../types/IQuizActive";

export const isForwardDisabled = (quizNumber: IQuizActive) => quizNumber > 3;
export const isBackDisabled = (quizNumber: IQuizActive) => quizNumber < 1;
