import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { CusCircleIcon, CusCircleOutLine, StyledRating } from "../../elements/CusComponets";

interface BeenHereCardsProps {
  image: string;
  name: string;
  location: string;
}

const BeenHereCards: FC<BeenHereCardsProps> = ({ image, name, location }) => {

  return (
    <Box display={"flex"} gap={2} alignItems={"center"}>
      <img src={image} alt="" style={{ width: "70px", height: "70px" }} />
      <Box>
        <Typography sx={{ fontWeight: "bold" }}>{name}</Typography>
        <Typography sx={{ margin: "0.10rem  0" }}>{location}</Typography>
        <Box display={"flex"}>
          <StyledRating
            defaultValue={2}
            // precision={0.5}
            icon={<CusCircleIcon fontSize="inherit" />}
            emptyIcon={<CusCircleOutLine fontSize="inherit" />}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default BeenHereCards;
