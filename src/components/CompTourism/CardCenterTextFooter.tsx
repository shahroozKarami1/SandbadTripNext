import { Box } from "@mui/material";
import { FC } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Link from "next/link";
import { CusBoxWrapper, CusText } from "@/elements/CusComponets";
import Image from "next/image";
const CardCenterTextFooter: FC<{
  link: string;
  image: string;
  textFooter: string;
}> = ({ image, link, textFooter }) => {

  return (
    <Link href={link}>
      <CusBoxWrapper>
        <Box sx={{ position: "absolute", top: 10, right: 20 }}>
          <FavoriteBorderOutlinedIcon
            sx={{
              bgcolor: "#fff",
              borderRadius: "50%",
              fontSize: "2rem",
              padding: "0.25rem",
            }}
          />
        </Box>
        <Image
          src={image}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "1rem",
          }}
        />
      </CusBoxWrapper>
      <Box sx={{ padding: " 0.5rem  1.5rem ", marginTop: "0.5rem" }}>
        <CusText>{textFooter}</CusText>
      </Box>
    </Link>
  );
};

export default CardCenterTextFooter;
