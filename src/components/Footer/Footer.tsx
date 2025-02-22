import {
  Box,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import { useMedia } from "../../context/MediaQueryContext";
import Link from "next/link";
function Footer() {
  let isXs = useMedia()
  return (

    <Grid container spacing={2}>
      <Grid size={{ md: 8, xs: 12 }}>
        <Box display={"flex"} alignItems={"center"} justifyContent={"end"}  >
          <Link href={"/"}>
            <Box sx={{ width: "100px", height: "100px", marginLeft: "1rem" }}>
              <img
                src="/images/AllNewLogos/textLogo.svg"
                alt=""
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  height: "100%",
                  width: "100%",
                }}
              />
            </Box>
          </Link>
          <Box
            display={"flex"}
            flexDirection={"column"}
            sx={{ width: "100%" }}
          >
            <Typography
              sx={{ color: `var(--gray-color)`, fontSize: "0.80rem" }}
            >
              © 2024 Tripadvisor LLC کلیه حقوق محفوظ است.
            </Typography>
            <List
              sx={{
                display: "flex",
                whiteSpace: "nowrap",
                fontSize: "0.80rem",
                fontWeight: "bold",
                flexDirection: isXs ? "column" : "row",

              }}
            >
              <ListItem>
                <Link href={"/"}>شرایط استفاده</Link>
              </ListItem>
              <ListItem>
                <Link href={"/"}>بیانیه حریم خصوصی و کوکی ها</Link>
              </ListItem>
              <ListItem>
                <Link href={"/"}>رضایت کوکی</Link>
              </ListItem>
              <ListItem>
                <Link href={"/"}>نقشه سایت</Link>
              </ListItem>
              <ListItem>
                <Link href={"/"}>نحوه کار سایت</Link>
              </ListItem>
              <ListItem>
                <Link href={"/"}>با ما تماس بگیرید</Link>
              </ListItem>
            </List>
            <Typography
              sx={{
                fontSize: "0.75rem",
                lineHeight: "2",
                margin: "0  0.5rem",
              }}
            >
              این نسخه از وب سایت ما است که مخاطبان انگلیسی زبان در ایالات
              متحده است. اگر ساکن کشور یا منطقه دیگری هستید، لطفاً نسخه مناسب
              Tripadvisor را برای کشور یا منطقه خود در منوی کشویی انتخاب کنید.
              بیشتر
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid size={{ md: 4, xs: 12 }} alignContent={"center"}  >
        <Box display={"flex"} flexDirection={"column"}>
          {/* <Box display={"flex"} alignItems={"center"} gap={2} width={"100%"}>
              <CusAutoComplete
                disablePortal
                fullWidth
                options={top100Films}
                value={"United States"}
                renderInput={(params) => <TextField {...params} />}
              />
              <CusAutoComplete
                disablePortal
                fullWidth
                options={top100Films}
                value={"USD$"}
                renderInput={(params) => <TextField {...params} />}
              />
            </Box> */}
          <Box justifyContent={"center"} display={"flex"} gap={3} sx={{ marginTop: "1rem" }}>
            <PinterestIcon />
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <XIcon />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Footer;
