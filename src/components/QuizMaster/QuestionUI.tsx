import { useState } from "react";
import { isForwardDisabled } from "../../assertions/navigationBtnDisabled";
import type { IQuizActive } from "../../types/IQuizActive";
import type { IQuiz } from "../../types/IQuizPromise";
import { STATUS_QUIZ } from "../../costants/StatusQuiz";
import { useStoreAnswers } from "../../Store/QuizStore";
import { compareAnswersFunction } from "../../utils/compareAnswersFunction";
import { Monochoice } from "./AnswerInput/Monochoice";
import { Multichoice } from "./AnswerInput/Multichoice";
import { BigHeader } from "../Shared/BigHeader";
import { BTN_LABLE } from "../../costants/lables";
import { QUIZ_TYPE } from "../../costants/quizTypes";
import { NerdyButton } from "../Shared/NerdyButton";

type IQuestionUI = {
  quizData: IQuiz;
  questionActive: IQuizActive;
  changeQuestion: (newQuestion: IQuizActive) => void;
  handleEndQuiz: (status: "result") => void;
};

export const QuestionUI = ({
  quizData,
  questionActive,
  changeQuestion,
  handleEndQuiz,
}: IQuestionUI) => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  const { setAnswers } = useStoreAnswers();

  // filter only correct options of the question and sort them by the string value *** i choose sort() cause it makes simplier to check both arrays, but should not be the case in situations where options are a larger number
  const correctAnswerValues = quizData.options
    .filter((option) => option.isCorrect)
    .map((option) => option.value)
    .sort();

  // show Termina quiz only when user is at the last question
  const handleLabelForwardBtn = () =>
    questionActive < 2 ? BTN_LABLE.NEXT : BTN_LABLE.END;

  function checkAnswers() {
    const isQuestionCorrect: boolean = compareAnswersFunction(
      correctAnswerValues,
      selectedAnswers
    );
    setAnswers(isQuestionCorrect, questionActive.toString());
  }

  function clickForward() {
    checkAnswers();
    setSelectedAnswers([]);
    // if this was last question (index #2), save it and endQuiz saving answers into zustand store
    if (questionActive === 2) {
      handleEndQuiz(STATUS_QUIZ.RESULT);
      return;
    }

    // move to next question
    changeQuestion((questionActive + 1) as IQuizActive);
  }

  const quizTypehandler = () => {
    switch (quizData.type) {
      case QUIZ_TYPE.ENUM:
        return (
          <Monochoice
            options={quizData.options}
            setSelectedAnswers={setSelectedAnswers}
          />
        );
      case QUIZ_TYPE.MULTIENUM:
        return (
          <Multichoice
            options={quizData.options}
            setSelectedAnswers={setSelectedAnswers}
          />
        );

      default:
        return <></>;
    }
  };

  return (
    <div className="flex flex-col h-full grow place-content-center">
      <BigHeader title={quizData.quiz} titleSize="2" />
      <div id="answersContainer">
        {/* QUIZ COMPONENT HANDLER */}
        {quizTypehandler()}

        {/* NAVIGATION BTN */}
        <div id="navigation-btnContainer" className="flex justify-end my-15">
          <NerdyButton
            id="btnForward"
            lable={handleLabelForwardBtn()}
            onClick={clickForward}
            isDisabled={isForwardDisabled(questionActive, selectedAnswers)}
          />
        </div>
      </div>
    </div>
  );
};
