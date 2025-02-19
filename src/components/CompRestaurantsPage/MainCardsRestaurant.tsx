import { FC } from "react";
import { IMainCardsRestaurant } from "../../types/intefaces";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import { CardRestauran } from "@/elements/CusComponets";
const MainCardsRestaurant: FC<IMainCardsRestaurant> = ({
  disc,
  logo,
  title,
}) => {

  return (
    <Grid size={{ md: 4 }}>
      <CardRestauran>
        <Box sx={{ position: "absolute", top: "-30px" }}>
          <Image src={logo} alt="" style={{ width: "120px" }} />
        </Box>
        <Box sx={{ marginTop: "1rem" }} >
          <Typography sx={{ fontWeight: "bold", color: `var(--primary-color)`, textAlign: "center" }}>
            {title}
          </Typography>
          <Typography sx={{ textAlign: "center", marginTop: "0.75rem", fontSize: "0.90rem" }}>{disc}</Typography>
        </Box>
      </CardRestauran>
    </Grid>
  );
};

export default MainCardsRestaurant;
