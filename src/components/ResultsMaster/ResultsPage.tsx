import { useStoreAnswers } from "../../Store/QuizStore";
import { Grid } from "@mui/material";
import { isPassed } from "../../assertions/isPassed";
import { BigHeader } from "../Shared/BigHeader";
import { ResultCard } from "../QuizMaster/AnswerInput/ResultCard";
import { NerdyButton } from "../Shared/NerdyButton";
import { STATUS_QUIZ } from "../../costants/StatusQuiz";
import type { IStatusQuiz } from "../../types/IStatusQuiz";
import {
  checkCorrectAnswers,
  checkWrongAnswers,
} from "../../utils/checkAnswersForResults";

type IResultsPage = {
  onClickRestart: (newStatus: IStatusQuiz) => void;
};

export const ResultsPage = ({ onClickRestart }: IResultsPage) => {
  const { answers } = useStoreAnswers();

  const correctAnswers = checkCorrectAnswers(answers);
  const wrongAnswers = checkWrongAnswers(answers);

  function percentage() {
    return Math.trunc((100 * correctAnswers) / 3).toString();
  }

  return (
    <div className="flex flex-col h-full">
      <BigHeader title={isPassed(correctAnswers)} />

      <Grid
        container
        columnSpacing={1}
        className="flex space-x-0 justify-between my-8"
      >
        <ResultCard
          upperLable="Corrette"
          middleLable={`${correctAnswers}`}
          // lowerLable="risposte corrette"
        />
        <ResultCard
          upperLable="Precisione"
          middleLable={`${percentage()}%`}
          // lowerLable="risposte corrette"
        />
        <ResultCard
          upperLable="Sbagliate"
          middleLable={`${wrongAnswers}`}
          // lowerLable={`${checkLowerLableTypo()}`}
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
