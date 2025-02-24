import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { IPorpsNextTrip } from "../../types/intefaces";
import { CusCard, CusTPSimpleCard } from "../../elements/CusComponets";
import SliderWrapper from "../SliderWraper/SliderWrapper";
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
        {dataNextTripArr.map(({ Image, title }, index) => {
          return (
            <Box key={index}>
              <CusCard  >
                <Box sx={{ height: '300px', width: "100%" }}>
                  <img src={Image} alt="" className="rounded-lg" style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    width: "100%",
                    height: "100%",
                  }} />

                </Box>
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
