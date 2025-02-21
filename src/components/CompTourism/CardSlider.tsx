import { Box, Typography } from "@mui/material";
import { FC } from "react";
import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
import Link from "next/link";
import { CusCountPhoto } from "@/elements/CusComponets";
interface CardSliderProps {
  link: string;
  cover: string;
}
const CardSlider: FC<CardSliderProps> = ({ cover, link }) => {

  return (
    <Link href={link}>
      <Box sx={{ position: "relative" }}>
        <img src={cover} alt="" className="rounded-lg" />
        <CusCountPhoto>
          <PhotoSizeSelectActualOutlinedIcon sx={{
            "path": {
              color: "#fff"
            }
          }} />
          <Typography sx={{ color: "#fff", fontSize: "0.70rem", fontWeight: "bold" }} >2,250,000</Typography>
        </CusCountPhoto>
      </Box>
    </Link>
  );
};

export default CardSlider;
