import type { IQuizActive } from "../types/IQuizActive";

export const isBackDisabled = (quizNumber: IQuizActive) => quizNumber < 1;
