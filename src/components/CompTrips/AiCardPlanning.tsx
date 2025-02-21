import { Box } from "@mui/material";
import { FC } from "react";
import { CusCardText, CusIconAiCardPlanning } from "@/elements/CusComponets";

const AiCardPlanning: FC<{ text: string; image: string }> = ({ text, image }) => {

  return (
    <Box sx={{ position: "relative", margin: "0  0.5rem", height: "100%" }}>
      <img src={image} alt="" className="rounded-lg" />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 70%)",
          zIndex: 0,
        }}
      />

      <Box sx={{ position: "absolute", left: 10, top: 10 }}>
        <CusIconAiCardPlanning />
      </Box>
      <CusCardText>{text}</CusCardText>
    </Box>
  );
};

export default AiCardPlanning;
