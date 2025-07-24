import { STATUS_QUIZ } from "../../costants/StatusQuiz";
import type { IStatusQuiz } from "../../types/IStatusQuiz";

type IWelcomePage = {
  onClickStart: (newStatus: IStatusQuiz) => void;
};

export const WelcomePage = ({ onClickStart }: IWelcomePage) => {
  return (
    <div>
      <h1>Welcome to DnD quiz!</h1>
      <p>Spero tu abbia studiato bene...</p>
      <button onClick={() => onClickStart(STATUS_QUIZ.QUIZ)}>INIZIAMO!</button>
    </div>
  );
};
