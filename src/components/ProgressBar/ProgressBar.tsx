
import { CusProgressBar } from "@/elements/CusComponets";
import { FC } from "react";

const ProgressBar: FC<{ value: number }> = ({ value }) => {

  return <CusProgressBar variant="determinate" value={value} />;
};

export default ProgressBar;

