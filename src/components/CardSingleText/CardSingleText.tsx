import { FC } from "react";
import { ICardSingleTextProps } from "../../types/intefaces";
import { Box } from "@mui/material";
import { CusTPForCard, DarkOverlay } from "../../elements/CusComponets";
// import { useMedia } from "../../context/MediaQueryContext";
import Link from "next/link";

const CardSingleText: FC<ICardSingleTextProps> = ({
  TopCover,
  textBody,
  heightCard,
  link
}) => {
  // const isXs = useMedia();

  return (
    <Link href={link ? link : "/"} prefetch={true}>
      <Box margin={"0  0.25rem"}>
        <Box
          sx={{ position: "relative", height: heightCard ? heightCard : "100%" }}
        >
          <DarkOverlay />
          <img
            src={TopCover}
            alt=""
            style={{
              objectFit: "cover",
              objectPosition: "center",
              width: "100%",
              height: heightCard ? heightCard : "250px",
              borderRadius: "0.5rem",
            }}
          />
          <CusTPForCard sx={{
            fontSize: { xs: "0.90rem ", md: "1.3rem" },
            fontWeight: { xs: "light", md: "bold" },
          }}>{textBody}</CusTPForCard>
        </Box>
      </Box>
    </Link>
  );
};

export default CardSingleText;
