import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { ICardFooterDicsProps } from "../../types/intefaces";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { CusCircleIcon, CusCircleOutLine, WrapperBox } from "../../elements/CusComponets";
import Link from "next/link";

const CardFooterDics: FC<ICardFooterDicsProps> = ({
  countLike,
  discFooter,
  title,
  link,
  coverCard,
}) => {


  return (
    <Link href={link}>
      <Box>
        <WrapperBox>
          <img
            src={coverCard}
            alt=""
            style={{
              borderRadius: "1rem",
              objectFit: "cover",
              height: "100%",
              width: "100%",
              objectPosition: "center",
            }}
          />
          <Box sx={{ position: "absolute", top: 20, right: 20 }}>
            <FavoriteBorderOutlinedIcon
              sx={{
                bgcolor: "#fff",
                borderRadius: "50%",
                fontSize: "2rem",
                padding: "0.25rem",
              }}
            />
          </Box>
        </WrapperBox>
        <Box
          display={"flex"}
          sx={{ direction: "rtl", padding: "0.5rem  1rem" }}
          flexDirection={"column"}
        >
          <Typography sx={{ fontWeight: "bold" }}>{title}</Typography>
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={1}
            sx={{ padding: "0.5rem  0" }}
          >
            <Box display={"flex"}>
              <CusCircleIcon />
              <CusCircleIcon />
              <CusCircleIcon />
              <CusCircleOutLine />
              <CusCircleOutLine />
            </Box>
            <Typography sx={{ fontSize: "0.80rem" }}>{countLike}</Typography>
          </Box>
          <Typography sx={{ fontSize: "0.85rem" }}>{discFooter}</Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default CardFooterDics;
