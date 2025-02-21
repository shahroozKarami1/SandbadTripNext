import { FC } from "react";
import { IReadMoreCardProps } from "../../types/intefaces";
import { Box, Typography } from "@mui/material";
import BtnWhteBlackTex from "../BtnWhiteTextBlackColor/BtnWhteBlackTex";
import Link from "next/link";
import { CusWrapperCard } from "@/elements/CusComponets";

const ReadMoreCard: FC<IReadMoreCardProps> = ({
  coverImg,
  disc,
  link,
  titleCard,
}) => {


  return (
    <Link href={link}>
      <CusWrapperCard>
        <Box height={"160px"} width={"100%"} display={"flex"} alignItems={"center"}>
          <img
            className="rounded-lg"
            src={coverImg}
            alt=""
            style={{
              margin: " 0.5rem",
              height: "100%",
              width: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Box>
        <Box display={"flex"} flexDirection={"column"}>
          <Typography
            sx={{ fontWeight: "bold", fontSize: "1.2rem", padding: "0.25rem " }}
          >
            {titleCard}
          </Typography>
          <Typography sx={{ fontSize: "0.90rem", padding: "0.25rem" }}>
            {disc}
          </Typography>
          <Box display={"flex"} justifyContent={"flex-end"} marginTop={"1rem"}>
            <BtnWhteBlackTex link="/" title="الان  بخوانید" />
          </Box>
        </Box>
      </CusWrapperCard>
    </Link>
  );
};

export default ReadMoreCard;
