import { useNavigateApp } from "../hooks/useNavigateApp";

export const Master = () => {
  // this hook handles the interface shown to the user and the quiz status as state (welcome, quiz and results)
  const component = useNavigateApp();

  return (
    <div
      id="bodyContainer"
      // sm:width is handled by media query in app.css
      className="flex flex-col place-self-center place-content-center min-h-full sm:min-h-[700px] max-h-full w-full border lg:rounded-2xl border-indigo-500 sm:p-5 py-0 px-5 bg-indigo-900 "
    >
      {component}
    </div>
  );
};
