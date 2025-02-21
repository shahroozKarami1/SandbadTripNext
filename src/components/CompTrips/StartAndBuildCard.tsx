import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { CusBtnStartAndBuildCard, CusStartAndBuildCardTrip } from "../../elements/CusComponets";
import { IStartAndBuildCardProps } from "../../types/intefaces";

const StartAndBuildCard: FC<IStartAndBuildCardProps> = ({
  colorBack,
  colorBtn,
  cover,
  disc,
  textBtn,
  title,
}) => {

  return (
    <CusStartAndBuildCardTrip sx={{ bgcolor: colorBack }}>
      <img
        src={cover}
        alt=""
        style={{
          objectFit: "cover",
          objectPosition: "center",
          width: "300px",
        }}
      />
      <Box sx={{ width: "300px" }}>
        <Typography
          sx={{ fontWeight: "bold", fontSize: "1.5rem", padding: "1.2rem  0", marginTop: "0.5rem" }}
        >
          {title}
        </Typography>
        <Typography>{disc}</Typography>
        <CusBtnStartAndBuildCard sx={{
          bgcolor: colorBtn.colorBack, color: colorBtn.colorText ? colorBtn.colorText : `var(--dark-color)`,
        }}>{textBtn}</CusBtnStartAndBuildCard>
      </Box>
    </CusStartAndBuildCardTrip>
  );
};

export default StartAndBuildCard;
