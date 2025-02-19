import { CusYellowBtn } from "@/elements/CusComponets";
import { FC } from "react";
const YellowBtn: FC<{ text: string; link: string }> = ({ link, text }) => {

  return <CusYellowBtn href={link}>{text}</CusYellowBtn>;
};

export default YellowBtn;
