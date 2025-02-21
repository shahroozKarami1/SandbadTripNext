import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { ICardRentalProps } from "../../types/intefaces";
import { CusRentalCard } from "@/elements/CusComponets";

const CardRental: FC<ICardRentalProps> = ({ TopCover, textBody }) => {

  return (
    <CusRentalCard>
      <Box sx={{ position: "absolute", top: "-30px" }} >
        <img src={TopCover} alt="" style={{ width: "50px" }} />
      </Box>
      <Typography sx={{ textAlign: "center", fontSize: "0.90rem" }}>{textBody}</Typography>
    </CusRentalCard>
  );
};

export default CardRental;
