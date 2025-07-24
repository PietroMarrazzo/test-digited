import { useState } from "react";
import type { IStatusQuiz } from "../types/IStatusQuiz";
import { STATUS_QUIZ } from "../costants/StatusQuiz";
import { WelcomePage } from "../components/WelcomeMaster/WelcomePage";

export const useNavigateApp = () => {
  const [status, setStatus] = useState<IStatusQuiz>(STATUS_QUIZ.WELCOME);

  function changeStatus(newStatus: IStatusQuiz) {
    console.log("newStatus", newStatus);
    setStatus(newStatus);
  }

  switch (status) {
    case STATUS_QUIZ.WELCOME:
      return <WelcomePage onClickStart={changeStatus} />;
    case STATUS_QUIZ.QUIZ:
      return <>QUIZ!</>;
    case STATUS_QUIZ.RESULT:
      return <>RISULTATI!</>;
  }
};
