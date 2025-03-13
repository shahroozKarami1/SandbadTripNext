import { Button, ButtonProps } from "@mui/material";
import { FC } from "react";
// import { useMedia } from "../../context/MediaQueryContext";
interface IPrimaryBtn extends ButtonProps {
  text: string
}

const PrimaryBtn: FC<IPrimaryBtn> = ({ text, sx }) => {
  // let  isXs =  useMedia()
  return <Button sx={{
    bgcolor: "var(--primary-color)",
    color: "#000",
    width: { xs: "90%", md: "200px" },
    fontWeight: "bold",
    height: "100%",
    padding: "0.5rem  1rem",
    marginRight: "1rem",
    borderRadius: "2rem",
    ...sx

  }} onClick={() => console.log("object")}>{text}</Button>;
};

export default PrimaryBtn;
