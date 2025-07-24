import type { IQuizActive } from "../../types/IQuizActive";

type IQuestionUI = {
  quizNumber: IQuizActive;
  onClickNavigationBtn: (newQuestion: IQuizActive) => void;
};

export const QuestionUI = ({
  quizNumber,
  onClickNavigationBtn,
}: IQuestionUI) => {
  const clickBack = () => onClickNavigationBtn((quizNumber - 1) as IQuizActive);

  const clickForward = () =>
    onClickNavigationBtn((quizNumber + 1) as IQuizActive);

  const handleLabelFarwardBtn = () =>
    quizNumber < 4 ? "Prossima" : "Termina quiz!";

  return (
    <div className="flex flex-col items-center h-full">
      <div id="questionContainer" className="">
        quiz numero {quizNumber}
      </div>
      <div id="navigation-btnContainer" className="">
        <button id="btnBack" onClick={clickBack}>
          Indietro
        </button>
        <button id="btnForward" onClick={clickForward}>
          {handleLabelFarwardBtn()}
        </button>
      </div>
    </div>
  );
};
