import { CusCardAdvice } from "@/elements/CusComponets";
import { Typography } from "@mui/material";
import Link from "next/link";
import { FC } from "react";

interface CardAdviceProps {
  link: string;
  cover: string;
  text: string;
}

const CardAdvice: FC<CardAdviceProps> = ({ cover, link, text }) => {

  return (
    <Link href={link}>
      <CusCardAdvice display={"flex"} alignItems={"center"}>
        <img src={cover} alt="" style={{ width: "80px" }} />
        <Typography sx={{ fontWeight: "bold" }}>{text}</Typography>
      </CusCardAdvice>
    </Link>
  );
};

export default CardAdvice;
