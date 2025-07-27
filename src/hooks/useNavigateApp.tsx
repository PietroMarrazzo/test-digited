import { useState } from "react";
import type { IStatusQuiz } from "../types/IStatusQuiz";
import { STATUS_QUIZ } from "../costants/StatusQuiz";
import { WelcomePage } from "../components/WelcomeMaster/WelcomePage";
import { QuizPage } from "../components/QuizMaster/QuizPage";
import { ResultsPage } from "../components/ResultsMaster/ResultsPage";

export const useNavigateApp = () => {
  const [status, setStatus] = useState<IStatusQuiz>(STATUS_QUIZ.WELCOME);

  function changeStatus(newStatus: IStatusQuiz) {
    setStatus(newStatus);
  }

  switch (status) {
    case STATUS_QUIZ.WELCOME:
      return <WelcomePage onClickStart={changeStatus} />;
    case STATUS_QUIZ.QUIZ:
      return <QuizPage handleEndQuiz={changeStatus} />;
    case STATUS_QUIZ.RESULT:
      return <ResultsPage onClickRestart={changeStatus} />;
  }
};
