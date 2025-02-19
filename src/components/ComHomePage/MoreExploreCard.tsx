import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { IMoreExploreCardProps } from "../../types/intefaces";
import { CusBoxIconHeart } from "../../elements/CusComponets";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Image from "next/image";

const MoreExploreCard: FC<IMoreExploreCardProps> = ({ image, disc }) => {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} margin={"  0 1rem"}>
      <Box sx={{ position: "relative" }}>
        <Image src={image} alt="" className="rounded-lg" />
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
