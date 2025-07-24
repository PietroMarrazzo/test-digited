import { useState } from "react";
// import type { IQuiz } from "../types/IQuizPromise";
import type { IQuizActive } from "../types/IQuizActive";
import type { IStatusQuiz } from "../types/IStatusQuiz";
import { STATUS_QUIZ } from "../costants/StatusQuiz";

type IUseNavigateQuiz = {
  onClickEndQuiz: (newStatus: IStatusQuiz) => void;
};

export const useNavigateQuiz = ({ onClickEndQuiz }: IUseNavigateQuiz) => {
  // const [questionsList, setQuestionsList] = useState<IQuiz[]>([]);
  const [questionActive, setQuestionActive] = useState<IQuizActive>(1);

  const changeQuestion = (newQuestion: IQuizActive) =>
    setQuestionActive(newQuestion);

  const endQuiz = () => onClickEndQuiz(STATUS_QUIZ.RESULT);

  return { questionActive, changeQuestion, endQuiz };
};
