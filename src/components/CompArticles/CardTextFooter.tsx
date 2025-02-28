import { FC } from "react";
import { ICardTextFooterProps } from "../../types/intefaces";
import { Box, Typography } from "@mui/material";

const CardTextFooter: FC<ICardTextFooterProps> = ({ Image, subTitle, title }) => {
  return (
    <Box sx={{width : "200px"   }}>
      <Box sx={{
        height: "100%",
        width: "100%"
      }}>
        <img
          src={Image}
          style={{
            objectFit: "cover",
            objectPosition: "center",
            height: "100%",
            width: "100%" , 
            borderRadius : "1rem  "
          }}
          alt=""
          className="rounded-lg  transition-all cursor-pointer  hover:opacity-70"
        />
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-end"}
        sx={{ padding: "1rem  0" }}
        gap={1}
      >
        <Typography sx={{ fontWeight: "bold" }}>{title}</Typography>
        <Typography
          sx={{ color: `#444`, textAlign: "right", fontSize: "0.90rem" }}
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default CardTextFooter;
