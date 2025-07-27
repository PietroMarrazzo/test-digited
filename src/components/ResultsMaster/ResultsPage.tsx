import { useStoreAnswers } from "../../Store/QuizStore";
import { Grid } from "@mui/material";
import { isPassed } from "../../assertions/isPassed";
import { BigHeader } from "../Shared/BigHeader";
import { ResultCard } from "../QuizMaster/AnswerInput/ResultCard";
import { NerdyButton } from "../Shared/NerdyButton";
import { STATUS_QUIZ } from "../../costants/StatusQuiz";
import type { IStatusQuiz } from "../../types/IStatusQuiz";

type IResultsPage = {
  onClickRestart: (newStatus: IStatusQuiz) => void;
};

export const ResultsPage = ({ onClickRestart }: IResultsPage) => {
  const { correctAnswer } = useStoreAnswers();

  function percentage() {
    return Math.trunc((100 * correctAnswer) / 3).toString();
  }

  return (
    <div className="flex flex-col h-full">
      <BigHeader title={isPassed(correctAnswer)} />

      <Grid
        container
        columnSpacing={4}
        className="flex space-x-0 justify-between my-8"
      >
        <ResultCard
          upperLable="Precisione"
          middleLable={`${percentage()}%`}
          lowerLable="delle risposte"
        />
        <ResultCard
          upperLable="Hai sbagliato"
          middleLable={`${3 - correctAnswer}`}
          lowerLable="su 3 domande"
        />
      </Grid>
      <div>
        <NerdyButton
          id="start-btn"
          lable="RICOMINCIA"
          onClick={() => onClickRestart(STATUS_QUIZ.WELCOME)}
        />
      </div>
    </div>
  );
};
