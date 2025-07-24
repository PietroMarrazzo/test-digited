import { useNavigateApp } from "../hooks/useNavigateApp";

export const Master = () => {
  // this hook handles the interface shown to the user and the quiz status as state (welcome, quiz and results)
  const component = useNavigateApp();

  return component;
};
