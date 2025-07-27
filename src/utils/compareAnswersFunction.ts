export const compareAnswersFunction = (
  correctValues: string[],
  selectedAnswers: string[]
) => {
  const selectedValues = [...selectedAnswers].sort();

  return (
    selectedValues.length === correctValues.length &&
    selectedValues.every((value, index) => value === correctValues[index])
  );
};
