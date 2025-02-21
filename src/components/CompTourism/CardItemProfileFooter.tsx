import { FC } from "react";
import { ICardItemProfileFooterProps } from "../../types/intefaces";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { CusCardItemProfileFooter } from "@/elements/CusComponets";

const CardItemProfileFooter: FC<ICardItemProfileFooterProps> = ({
  countOfIem,
  imgCover,
  profile,
  title,
  writer,
  link,
}) => {

  return (
    <Link href={link}>
      <CusCardItemProfileFooter>
        <img src={imgCover} alt="" style={{ borderRadius: "1rem", width: "100%", objectFit: "cover" }} />
        <Box display={"flex"} flexDirection={"column"} marginTop={"1rem"} gap={1}>
          <Typography sx={{ fontWeight: "bold", fontSize: "0.90rem" }}>
            {title}
          </Typography>
          <Typography sx={{ color: "#444", fontSize: "0.85rem" }}> {countOfIem} آیتم </Typography>
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <img src={profile} alt="" style={{ width: "35px" }} className="rounded-full" />
            <Typography fontSize={"0.80rem"}>{writer} توسط </Typography>
          </Box>
        </Box>
      </CusCardItemProfileFooter>
    </Link>
  );
};

export default CardItemProfileFooter;
