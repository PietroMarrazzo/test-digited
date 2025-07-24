import { useQuery } from "@tanstack/react-query";
import { questionsMock } from "../api/quiz";
import type { IQuizPromise } from "../types/IQuizPromise";

const randomize = (data: IQuizPromise) =>
  data.sort(() => 0.5 - Math.random()).slice(0, 3);

const fetchQuestions = async () => {
  await new Promise((resolve) => setTimeout(resolve, 700));
  return Promise.resolve(randomize(questionsMock));
};

export const useFetchQuestions = () => {
  const { data, isPending } = useQuery({
    queryKey: ["questionsList"],
    queryFn: () => fetchQuestions(),

    staleTime: Infinity,
  });

  // const dataRandomized = (data ?? [])
  //   .sort(() => 0.5 - Math.random())
  //   .slice(0, 3);

  return {
    questionList: data,
    isPending,
  };
};
