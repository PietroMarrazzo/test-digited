import { useState } from "react";
// import type { IQuiz } from "../types/IQuizPromise";
import type { IQuizActive } from "../types/IQuizActive";

export const useNavigateQuiz = () => {
  // const [questionsList, setQuestionsList] = useState<IQuiz[]>([]);
  const [questionActive, setQuestionActive] = useState<IQuizActive>(0);

  const changeQuestion = (newQuestion: IQuizActive) =>
    setQuestionActive(newQuestion);

  return { questionActive, changeQuestion };
};
