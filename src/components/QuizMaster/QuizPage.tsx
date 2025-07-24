import { useState } from "react";
import type { IStatusQuiz } from "../../types/IStatusQuiz";
import type { IQuiz } from "../../types/IQuizPromise";
import { QuestionUI } from "./QuestionUI";
import { useNavigateQuiz } from "../../hooks/useNavigateQuiz";

type IQuizPage = {
  onClickEndQuiz: (newStatus: IStatusQuiz) => void;
};

export const QuizPage = ({ onClickEndQuiz }: IQuizPage) => {
  const [questionsAnswered, setQuestionsAnswered] = useState<number>(0);

  //this hook handle navigation between the 3 questions
  const { questionActive, changeQuestion } = useNavigateQuiz({
    onClickEndQuiz,
  });

  return (
    <div id="quizContainer" className="h-full flex flex-col">
      <div id="counterContainer" className="border border-amber-50 p-5">
        <h1>Hai risposto a {questionsAnswered} domande su 3</h1>
      </div>
      <div id="questionUI" className="grow">
        <QuestionUI
          quizNumber={questionActive}
          onClickNavigationBtn={changeQuestion}
        />
      </div>
    </div>
  );
};
