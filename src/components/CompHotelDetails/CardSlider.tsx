import { FC } from "react";
import { ICardSliderProps } from "../../types/intefaces";
import { Box, Typography } from "@mui/material";
import { CusInnerBigBox, CusInnerBox, CusSmallImgBox, DarkOverlay } from "../../elements/CusComponets";
import Image from "next/image";

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
          <Image src={coverImg} alt="" className="rounded-r-md" />
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
          <Image
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
