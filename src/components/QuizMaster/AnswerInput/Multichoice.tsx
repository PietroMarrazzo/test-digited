import { type Dispatch, type SetStateAction } from "react";
import type { IQuizOption } from "../../../types/IQuizPromise";

type IMultichoice = {
  options: IQuizOption[];
  setSelectedAnswers: Dispatch<SetStateAction<string[]>>;
};

export const Multichoice = ({ options, setSelectedAnswers }: IMultichoice) => {
  const handleClickOnAnswer = (answer: IQuizOption) => {
    setSelectedAnswers((prev) => {
      //remove answer if was already checked
      if (prev.includes(answer.value)) {
        return prev.filter((oldValue) => oldValue !== answer.value);
      }
      // if answer is not inside the state, add it
      return [...prev, answer.value];
    });
  };

  return (
    <>
      {options.map((option) => {
        return (
          <div
            key={option.value}
            className="checkbox-wrapper flex my-3 hover:bg-indigo-800 border roundedElement pl-5"
          >
            <input
              type="checkbox"
              className=""
              id={option.value}
              onClick={() => handleClickOnAnswer(option)}
            />
            <label htmlFor={option.value} className="check-box absolute" />
            <label
              htmlFor={option.value}
              className="w-full cursor-pointer text-left py-5 pl-6"
            >
              {option.label}
            </label>
          </div>
        );
      })}
      <p>* Puoi selezionare più di una risposta</p>
    </>
  );
};
