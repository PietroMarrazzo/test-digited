import type { IQuizActive } from "../types/IQuizActive";

export const isForwardDisabled = (
  quizNumber: IQuizActive,
  selectedAnswers: string[]
) => {
  if (selectedAnswers.length < 1) return true;
  if (quizNumber > 3) return true;
  return false;
};
