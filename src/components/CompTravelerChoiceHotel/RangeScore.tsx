import { CusLine } from "@/elements/CusComponets";
import {  ListItem, Typography } from "@mui/material";
import { FC } from "react";

const RangeScore: FC<{ topic: string; score: number }> = ({ score, topic }) => {

  return (
    <ListItem
      sx={{
        display: "flex",
        gap: 1,
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <Typography sx={{ fontSize: "0.90rem" }}>{topic}</Typography>
      ‌<CusLine />
      <Typography>{score}</Typography>
    </ListItem>
  );
};

export default RangeScore;
