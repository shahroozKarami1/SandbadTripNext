import { Box, Container, List } from "@mui/material";
import Grid from "@mui/material/Grid2";
import DarkBtn from "../DarkBtn/DarkBtn";
// import LanguageIcon from "@mui/icons-material/Language";
import TopBarMenu from "../ComHomePage/TopBarMenu";
import InpSearch from "../InpSearch/InpSearch";
import { CusStickyMenu } from "../../elements/CusComponets";
import NavbarMenu from "../ComHomePage/NavBarMenu";
import { useMedia } from "../../context/MediaQueryContext";
import { useState } from "react";
import LoginBox from "../LoginBox/LoginBox";
import Link from "next/link";

const MainHeader = () => {
  let [isOpenProfileBox, setIsOpenProfileBox] = useState<boolean>(false);


  const isXs = useMedia();
  return (
    !isXs && (
      <CusStickyMenu>
        <Container>
          <Box display={"flex"} gap={3} alignItems={"center"}>
            <Box sx={{ width: '100px' }}>
              <Link href={"/"}>
                <img
                  src="/images/AllNewLogos/singleLogo.svg"
                  alt=""
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    height: "100%",
                    width: "100%",
                  }}
                />
              </Link>
            </Box>
            {/* <Box
          sx={{ cursor: "pointer" }}
          display={"flex"}
          alignItems={"center"}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "0.85rem" }}>
            USD
          </Typography>
          <Divider>|</Divider>
          <LanguageIcon />
        </Box> */}
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              sx={{ whiteSpace: "nowrap" }}
            >
              <TopBarMenu
                titleMenu="کشف  کنید"
                subMenuArray={[
                  { link: "/Articles", text: "داستان های سفر" },
                  { link: "/TravelersChoice", text: "انتخاب مسافران" },
                ]}
              />
              <TopBarMenu
                titleMenu="سفر ها"
                subMenuArray={[
                  { link: "/Trips", text: "مشاهده سفرهای من" },
                  { link: "/Trips", text: "شروع  یک سفر جدید !" },
                  { link: "/TripBuilder", text: "ساهت سفر باهوش مصنوعی" },
                ]}
              />
              <TopBarMenu
                titleMenu="بررسی کنید "
                subMenuArray={[
                  { link: "/UserReview", text: "نوشتن بررسی" },
                  { link: "/PostPhotos", text: "ارسال تصاویر" },
                  { link: "/CreateListing", text: "اضافه کردن مکان" },
                ]}
              />
            </Box>
            <InpSearch textPlaceHolder="جست و جو..." isBtnSearch={false} />
            <DarkBtn setState={setIsOpenProfileBox}>ورود </DarkBtn>
            <LoginBox
              setOpen={setIsOpenProfileBox}
              open={isOpenProfileBox}
            />{" "}
          </Box>
          ‌
          <Grid container>
            <Box>
              <List sx={{ display: "flex", alignItems: "center", height: "40px" }}>
                <NavbarMenu
                  id={0}
                  fontSize="0.9rem"
                  NavBarMenuArr={[{ title: "هتل ها  ", link: "/Hotels" }]}
                />
                <NavbarMenu
                  id={1}
                  fontSize="0.9rem"
                  NavBarMenuArr={[
                    {
                      title: "کارهایی برای انجام ",
                      link: "/Attractions",
                    },
                  ]}
                />
                <NavbarMenu
                  id={2}
                  fontSize="0.90rem"
                  NavBarMenuArr={[
                    { title: "رستوران ها ", link: "/Restaurants" },
                  ]}
                />
                <NavbarMenu
                  id={3}
                  fontSize="0.90rem"
                  NavBarMenuArr={[
                    { title: "پرواز ها ", link: "/CheapFlightsHome" },
                  ]}
                />
                <NavbarMenu
                  id={4}
                  fontSize="0.90rem"
                  NavBarMenuArr={[
                    {
                      title: " تعطیلات اجاره ها ",
                      link: "/Rentals",
                    },
                  ]}
                />
                <NavbarMenu
                  id={5}
                  fontSize="0.90rem"
                  NavBarMenuArr={[
                    {
                      title: "صفحه اصلی انجمن ",
                      link: "/ForumHome",
                    },
                  ]}
                />
                {/* <NavbarMenu
              fontSize="0.80rem"
              NavBarMenuArr={[
                {
                  title: "ماشین های اجاره ای ",
                  link: "/RentalCars",
                },
              ]}
            /> */}
                <NavbarMenu
                  id={6}
                  fontSize="0.90rem"
                  NavBarMenuArr={[
                    {
                      title: "سفرهای دریایی ",
                      link: "/Cruises",
                    },
                  ]}
                />
              </List>
            </Box>
          </Grid>
        </Container>
      </CusStickyMenu>
    )
  );
};

export default MainHeader;
