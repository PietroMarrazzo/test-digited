import { useState } from "react";
import { isForwardDisabled } from "../../assertions/navigationBtnDisabled";
import type { IQuizActive } from "../../types/IQuizActive";
import type { IQuiz } from "../../types/IQuizPromise";
import { STATUS_QUIZ } from "../../costants/StatusQuiz";
import { useStoreAnswers } from "../../Store/QuizStore";

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

  const setAnswers = useStoreAnswers((state) => state.setAnswers);

  const handleLabelForwardBtn = () =>
    questionActive < 2 ? "Prossima" : "Termina quiz!";

  function clickForward() {
    // if this was last question (index #2), save it and endQuiz saving answers into zustand store
    if (questionActive === 2) {
      console.log("questionActive", questionActive);
      setAnswers(selectedAnswers);
      handleEndQuiz(STATUS_QUIZ.RESULT);
      return;
    }

    changeQuestion((questionActive + 1) as IQuizActive);
  }

  const handleClickOnAnswer = (answer: {
    label: string;
    value: string;
    isCorrect: boolean;
  }) => {
    console.log("click", answer.label, answer.value);
    setSelectedAnswers((prev) => {
      //remove answer if was already checked
      if (prev.includes(answer.value)) {
        return prev.filter((oldValue) => oldValue !== answer.value);
      }

      return [...prev, answer.value];
    });
  };

  return (
    <div className="flex flex-col h-full">
      {/**** quiz question ****/}
      <div id="questionContainer" className="my-15">
        {quizData.quiz}
      </div>
      {/**** answer list ***/}
      <div id="answersContainer">
        {quizData.options.map((option) => {
          return (
            <div key={option.value}>
              <div className="checkbox-wrapper flex space-y-5">
                <input
                  type="checkbox"
                  id={option.value}
                  onClick={() => handleClickOnAnswer(option)}
                />
                <label htmlFor={option.value} className="check-box" />
                <label htmlFor={option.value} className="ml-3">
                  {option.label}
                </label>
              </div>
            </div>
          );
        })}
        <div id="navigation-btnContainer" className="flex justify-end my-15">
          <button
            id="btnForward"
            onClick={clickForward}
            disabled={isForwardDisabled(questionActive)}
          >
            {handleLabelForwardBtn()}
          </button>
        </div>
      </div>
    </div>
  );
};
