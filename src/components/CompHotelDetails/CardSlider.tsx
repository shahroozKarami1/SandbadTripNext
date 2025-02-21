import { FC } from "react";
import { ICardSliderProps } from "../../types/intefaces";
import { Box, Typography } from "@mui/material";
import { CusInnerBigBox, CusInnerBox, CusSmallImgBox, DarkOverlay } from "../../elements/CusComponets";

const CardSlider: FC<ICardSliderProps> = ({
  count,
  coverImg,
  isMainImg,
  title,
}) => {

  return (
    <Box>
      {!isMainImg ? (
        <CusSmallImgBox>
          <DarkOverlay />
          <img src={coverImg} alt="" className="rounded-r-md" />
          <CusInnerBox>
            <Typography sx={{ fontWeight: "bold", color: "#fff" }}>
              {title}
            </Typography>
            <Typography sx={{ fontWeight: "bold", color: "#fff" }}>
              {count}
            </Typography>
          </CusInnerBox>
        </CusSmallImgBox>
      ) : (
        <CusInnerBigBox>
          <img
            src={coverImg}
            alt=""
            style={{
              objectFit: "cover",
              objectPosition: "center",
              width: "100%",
              height: "100%",
              borderTopLeftRadius: "1rem",
              borderBottomLeftRadius: "1rem",
            }}
          />
        </CusInnerBigBox>
      )}
    </Box>
  );
};

export default CardSlider;
