import { CusMentions } from "@/elements/CusComponets";
import { FC } from "react";

const PopularMentionsCard: FC<{ text: string }> = ({ text }) => {

  return <CusMentions>{text}</CusMentions>;
};

export default PopularMentionsCard;
