"use client"
import { Box, Typography } from "@mui/material";
import { FC } from "react";
import WhiteBtnColor from "../WhiteBtnColor/WhiteBtnColor";
import { CusPosterSlider, DarkOverlay } from "../../elements/CusComponets";
import { useMedia } from "@/context/MediaQueryContext";
const CardSlider: FC<{ poster: string; title: string; disc: string }> = ({
  disc,
  poster,
  title,
}) => {

  let isXs = useMedia()
  return (
    <CusPosterSlider sx={{ background: `url(${poster})` }} >
      <DarkOverlay />
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-end"}
        zIndex={99}
        paddingRight={"2rem"}
        gap={2}
      >
        <Typography
          sx={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: "2.5rem",
            textAlign: isXs ? "center" : "right"
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontWeight: "light",
            color: "#fff",
            fontSize: "1rem",
            textAlign: isXs ? "center" : "right"
          }}
        >
          {disc}
        </Typography>
        <WhiteBtnColor title="بیشتر بخوانید" />
      </Box>
    </CusPosterSlider>
  );
};

export default CardSlider;
