import { useEffect } from "react";
import type { IStatusQuiz } from "../../types/IStatusQuiz";
// import type { IQuiz } from "../../types/IQuizPromise";
import { QuestionUI } from "./QuestionUI";
import { useNavigateQuiz } from "../../hooks/useNavigateQuiz";
import { useFetchQuestions } from "../../hooks/useFetchQuestions";

type IQuizPage = {
  handleEndQuiz: (newStatus: IStatusQuiz) => void;
};

export const QuizPage = ({ handleEndQuiz }: IQuizPage) => {
  // const [questionsAnswered, setQuestionsAnswered] = useState<number>(0);

  const { questionList = [], isPending } = useFetchQuestions();

  useEffect(() => {
    console.log("questionList", questionList);
  }, [questionList]);

  //this hook handle navigation between the 3 questions
  const { questionActive, changeQuestion } = useNavigateQuiz();

  // function clickForward() {
  //   if (questionActive === 2) {
  //     console.log("questionActive", questionActive);
  //     onClickEndQuiz(STATUS_QUIZ.RESULT);
  //     return;
  //   }

  //   changeQuestion((questionActive + 1) as IQuizActive);
  // }

  // return loader if something is pending
  if (isPending)
    return (
      <div className="h-full flex items-center">
        <span className="loader"></span>
      </div>
    );

  return (
    <div id="quizContainer" className="h-full flex flex-col">
      <div id="counterContainer" className="border border-amber-50 p-5">
        {/* <h1>Hai risposto a {questionsAnswered} domande su 3</h1> */}
      </div>
      <div id="questionUI" className="grow">
        <QuestionUI
          quizData={questionList[questionActive]}
          questionActive={questionActive}
          // onClickForward={clickForward}
          changeQuestion={changeQuestion}
          handleEndQuiz={handleEndQuiz}
        />
      </div>

      {/* TODO creare componente per bottoni di navigazione
      <div id="navigation-btnContainer" className="flex justify-around">
        <button
          id="btnBack"
          onClick={clickBack}
          disabled={isBackDisabled(questionActive)}
        >
          Indietro
        </button>
        <button
          id="btnForward"
          onClick={clickForward}
          disabled={isForwardDisabled(questionActive)}
        >
          {handleLabelForwardBtn()}
        </button> 
      </div>
        */}
    </div>
  );
};
