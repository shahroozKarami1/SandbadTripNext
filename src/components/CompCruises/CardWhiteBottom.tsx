import { FC } from "react";
import { ICardWhiteBottomProps } from "../../types/intefaces";
import { Typography } from "@mui/material";
import Link from "next/link";
import { CusCardWhiteBottom } from "@/elements/CusComponets";

const CardWhiteBottom: FC<ICardWhiteBottomProps> = ({
  coverImg,
  name,
  link,
}) => {

  return (
    <>
      <Link href={link} prefetch={true}>
        <CusCardWhiteBottom sx={{ bgcolor: "#fff" }}>
          <img
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
