import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import InpSearch from "@/components/InpSearch/InpSearch";
import BeenHereCards from "@/components/CompUserReview/BeenHereCards";
// import { useMedia } from "@/context/MediaQueryContext";
import Link from "next/link";
import { CusAddPlaceBtn, CusBoxBtnCard, CusBoxTextCard } from "@/elements/CusComponets";
function UserReview() {
  // let isXs = useMedia();

  return (
    <>
      <Box sx={{ bgcolor: `var(--gray-back)`, padding: "3rem  0" }}>
        <Container maxWidth="lg">
          <Grid container alignItems={"center"} justifyContent={"center"}>
            <Grid size={{ md: 8 }}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={4}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Typography sx={{ fontWeight: "bold", fontSize: "2.5rem", textAlign: { xs: "center", md: "right" }}}>
                نظر بنویسید، سفر کسی را انجام دهید
              </Typography>
              <Typography sx={{ textAlign: "center" }}>
                داستان هایی مانند داستان شما به مسافران کمک می کند سفرهای
                بهتری داشته باشند. تجربه خود را به اشتراک بگذارید و به یک
                همسفر کمک کنید!
              </Typography>

              <InpSearch
                isBtnSearch={false}
                textPlaceHolder="دوست دارید چه چیزی را مرور کنید؟"
              />
              {/* <Box display={"flex"} gap={3} sx={{ marginTop: "2rem" }}>
                  <img
                    src="/images/UserRview/mainImgs/img1.png"
                    style={{ width:  { xs :"120px"  ,  md  : "200px"} }}
                    alt=""
                  />
                  <img
                    src="/images/UserRview/mainImgs/img2.png"
                    style={{ width:  { xs :"120px"  ,  md  : "200px"} }}
                    alt=""
                  />
                  <img
                    src="/images/UserRview/mainImgs/img3.png"
                    style={{ width:  { xs :"120px"  ,  md  : "200px"} }}
                    alt=""
                  />
                </Box> */}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box >

      <Container>
        <Box
          sx={{
            padding: "2rem ",
            border: "1px  solid  #ccc",
            marginTop: "5rem",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1.2rem",
              marginBottom: "2rem",
            }}
          >
            اینجا بودی ؟{" "}
          </Typography>
          <Grid container>
            <Grid size={{ md: 4 }}>
              <BeenHereCards
                name="برج میلاد"
                location="تهران ایران"
                image="/images/Hotelmg/BestChoice/img1.jpg"
              />
            </Grid>
            <Grid size={{ md: 4 }}>
              <BeenHereCards
                name="برج میلاد"
                location="تهران ایران"
                image="/images/Hotelmg/BestChoice/img1.jpg"
              />
            </Grid>
          </Grid>
        </Box>
        <Grid container sx={{ marginTop: "3rem" }} spacing={5}>
          <Grid size={{ md: 4 }}>
            <Link href={"/"}>
              <Box sx={{ position: "relative" }}>
                <img
                  src="/images/UserRview/cardImg.png"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
                <CusBoxTextCard>
                  <Typography
                    sx={{ color: "#fff", fontSize: "2rem", fontWeight: "bold" }}
                  >
                    چرا مرور؟
                  </Typography>
                  <Typography sx={{ color: "#fff", margin: "1rem  0" }}>
                    ببینید نظرات شما چگونه به میلیون ها مسافر و صاحب کسب و کار
                    کمک می کند
                  </Typography>
                  <Box>
                    <CusBoxBtnCard sx={{ bgcolor: "#fff" }}>
                      بیشتر یاد بگیرید
                    </CusBoxBtnCard>
                  </Box>
                </CusBoxTextCard>
              </Box>
            </Link>
            <Box
              alignItems={"center"}
              flexDirection={"column"}
              display={"flex"}
              sx={{ marginTop: "1rem" }}
              gap={1}
            >
              <Typography sx={{ fontWeight: "bold" }}>
                آیا Tripadvisor جایی را از دست داده است؟
              </Typography>
              <Typography sx={{ textAlign: "center", fontSize: "0.85rem" }}>
                در مورد آن به ما بگویید تا بتوانیم آنچه را که نشان می دهیم بهبود
                ببخشیم.
              </Typography>
              <CusAddPlaceBtn
                sx={{
                  ":hover": {
                    bgcolor: `var(--dark-color)`,
                  },
                }}
              >
                اضافه کردن مکان
              </CusAddPlaceBtn>
            </Box>
          </Grid>

          <Grid size={{ md: 8 }}>
            <Box display={"flex"} flexDirection={"column"} gap={3}>
              <Typography sx={{ fontWeight: "bold" }}>نظرات شما</Typography>
              <Typography>
                شما هنوز نظری ندارید. پس از نوشتن برخی از نظرات، آنها در اینجا
                ظاهر می شوند.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default UserReview;
