type IBigHeader = {
  title: string;
  titleSize?: "1" | "2" | "3" | "4" | "5";
  subTitle?: string;
};

export const BigHeader = ({ title, titleSize = "4", subTitle }: IBigHeader) => {
  return (
    <div id="bigHeader" className="titleBanner">
      <h2 className={"text-2xl sm:text-" + titleSize + "xl"}>{title}</h2>
      {subTitle ? <p className="mt-5">{subTitle}</p> : <></>}
    </div>
  );
};
