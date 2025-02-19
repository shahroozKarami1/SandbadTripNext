import { FC } from "react";
import CardSingleText from "../CardSingleText/CardSingleText";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

const CollectionCard: FC<{
  link: string;
  footerText: string;
  TopCover: string;
  textBody: string;
}> = ({ TopCover, footerText, link, textBody }) => {
  return (
    <Link href={link}>
      <Box sx={{ margin: "0.5rem" }}>
        <CardSingleText heightCard="380px" TopCover={TopCover} textBody={textBody} />
        <Typography
          sx={{
            textAlign: "right",
            fontSize: "0.80rem",
            padding: "  0.5rem  1rem",
          }}
        >
          {footerText}
        </Typography>
      </Box>
    </Link>
  );
};

export default CollectionCard;
