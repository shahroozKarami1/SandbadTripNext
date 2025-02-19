import { Box, Typography } from "@mui/material";
import { FC } from "react";
import WhiteBtnColor from "../WhiteBtnColor/WhiteBtnColor";
import { CusPosterSlider, DarkOverlay } from "../../elements/CusComponets";
const CardSlider: FC<{ poster: string; title: string; disc: string }> = ({
  disc,
  poster,
  title,
}) => {

  return (
    <CusPosterSlider sx={{ background: `url(${poster})` }} >
      <DarkOverlay />
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-end"}
        zIndex={99}
        gap={2}
      >
        <Typography
          sx={{ color: "#fff", fontWeight: "bold", fontSize: "2.5rem" }}
        >
          {title}
        </Typography>
        <Typography
          sx={{ fontWeight: "light", color: "#fff", fontSize: "1rem" }}
        >
          {disc}
        </Typography>
        <WhiteBtnColor title="بیشتر بخوانید" />
      </Box>
    </CusPosterSlider>
  );
};

export default CardSlider;
