import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { IMoreExploreCardProps } from "../../types/intefaces";
import { CusBoxIconHeart } from "../../elements/CusComponets";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const MoreExploreCard: FC<IMoreExploreCardProps> = ({ Image, disc }) => {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} margin={"0 1rem"} >
        <Box sx={{ height: "100%", width: "350px" ,  position : "relative" }}>
          <img src={Image} alt="" className="rounded-lg" style={{
            width: "100%",
            height: '100%',
            objectFit: 'cover',
            borderRadius: "1rem",
            objectPosition: "center"
          }} />

        <CusBoxIconHeart>
          <FavoriteBorderIcon />
        </CusBoxIconHeart>
        </Box>
      <Box sx={{ margin: "  1rem  2rem" }}>
        <Typography
          sx={{ textAlign: "center", fontWeight: "bold", fontSize: "0.90rem" }}
        >
          {disc}
        </Typography>
      </Box>
    </Box>
  );
};

export default MoreExploreCard;
