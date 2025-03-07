import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { ICardDetailsProps } from "../../types/intefaces";
import { useMedia } from "@/context/MediaQueryContext";

const CardDetails: FC<ICardDetailsProps> = ({ coverImg, disc, title }) => {
  let  isXs =  useMedia()
  return (
    <Box display={"flex"}
      alignItems={"center"}
      margin={  isXs ? " 1rem 3rem" : "unset"}
      gap={1}
      flexDirection={"column"}
      justifyContent={"center"}>
      <img src={coverImg} alt="" style={{ width: "50px" }} />
      <Typography sx={{ fontWeight: "bold" }}>{title}</Typography>
      <Typography sx={{ textAlign: "center", fontSize: "0.90rem" }}>{disc}</Typography>
    </Box>
  );
};

export default CardDetails;
