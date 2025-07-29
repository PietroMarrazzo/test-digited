export const checkCorrectAnswers = (answers: { [key: number]: boolean }) => {
  let correctAnswers = 0;
  Object.keys(answers).forEach((element) => {
    if (answers[Number(element)]) {
      correctAnswers = correctAnswers + 1;
    }
  });
  return correctAnswers;
};
export const checkWrongAnswers = (answers: { [key: number]: boolean }) => {
  let wrongAnswers = 0;
  Object.keys(answers).forEach((element) => {
    if (!answers[Number(element)]) {
      wrongAnswers = wrongAnswers + 1;
    }
  });
  return wrongAnswers;
};
