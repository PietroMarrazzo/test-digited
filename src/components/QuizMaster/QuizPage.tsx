import type { IStatusQuiz } from "../../types/IStatusQuiz";
import { QuestionUI } from "./QuestionUI";
import { useNavigateQuiz } from "../../hooks/useNavigateQuiz";
import { useFetchQuestions } from "../../hooks/useFetchQuestions";

type IQuizPage = {
  handleEndQuiz: (newStatus: IStatusQuiz) => void;
};

export const QuizPage = ({ handleEndQuiz }: IQuizPage) => {
  //this hook handle question fetch and random selection
  const { questionList = [], isPending } = useFetchQuestions();

  //this hook handle navigation between the 3 questions
  const { questionActive, changeQuestion } = useNavigateQuiz();

  // return loader if something is pending
  if (isPending)
    return (
      <div className="h-full flex items-center justify-center">
        <span className="loader"></span>
      </div>
    );

  return (
    <QuestionUI
      quizData={questionList[questionActive]}
      questionActive={questionActive}
      changeQuestion={changeQuestion}
      handleEndQuiz={handleEndQuiz}
    />
  );
};
