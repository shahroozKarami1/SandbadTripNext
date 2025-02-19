import { CusServicesCardBox, StyledIconBox } from "@/elements/CusComponets";
import {  Typography } from "@mui/material";
import Link from "next/link";
import React, { FC } from "react";

interface IServicesCardProps {
  icon: React.ReactNode;
  text: string;
  link: string;
}

const ServicesCard: FC<IServicesCardProps> = ({ icon, link, text }) => {
  return (
    <Link href={link}>
      <CusServicesCardBox display={"flex"} alignItems={"center"} gap={1}>
        <StyledIconBox>{icon}</StyledIconBox>
        <Typography sx={{ fontSize: "0.90rem", color: "#444" }}>
          {text}
        </Typography>
      </CusServicesCardBox>
    </Link>
  );
};

export default ServicesCard;
