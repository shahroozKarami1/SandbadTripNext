import {  Typography } from "@mui/material";
import { FC } from "react";
import { ICardInsideText } from "../../types/intefaces";
import { CusCardTextBox, CusCardWrapper, DarkOverlay } from "../../elements/CusComponets";
import Link from "next/link";

const CardInsidetext: FC<ICardInsideText> = ({
  cover,
  text,
  link,
  isBigImage
}) => {


  return (
    <Link href={link} prefetch ={true}>
      <CusCardWrapper>
        <DarkOverlay />
        <img
          src={cover}
          alt=""
          style={{
            borderRadius: "1rem",
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
        <CusCardTextBox sx={{
          fontSize: isBigImage ? "2rem" : "1rem",
        }}>
          <Typography className="CardText">{text}</Typography>
        </CusCardTextBox>
      </CusCardWrapper>
    </Link>
  );
};

export default CardInsidetext;
