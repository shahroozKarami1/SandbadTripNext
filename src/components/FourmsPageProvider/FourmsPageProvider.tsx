"use client"
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import InpSearch from "../../components/InpSearch/InpSearch";
import DarkBtn from "../../components/DarkBtn/DarkBtn";
import ListOfForum from "../../components/CompForum/ListOfForum";
import PopularFourmsCard from "../../components/CompForum/PopularFourmsCard";
import SliderWrapper from "../../components/SliderWraper/SliderWrapper";
import TitleSection from "../../components/ComHomePage/TitleSection";
// import { useMedia } from "../../context/MediaQueryContext";
import Link from "next/link";
import { CusMainBox, CusTgSubText } from "@/elements/CusComponets";
const Formus = () => {
  // let isXs = useMedia()


  let browseDistinationArr = [
    { text: "آمریکا", link: "/" },
    { text: "اروپا", link: "/" },
    { text: "کانادا", link: "/" },
    { text: "آسیا", link: "/" },
    { text: "آمریکای مرکزی", link: "/" },
    { text: "آفریقا", link: "/" },
    { text: "کلمبیا", link: "/" },
    { text: "آسیا", link: "/" },
    { text: "آمریکای مرکزی", link: "/" },
    { text: "آفریقا", link: "/" },
    { text: "کلمبیا", link: "/" },
  ];

  let browseTheme = [
    { text: "مسافرت  با حیوانات خانگی ", link: "/" },
    { text: "خارج از منزل / سفر ماجراجویی ", link: "/" },
    { text: "سفرهای جاده ای ", link: "/" },
    { text: "اسبابک و وسایل سفر ", link: "/" },
    { text: "ماه عسل و عاشقانه ", link: "/" },
    { text: "ماه عسل و عاشقانه ", link: "/" },
    { text: "سفر خانوادگی ", link: "/" },
    { text: "سفر مقرون به صرفه ", link: "/" },
  ];
  return (
    <Box>
      <Box sx={{ bgcolor: "#F2F2F2", margin: "3rem  0 ", padding: "3rem" }}>
        <Container>
          <Grid container justifyContent={"center"} alignItems={"flex-end"}>
            <Grid size={{ md: 6, xs: 12 }}  >
              <Box display={"flex"} flexDirection={{ xs: "column", md: "row" }} gap={2}>
                <img
                  src="/images/Formus/bgImg.svg"
                  alt=""
                  style={{
                    width: "250px",
                    margin: "0 auto"
                  }}
                />
                <Typography sx={{ fontWeight: "bold", fontSize: { xs: "1.5rem", md: "2.5rem" }, textAlign: { xs: "center", md: "right" }, paddingY: "1rem" }}>
                  انجمن های Tripadvisor
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ md: 6, xs: 12 }}>
              <Box flexDirection={{ xs: "column", md: "row" }} display={"flex"} gap={2}  >
                <Box width={"100%"}>
                  <InpSearch
                    isBtnSearch={false}
                    textPlaceHolder="بهترین راه برای سفر با قطار در ژاپن؟"
                  />
                </Box>
                <DarkBtn>جستجو در انجمن ها</DarkBtn>
              </Box>
            </Grid>
          </Grid>
          <CusMainBox sx={{ bgcolor: "#fff" }}>
            <Grid container spacing={3}>
              <Grid size={{ md: 5 }}>
                <Box
                  display={"flex"}
                  alignItems={"flex-start"}
                  flexDirection={"column"}
                  gap={1}
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                      marginBottom: "1rem",
                    }}
                  >
                    به اشتراک بگذارید یاد بگیرید. برو
                  </Typography>
                  <CusTgSubText sx={{ fontSize: { xs: "0.90rem", md: "1.2rem" } }}    >
                    از مسافرانی که قبلاً آنجا بوده اند بپرسید.
                  </CusTgSubText    >
                  <CusTgSubText sx={{ fontSize: { xs: "0.90rem", md: "1.2rem" } }}>
                    تجربه خود را با همسفران در میان بگذارید.{" "}
                  </CusTgSubText>
                  <Link href={"/"}>
                    <CusTgSubText sx={{ fontSize: { xs: "0.90rem", md: "1.2rem" } }}>
                      از مرکز راهنمایی انجمن ها دیدن کنید
                    </CusTgSubText>
                  </Link>
                </Box>
              </Grid>
              <Grid size={{ md: 7 }}>
                <Grid container>
                  <Grid size={{ md: 6 }}>
                    <ListOfForum
                      title="بر اساس مقصد مرور کنید"
                      DataArrListFormus={browseDistinationArr}
                    />
                  </Grid>
                  <Grid size={{ md: 6 }}>
                    <ListOfForum
                      title="بر اساس موضوع مرور کنید"
                      DataArrListFormus={browseTheme}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CusMainBox>
        </Container>
      </Box>
      <Container>
        <Box>
          <TitleSection isSubTitle={false} mainTitle="به بحث بپیوندید" isSeeAll={false} />
          <Typography fontWeight={"bold"} fontSize={{ xs: "1.5rem", md: " 2rem" }} mb={"2rem"}>انجمن های محبوب مقصد</Typography>
          <SliderWrapper numberOfShowSlider={3} ArrowPosition="35%">
            <PopularFourmsCard
              name="شهر نیویورک"
              coverImg="/images/Formus/popularFormus/img1.jpg"
              numberTopics={21700}
            />
            <PopularFourmsCard
              name="شهر نیویورک"
              coverImg="/images/Formus/popularFormus/img2.jpg"
              numberTopics={21700}
            />
            <PopularFourmsCard
              name="شهر نیویورک"
              coverImg="/images/Formus/popularFormus/img3.jpg"
              numberTopics={21700}
            />
          </SliderWrapper>
        </Box>
      </Container>
    </Box >
  );
};

export default Formus;
