import { FC } from "react";
import { ICardWhiteBottomProps } from "../../types/intefaces";
import {  Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { CusCardWhiteBottom } from "@/elements/CusComponets";

const CardWhiteBottom: FC<ICardWhiteBottomProps> = ({
  coverImg,
  name,
  link,
}) => {

  return (
    <>
      <Link href={link}>
        <CusCardWhiteBottom sx={{ bgcolor: "#fff" }}>
          <Image
            src={coverImg}
            alt=""
            style={{ height: "200px", width: "100%" }}
          />
          <Typography
            sx={{
              fontWeight: "bold",
              marginRight: "  1rem",
              marginTop: "1rem",
              display: "inline-block",
            }}
            className="titleCard"
          >
            {name}
          </Typography>
        </CusCardWhiteBottom>
      </Link>
    </>
  );
};

export default CardWhiteBottom;
