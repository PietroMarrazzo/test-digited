import { type Dispatch, type SetStateAction } from "react";
import type { IQuizOption } from "../../../types/IQuizPromise";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

type IMonochoice = {
  options: IQuizOption[];
  setSelectedAnswers: Dispatch<SetStateAction<string[]>>;
};

export const Monochoice = ({ options, setSelectedAnswers }: IMonochoice) => {
  return (
    <>
      <RadioGroup name="quizMonochoice">
        {options.map((option) => {
          return (
            <div
              key={option.value}
              className="checkbox-wrapper flex my-1 hover:bg-indigo-800 border roundedElement pl-5"
            >
              <FormControlLabel
                key={option.value}
                value={option.value}
                className="radioButton"
                control={
                  <Radio
                    sx={{
                      color: "white",
                      "& .MuiSvgIcon-root": {
                        fontSize: 28,
                      },
                      "&.Mui-checked": {
                        color: "#646cffaa",
                      },
                    }}
                  />
                }
                sx={{
                  "&.MuiFormControlLabel-root": {
                    width: "100%",
                  },
                }}
                label={option.label}
                onChange={() => setSelectedAnswers([option.value])}
              />
            </div>
          );
        })}
      </RadioGroup>
    </>
  );
};
