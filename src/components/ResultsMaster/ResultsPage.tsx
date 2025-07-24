import { useEffect } from "react";
import { useStoreAnswers } from "../../Store/QuizStore";

export const ResultsPage = () => {
  const answers = useStoreAnswers((state) => state.answers);

  useEffect(() => {
    console.log("answers", answers);
  }, [answers]);

  return <>results!</>;
};
