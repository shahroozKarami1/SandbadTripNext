import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { IPorpsNextTrip } from "../../types/intefaces";
import { CusCard, CusTPSimpleCard } from "../../elements/CusComponets";
import SliderWrapper from "../SliderWraper/SliderWrapper";
import Image from "next/image";
const NextTripSection: FC<IPorpsNextTrip> = ({
  dataNextTripArr,
  mainTitle,
}) => {
  return (
    <Box sx={{ marginTop: "1rem" }}>
      <Typography sx={{ fontSize: "1rem", fontWeight: "bold", marginBottom: "1rem" }}>
        {mainTitle}
      </Typography>
      <SliderWrapper numberOfShowSlider={4} ArrowPosition="40%">
        {dataNextTripArr.map(({ image, title }, index) => {
          return (
            <Box key={index}>
              <CusCard  >
                <Image src={image} alt="" className="rounded-lg" />
                <CusTPSimpleCard>{title}</CusTPSimpleCard>
              </CusCard>
            </Box>
          );
        })}
      </SliderWrapper>
    </Box>
  );
};

export default NextTripSection;
