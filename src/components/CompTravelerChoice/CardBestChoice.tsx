import { BoxOverLay } from "@/elements/CusComponets";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { FC } from "react";

const CardBestChoice: FC<{ text: string; cover: string, link: string }> = ({
  cover,
  text,
  link
}) => {

  return (
    <Link href={link}>
      <Box sx={{ position: "relative", margin: "1.5rem  0" ,  width : "100%" , height : "100%" }}>
        <img src={cover} alt=""  style={{
          objectFit : "cover" ,  
          width : "100%" ,  
          height : "100%"
        }} />
        <BoxOverLay />
        <Box sx={{ position: "absolute", right: 20, bottom: 20 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "3rem", color: "#fff" }}>
            {text}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default CardBestChoice;
