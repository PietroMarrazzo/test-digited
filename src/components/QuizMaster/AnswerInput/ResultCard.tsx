import { Card, Grid } from "@mui/material";

type IResultCard = {
  upperLable?: string;
  middleLable: string;
  lowerLable?: string;
};

export const ResultCard = ({
  upperLable,
  middleLable,
  lowerLable,
}: IResultCard) => {
  return (
    <Grid size={4}>
      <Card className="lg:p-8 p-1 !rounded-lg !bg-indigo-500 sm:min-h-[245px] min-h-[150px] flex flex-col justify-evenly">
        <div>
          <h4 className="text-[16px] lg:text-2xl font-bold text-indigo-900">
            {upperLable}
          </h4>
          <span className="mt-2 sm:mt-4 text-2xl sm:text-6xl font-bold text-white">
            {middleLable}
          </span>

          <p className="lg:mt-2 text-indigo-900 font-bold"> {lowerLable}</p>
        </div>
      </Card>
    </Grid>
  );
};
