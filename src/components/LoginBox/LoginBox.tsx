"use client"
import {
  Box,
  Button,
  ButtonProps,
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Typography,
} from "@mui/material";
import { FC, forwardRef, useState } from "react";
import { IProfileBox } from "../../types/intefaces";
import { TransitionProps } from "@mui/material/transitions";
import GoogleIcon from "@mui/icons-material/Google";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
interface ICusBtnForContinue extends ButtonProps {
  icon: React.ReactNode;
  text: string;
}
import EmailAuth from "./EmailAuth";
const CusBtnForContinue: FC<ICusBtnForContinue> = ({ icon, text, onClick, onBlur }) => {

  return (
    <>
      <Button
        onClick={onClick}
        onBlur={onBlur}
        sx={{
          display: "flex",
          width: "70%",
          padding: "0.75rem",
          border: "1px  solid  #000",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "2rem",
          margin: "1rem  auto",
        }}
      >
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Typography>{text}</Typography>
        </Box>
        <Box sx={{ position: "absolute", right: 20 }}>{icon}</Box>
      </Button>


    </>
  );
};

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const LoginBox: FC<IProfileBox> = ({ setOpen, open }) => {
  let [isOpenAuthEmailBox, setIsOpenAuthEmailBox] = useState<boolean>(false)

  function handlerClose() {
    setOpen(false);
  }

  return (
    <Box>
      <Dialog
        maxWidth={"sm"}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handlerClose}
      >
        <DialogTitle>
          <Box
            sx={{ padding: "2rem" }}
            display={"flex"}
            flexDirection={"column"}
            gap={1}
          >
            <img
              style={{
                width: "50px",
              }}
              src="/images/AllNewLogos/singleLogo.svg"
              alt=""
            />
            <Typography sx={{ fontSize: "1.5rem" }}>
              برای باز کردن بهترین های Tripadvisor وارد شوید.
            </Typography>
          </Box>
        </DialogTitle>
        <DialogContent >
          <CusBtnForContinue
            icon={
              <GoogleIcon
                sx={{ "& path": { color: "var(--primary-color)" } }}
              />
            }
            text="با گوگل ادامه دهید"
          />
          <CusBtnForContinue
            onClick={() => setIsOpenAuthEmailBox(true)}
            icon={
              <EmailOutlinedIcon
                sx={{ "& path": { color: "var(--primary-color)" } }}
              />
            }
            text="باایمیل ادامه دهید"
          />
          <Box display={"flex"} sx={{ marginTop: "7rem", marginX: "3rem" }} justifyContent={"center"} gap={1} flexDirection={"column"}>
            <Typography sx={{ textAlign: "center", color: "#444", fontSize: "0.70rem" }} >
              با ادامه، شما با شرایط استفاده ما موافقت می کنید و تأیید می کنید که بیانیه حریم خصوصی و کوکی ما را خوانده اید.
            </Typography>
            <Typography sx={{ textAlign: "center", color: "#444", fontSize: "0.70rem" }} >
              این سایت توسط reCAPTCHA محافظت می شود و خط مشی رازداری Google و شرایط خدمات اعمال می شود.            </Typography>
          </Box>
        </DialogContent>

      </Dialog>


        <EmailAuth isOpen={isOpenAuthEmailBox}   setOpen = {setIsOpenAuthEmailBox} />
    </Box>
  );
};

export default LoginBox;
