import { STATUS_QUIZ } from "../../costants/StatusQuiz";
import type { IStatusQuiz } from "../../types/IStatusQuiz";
import { BigHeader } from "../Shared/BigHeader";
import { NerdyButton } from "../Shared/NerdyButton";

type IWelcomePage = {
  onClickStart: (newStatus: IStatusQuiz) => void;
};

export const WelcomePage = ({ onClickStart }: IWelcomePage) => {
  return (
    <div id="welcomeContainer" className="h-full">
      <BigHeader
        title="Benvenuto al D&D quiz!"
        titleSize="5"
        subTitle="Spero tu abbia studiato bene..."
      />
      <NerdyButton
        id="start-btn"
        lable="INIZIAMO!"
        onClick={() => onClickStart(STATUS_QUIZ.QUIZ)}
      />
    </div>
  );
};
