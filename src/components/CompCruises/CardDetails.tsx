import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { ICardDetailsProps } from "../../types/intefaces";
import Image from "next/image";

const CardDetails: FC<ICardDetailsProps> = ({ coverImg, disc, title }) => {
  return (
    <Box display={"flex"} alignItems={"center"} gap={1} flexDirection={"column"} justifyContent={"center"}>
      <Image src={coverImg} alt="" style={{ width: "50px" }} />
      <Typography sx={{ fontWeight: "bold" }}>{title}</Typography>
      <Typography sx={{ textAlign: "center", fontSize: "0.90rem" }}>{disc}</Typography>
    </Box>
  );
};

export default CardDetails;
