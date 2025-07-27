type INerdyButton<T = void> = {
  lable: string;
  onClick: (args?: T) => void;
  isDisabled?: boolean;
  id: string;
};

export const NerdyButton = ({
  lable,
  onClick,
  id,
  isDisabled,
}: INerdyButton) => {
  return (
    <button
      id={id}
      disabled={isDisabled}
      className="button"
      onClick={() => onClick()}
    >
      {lable}
    </button>
  );
};
