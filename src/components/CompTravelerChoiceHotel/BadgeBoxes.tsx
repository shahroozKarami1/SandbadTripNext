import { FC } from "react";
import { IBadgeBoxesProps } from "../../types/intefaces";
import { Typography } from "@mui/material";
import { CusBadgeBox } from "@/elements/CusComponets";

const BadgeBoxes: FC<IBadgeBoxesProps> = ({ bgColor, icon, text }) => {

  return (
    <CusBadgeBox sx={{
      backgroundColor: bgColor ? bgColor : "#fff",

    }}>
      <Typography sx={{ fontWeight: "bold", fontSize: "0.80rem" }}>
        {text}
      </Typography>
      <Typography>{icon}</Typography>
    </CusBadgeBox>
  );
};

export default BadgeBoxes;
