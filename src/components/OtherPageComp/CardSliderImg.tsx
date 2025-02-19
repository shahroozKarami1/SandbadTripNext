import { Box } from "@mui/material";
import { FC } from "react";

const CardSliderImg: FC<{ Image: string }> = ({ Image }) => {
  return (
    <Box sx={{ height: "350px", width: "100%" }}>
      <Image
        src={Image}
        style={{
          objectFit: "cover",
          objectPosition: "center",
          height: "100%",
          width: "100%",
        }}
      />
    </Box>
  );
};

export default CardSliderImg;
