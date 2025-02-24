import { Box } from "@mui/material";
import { FC } from "react";
import { CusCardText, CusIconAiCardPlanning } from "@/elements/CusComponets";

const AiCardPlanning: FC<{ text: string; image: string }> = ({ text, image }) => {

  return (
    <Box sx={{ position: "relative" ,  height: "100%" , width : "100%" }}>
      <Box sx={{
        width: "220px",
        height: "300px" ,  
        position : "relative"
      }}>
        <img src={image} alt="" style={{
          objectFit: "cover",
          objectPosition: "center",
          width: '100%',
          height: "100%",
          borderRadius: "1rem"
        }} />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          borderRadius : "1rem" , 
          background: "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 70%)",
          zIndex: 0,
        }}
      />

      <Box sx={{ position: "absolute", left: 10, top: 10 }}>
        <CusIconAiCardPlanning />
      </Box>
      </Box>
      <CusCardText>{text}</CusCardText>
    </Box>
  );
};

export default AiCardPlanning;
