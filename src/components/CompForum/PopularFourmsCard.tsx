import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { IPopularFourmsCardProps } from "../../types/intefaces";
import Link from "next/link";

const PopularFourmsCard: FC<IPopularFourmsCardProps> = ({
  name,
  numberTopics,
  coverImg,
}) => {
  return (
    <Link href={"/"}>
      <Box display={"flex"} flexDirection={"column"} sx={{ margin: "0  0.5rem" }}>
        <img
          src={coverImg}
          alt=""
          style={{ height: "300px", borderRadius: "1rem" }}
        />
        <Box
          gap={1}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-end"}
          sx={{ marginTop: "0.5rem" }}
        >
          <Typography sx={{ fontWeight: "bold" }}>{name}</Typography>
          <Typography sx={{ color: `#444`, fontSize: "0.90rem" }}>
            {numberTopics} موضوع
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default PopularFourmsCard;
