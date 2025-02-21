import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { FC } from "react";

const CardHorizontal: FC<{ text: string; coverCard: string; link: string }> = ({
  text,
  coverCard,
  link,
}) => {
  return (
    <Link href={link}>
      <Box display={"flex"} gap={1} alignItems={"flex-start"}>
        <img src={coverCard} alt="" style={{ width: "150px" }} className="rounded-lg  " />
        <Typography sx={{ fontWeight: "bold", fontSize: "0.90rem" }}>
          {text}
        </Typography>
      </Box>
    </Link>
  );
};

export default CardHorizontal;
