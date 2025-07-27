export const isPassed = (correctAnswer: number) => {
  if (correctAnswer === 2) return "PASSATO! Conosci bene DnD!";
  if (correctAnswer === 3) return "PASSATO! Sei un esperto di DnD!";
  if (correctAnswer < 2) return "OH NO! Ne hai di manuali da leggere!";

  return "";
};
