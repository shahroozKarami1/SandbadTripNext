import { Box, Typography } from "@mui/material";
import { FC } from "react";
import ReadMore from "../ReadMore/ReadMore";
import { CusCardGaryQues } from "@/elements/CusComponets";

const GrayCardQues: FC<{ title: string; cardBody: string }> = ({
  cardBody,
  title,
}) => {


  return (
    <CusCardGaryQues>
      <Box padding={"0.5rem  0"}>
        <Typography sx={{ fontWeight: "bold", fontSize: "1rem" }}>
          {title}
        </Typography>
      </Box>
      <ReadMore lineShow={5}  textBody= {cardBody} />
    </CusCardGaryQues>
  );
};

export default GrayCardQues;
