import { Box, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material'
import { Dispatch, FC, SetStateAction } from 'react'
import InputEmailAuth from './InputEmailAuth'
import DarkBtn from '../DarkBtn/DarkBtn'

interface EmailAuthProps {
    isOpen: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
}

const EmailAuth: FC<EmailAuthProps> = ({ isOpen, setOpen }) => {
    return (
        <Dialog
            maxWidth={"sm"}
            onClose={() => setOpen(false)}
            open={isOpen}
            keepMounted>
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
                        خوش آمدید :)
                    </Typography>


                </Box>
            </DialogTitle>
            <DialogContent >
                <Box>
                    <InputEmailAuth label='ایمیل خود را وارد کنید' placeholder='ایمیل' type='text' />
                    <InputEmailAuth label='رمز عبور خود را وارد کنید' placeholder='رمز عبور' type={"password"} />
                    <Box  >
                        <DarkBtn sx={{
                            width: "100%",
                            mt: '2rem'
                        }}>ثبت نام</DarkBtn>

                    </Box>
                </Box>
                <Box display={"flex"} sx={{ marginTop: "3rem", marginX: "3rem" }} justifyContent={"center"} gap={1} flexDirection={"column"}>
                    <Typography sx={{ textAlign: "center", color: "#444", fontSize: "0.70rem" }} >
                        با ادامه، شما با شرایط استفاده ما موافقت می کنید و تأیید می کنید که بیانیه حریم خصوصی و کوکی ما را خوانده اید.
                    </Typography>
                    <Typography sx={{ textAlign: "center", color: "#444", fontSize: "0.70rem" }} >
                        این سایت توسط reCAPTCHA محافظت می شود و خط مشی رازداری Google و شرایط خدمات اعمال می شود.            </Typography>
                </Box>
            </DialogContent>

        </Dialog>
    )
}

export default EmailAuth