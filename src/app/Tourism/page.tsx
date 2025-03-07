import { Box, Container, Typography } from "@mui/material";
import FadeSlider from "../../components/CompTravelerChoiceHotel/FadeSlider";
import CardSlider from "../../components/CompTourism/CardSlider";
import Grid from "@mui/material/Grid2";
import SaveBtn from "../../components/SaveBtn/SaveBtn";
import ReadMore from "../../components/ReadMore/ReadMore";
import TitleSection from "../../components/ComHomePage/TitleSection";
import CardAdvice from "../../components/CompTourism/CardAdvice";
import PopularMentionsCard from "../../components/CompHotelDetails/PopularMentionsCard";
import CardHeaderSlider from "../../components/CompTourism/CardHeaderSlider";
import SliderWrapper from "../../components/SliderWraper/SliderWrapper";
import WhenToVisitCard from "../../components/CompTourism/WhenToVisitCard";
import BoxTextAndSlider from "../../components/CompTourism/BoxTextAndSlider";
import CardCenterTextFooter from "../../components/CompTourism/CardCenterTextFooter";
import CardItemProfileFooter from "../../components/CompTourism/CardItemProfileFooter";
import SimpleSlider from "../../components/SliderWithOutContainer/SimpleSlider";
import CardFooterDics from "../../components/CompTourism/CardFooterDics";
import CollectionCard from "../../components/CompTravelerChoiceHotel/CollectionCard";
import CardSingleText from "../../components/CardSingleText/CardSingleText";
import ReadMoreCard from "../../components/CompTourism/ReadMoreCard";
import TipCard from "../../components/CompTourism/TipCard";
import SimpleTextTitle from "../../components/CompTourism/SimpleTextTitle";
import AccordionMenu from "../../components/AccordionMenu/AccordionMenu";

const Tourism = () => {
  return (
    <Box>
      <Container>
        <FadeSlider>
          <CardSlider cover="/public/images/Tourism/Slider/img1.jpg" link="/" />
          <CardSlider cover="/public/images/Tourism/Slider/img2.jpg" link="/" />
          <CardSlider cover="/public/images/Tourism/Slider/img3.jpg" link="/" />
        </FadeSlider>

        <Grid container alignItems={"center"}>
          <Grid size={{ md: 6 }}>
            <Box display={"flex"} flexDirection={"column"} marginTop={"2rem"}>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                padding={"1rem 0"}
              >
                <Typography sx={{ fontWeight: "bold", fontSize: "2.7rem" }}>
                  انگلستان , لندن
                </Typography>
                <SaveBtn />
              </Box>
              <ReadMore
                lineShow={3}
                textBody="لندن شهری وسیع در مرکز همه چیز است: هنر، تاریخ، فرهنگ. اما چیزی که آن را از دیگر مراکز اصلی متمایز می کند، محله های متمایز آن است که هر کدام حال و هوای خاص خود را دارند. یک بعدازظهر را با خانواده‌ها در کنزینگتون بگذرانید: موزه‌ها، پارک‌ها و بسیاری از کارهای مورد تأیید بچه‌ها برای انجام دادن دارد. یا برای فروشگاه‌های جذاب و نقاشی‌های دیواری خیابانی، Shoreditch هیجان‌انگیز را بررسی کنید (مناسب برای عکس‌برداری)، سپس به سوهو بروید، جایی که می‌توانید در یک میخانه یک نیم لیتری بخورید یا تا صبح به باشگاه بروید و مهمانی کنید. غذا در اینجا بسیار مهم است: بله، ماهی و چیپس وجود دارد، اما همچنین به لطف جامعه پر رونق بنگلادشی لندن (از بین نقاط مختلف در Brick Lane انتخاب کنید)، به علاوه فهرست رو به رشد رستوران‌های سرآشپز مشهور در میفر شیک همیشه چیز جدیدی در جریان است و ما در زیر عکس های بیشتری داریم."
              />
            </Box>
          </Grid>
          <Grid size={{ md: 6 }}></Grid>
        </Grid>

        <Box>
          <TitleSection isSubTitle={false} mainTitle="مشاوره سفر" />
          <Grid container spacing={2} margin={"2rem 0"}>
            <Grid size={{ md: 3 }}>
              <CardAdvice
                cover="/public/images/Tourism/CardAdvice/img1.svg"
                link="/"
                text="بهترین  زمان  برای بازدید"
              />
            </Grid>
            <Grid size={{ md: 3 }}>
              <CardAdvice
                cover="/public/images/Tourism/CardAdvice/img2.svg"
                link="/"
                text="دور زدن"
              />
            </Grid>
            <Grid size={{ md: 3 }}>
              <CardAdvice
                cover="/public/images/Tourism/CardAdvice/img3.svg"
                link="/"
                text="آداب رسوم محلی"
              />
            </Grid>
            <Grid size={{ md: 3 }}>
              <CardAdvice
                cover="/public/images/Tourism/CardAdvice/img4.svg"
                link="/"
                text="نکاتی  از حرفه ایی ها"
              />
            </Grid>
          </Grid>
        </Box>

        <Box>
          <TitleSection
            isSubTitle={true}
            mainTitle="لندن ضروری"
            isSeeAll={false}
            subTitle="دسته ایی برای فیلتر کردن تصاویرتان انتخاب کنید"
          />
          ‌
          <Box
            display={"flex"}
            alignItems={"center"}
            sx={{ overflowX: "scroll" }}
          >
            <PopularMentionsCard text="ساعت" />
            <PopularMentionsCard text="مرغ" />
            <PopularMentionsCard text="مسافرت" />
            <PopularMentionsCard text="شگفتانه" />
            <PopularMentionsCard text="پاستا" />
            <PopularMentionsCard text="مرزها" />
            <PopularMentionsCard text="رویکرد" />
            <PopularMentionsCard text="حومه شهر" />
            <PopularMentionsCard text="شگفتی ها" />
            <PopularMentionsCard text="تئاتر" />
            <PopularMentionsCard text="سفر" />
            <PopularMentionsCard text="غذاخوری" />
            <PopularMentionsCard text="ساعت" />
            <PopularMentionsCard text="ارائه" />
          </Box>
        </Box>

        <Box>
          <TitleSection
            isSubTitle={false}
            isSeeAll={true}
            mainTitle="کارهایی برای انجام"
          />
          <Grid container marginTop={"2rem"}>
            <Grid size={{ md: 4 }}>
              <CardHeaderSlider
                conutOfLike={68.8}
                cover={[
                  {
                    id: 1,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img1.jpg",
                  },
                  {
                    id: 2,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img2.jpg",
                  },
                  {
                    id: 3,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img3.jpg",
                  },
                  {
                    id: 4,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img4.jpg",
                  },
                ]}
                footerCard="ساختمان های معماری، مکان های تاریخی"
                link="/"
                title="برج لندن"
              />
            </Grid>
            <Grid size={{ md: 4 }}>
              <CardHeaderSlider
                conutOfLike={68.8}
                cover={[
                  {
                    id: 1,
                    imgSrc: "/public/images/NextTrip/img1.jpg",
                  },
                  {
                    id: 2,
                    imgSrc: "/public/images/NextTrip/img2.jpg",
                  },
                  {
                    id: 3,
                    imgSrc: "/public/images/NextTrip/img3.jpg",
                  },
                  {
                    id: 4,
                    imgSrc: "/public/images/NextTrip/img4.jpg",
                  },
                ]}
                footerCard="ساختمان های معماری، مکان های تاریخی"
                link="/"
                title="برج لندن"
              />
            </Grid>
            <Grid size={{ md: 4 }}>
              <CardHeaderSlider
                conutOfLike={68.8}
                cover={[
                  {
                    id: 1,
                    imgSrc: "/public/images/NextTrip/img6.jpg",
                  },
                  {
                    id: 2,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img2.jpg",
                  },
                  {
                    id: 3,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img3.jpg",
                  },
                  {
                    id: 4,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img4.jpg",
                  },
                ]}
                footerCard="ساختمان های معماری، مکان های تاریخی"
                link="/"
                title="برج لندن"
              />
            </Grid>
            <Grid size={{ md: 4 }}>
              <CardHeaderSlider
                conutOfLike={68.8}
                cover={[
                  {
                    id: 1,
                    imgSrc: "/public/images/NextTrip/img5.jpg",
                  },
                  {
                    id: 2,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img2.jpg",
                  },
                  {
                    id: 3,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img3.jpg",
                  },
                  {
                    id: 4,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img4.jpg",
                  },
                ]}
                footerCard="ساختمان های معماری، مکان های تاریخی"
                link="/"
                title="برج لندن"
              />
            </Grid>
            <Grid size={{ md: 4 }}>
              <CardHeaderSlider
                conutOfLike={68.8}
                cover={[
                  {
                    id: 1,
                    imgSrc: "/public/images/NextTrip/img2.jpg",
                  },
                  {
                    id: 2,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img2.jpg",
                  },
                  {
                    id: 3,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img3.jpg",
                  },
                  {
                    id: 4,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img4.jpg",
                  },
                ]}
                footerCard="ساختمان های معماری، مکان های تاریخی"
                link="/"
                title="برج لندن"
              />
            </Grid>
            <Grid size={{ md: 4 }}>
              <CardHeaderSlider
                conutOfLike={68.8}
                cover={[
                  {
                    id: 1,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img1.jpg",
                  },
                  {
                    id: 2,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img2.jpg",
                  },
                  {
                    id: 3,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img3.jpg",
                  },
                  {
                    id: 4,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img4.jpg",
                  },
                ]}
                footerCard="ساختمان های معماری، مکان های تاریخی"
                link="/"
                title="برج لندن"
              />
            </Grid>
          </Grid>
        </Box>
        <Box>
          <TitleSection
            isSubTitle={false}
            isSeeAll={true}
            mainTitle="غدا و نوشیدنی"
          />
          <Grid container marginTop={"2rem"}>
            <Grid size={{ md: 4 }}>
              <CardHeaderSlider
                conutOfLike={68.8}
                cover={[
                  {
                    id: 1,
                    imgSrc: "/public/images/TheBastFood/image1.jpg",
                  },
                  {
                    id: 2,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img2.jpg",
                  },
                  {
                    id: 3,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img3.jpg",
                  },
                  {
                    id: 4,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img4.jpg",
                  },
                ]}
                footerCard="ساختمان های معماری، مکان های تاریخی"
                link="/"
                title="برج لندن"
              />
            </Grid>
            <Grid size={{ md: 4 }}>
              <CardHeaderSlider
                conutOfLike={68.8}
                cover={[
                  {
                    id: 1,
                    imgSrc: "/public/images/TheBastFood/image3.jpg",
                  },
                  {
                    id: 2,
                    imgSrc: "/public/images/NextTrip/img2.jpg",
                  },
                  {
                    id: 3,
                    imgSrc: "/public/images/NextTrip/img3.jpg",
                  },
                  {
                    id: 4,
                    imgSrc: "/public/images/NextTrip/img4.jpg",
                  },
                ]}
                footerCard="ساختمان های معماری، مکان های تاریخی"
                link="/"
                title="برج لندن"
              />
            </Grid>
            <Grid size={{ md: 4 }}>
              <CardHeaderSlider
                conutOfLike={68.8}
                cover={[
                  {
                    id: 1,
                    imgSrc: "/public/images/TheBastFood/image5.jpg",
                  },
                  {
                    id: 2,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img2.jpg",
                  },
                  {
                    id: 3,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img3.jpg",
                  },
                  {
                    id: 4,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img4.jpg",
                  },
                ]}
                footerCard="ساختمان های معماری، مکان های تاریخی"
                link="/"
                title="برج لندن"
              />
            </Grid>
            <Grid size={{ md: 4 }}>
              <CardHeaderSlider
                conutOfLike={68.8}
                cover={[
                  {
                    id: 1,
                    imgSrc: "/public/images/NextTrip/img5.jpg",
                  },
                  {
                    id: 2,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img2.jpg",
                  },
                  {
                    id: 3,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img3.jpg",
                  },
                  {
                    id: 4,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img4.jpg",
                  },
                ]}
                footerCard="ساختمان های معماری، مکان های تاریخی"
                link="/"
                title="برج لندن"
              />
            </Grid>
            <Grid size={{ md: 4 }}>
              <CardHeaderSlider
                conutOfLike={68.8}
                cover={[
                  {
                    id: 1,
                    imgSrc: "/public/images/NextTrip/img2.jpg",
                  },
                  {
                    id: 2,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img2.jpg",
                  },
                  {
                    id: 3,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img3.jpg",
                  },
                  {
                    id: 4,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img4.jpg",
                  },
                ]}
                footerCard="ساختمان های معماری، مکان های تاریخی"
                link="/"
                title="برج لندن"
              />
            </Grid>
            <Grid size={{ md: 4 }}>
              <CardHeaderSlider
                conutOfLike={68.8}
                cover={[
                  {
                    id: 1,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img1.jpg",
                  },
                  {
                    id: 2,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img2.jpg",
                  },
                  {
                    id: 3,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img3.jpg",
                  },
                  {
                    id: 4,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img4.jpg",
                  },
                ]}
                footerCard="ساختمان های معماری، مکان های تاریخی"
                link="/"
                title="برج لندن"
              />
            </Grid>
          </Grid>
        </Box>
        <Box>
          <TitleSection
            isSubTitle={false}
            isSeeAll={true}
            mainTitle="جاهایی برای ماندن"
          />
          <Grid container marginTop={"2rem"}>
            <Grid size={{ md: 4 }}>
              <CardHeaderSlider
                conutOfLike={68.8}
                cover={[
                  {
                    id: 1,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img1.jpg",
                  },
                  {
                    id: 2,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img2.jpg",
                  },
                  {
                    id: 3,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img3.jpg",
                  },
                  {
                    id: 4,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img4.jpg",
                  },
                ]}
                footerCard="ساختمان های معماری، مکان های تاریخی"
                link="/"
                title="برج لندن"
              />
            </Grid>
            <Grid size={{ md: 4 }}>
              <CardHeaderSlider
                conutOfLike={68.8}
                cover={[
                  {
                    id: 1,
                    imgSrc: "/public/images/NextTrip/img1.jpg",
                  },
                  {
                    id: 2,
                    imgSrc: "/public/images/NextTrip/img2.jpg",
                  },
                  {
                    id: 3,
                    imgSrc: "/public/images/NextTrip/img3.jpg",
                  },
                  {
                    id: 4,
                    imgSrc: "/public/images/NextTrip/img4.jpg",
                  },
                ]}
                footerCard="ساختمان های معماری، مکان های تاریخی"
                link="/"
                title="برج لندن"
              />
            </Grid>
            <Grid size={{ md: 4 }}>
              <CardHeaderSlider
                conutOfLike={68.8}
                cover={[
                  {
                    id: 1,
                    imgSrc: "/public/images/NextTrip/img6.jpg",
                  },
                  {
                    id: 2,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img2.jpg",
                  },
                  {
                    id: 3,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img3.jpg",
                  },
                  {
                    id: 4,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img4.jpg",
                  },
                ]}
                footerCard="ساختمان های معماری، مکان های تاریخی"
                link="/"
                title="برج لندن"
              />
            </Grid>
            <Grid size={{ md: 4 }}>
              <CardHeaderSlider
                conutOfLike={68.8}
                cover={[
                  {
                    id: 1,
                    imgSrc: "/public/images/NextTrip/img5.jpg",
                  },
                  {
                    id: 2,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img2.jpg",
                  },
                  {
                    id: 3,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img3.jpg",
                  },
                  {
                    id: 4,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img4.jpg",
                  },
                ]}
                footerCard="ساختمان های معماری، مکان های تاریخی"
                link="/"
                title="برج لندن"
              />
            </Grid>
            <Grid size={{ md: 4 }}>
              <CardHeaderSlider
                conutOfLike={68.8}
                cover={[
                  {
                    id: 1,
                    imgSrc: "/public/images/NextTrip/img2.jpg",
                  },
                  {
                    id: 2,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img2.jpg",
                  },
                  {
                    id: 3,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img3.jpg",
                  },
                  {
                    id: 4,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img4.jpg",
                  },
                ]}
                footerCard="ساختمان های معماری، مکان های تاریخی"
                link="/"
                title="برج لندن"
              />
            </Grid>
            <Grid size={{ md: 4 }}>
              <CardHeaderSlider
                conutOfLike={68.8}
                cover={[
                  {
                    id: 1,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img1.jpg",
                  },
                  {
                    id: 2,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img2.jpg",
                  },
                  {
                    id: 3,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img3.jpg",
                  },
                  {
                    id: 4,
                    imgSrc:
                      "/public/images/Tourism/ThingsToDoSlidersImg/img4.jpg",
                  },
                ]}
                footerCard="ساختمان های معماری، مکان های تاریخی"
                link="/"
                title="برج لندن"
              />
            </Grid>
          </Grid>
        </Box>

        <Box>
          <TitleSection
            isSubTitle={false}
            mainTitle="چه زمانی  باید بازدید کرد "
            isSeeAll={false}
          />
          <SliderWrapper numberOfShowSlider={4} ArrowPosition="30%">
            <WhenToVisitCard
              countOfRainDay={11}
              temperature={45}
              typeOfBusy="خیلی"
              monthName="فروردین"
            />
            <WhenToVisitCard
              countOfRainDay={11}
              temperature={45}
              typeOfBusy="به طور متوسط"
              monthName="اردیبهشت"
            />
            <WhenToVisitCard
              countOfRainDay={11}
              temperature={45}
              typeOfBusy="خیلی"
              monthName="خرداد"
            />
            <WhenToVisitCard
              countOfRainDay={11}
              temperature={45}
              typeOfBusy="کمتر"
              monthName="تیر"
            />
            <WhenToVisitCard
              countOfRainDay={11}
              temperature={45}
              typeOfBusy="کمتر"
              monthName="دی"
              isDetails={true}
              details={{
                busyDetail: "حداقل شلوغی ماه",
                rainDayDetail: "مرطوب ترین",
                tempDetail: "سردترین ماه",
              }}
            />
            <WhenToVisitCard
              countOfRainDay={11}
              temperature={45}
              typeOfBusy="کمتر"
              monthName="بهمن"
            />
            <WhenToVisitCard
              countOfRainDay={11}
              temperature={45}
              typeOfBusy="کمتر"
              monthName="آذر"
            />
          </SliderWrapper>
        </Box>
        <Box>
          <TitleSection
            isSubTitle={true}
            mainTitle="برنامه های سفر برای کمک به برنامه ریزی"
            isSeeAll={false}
            subTitle="از دیدگاه‌های واقعی مسافران گرفته تا بینش‌های هوش مصنوعی که توسط جامعه ما هدایت می‌شوند. بیشتر بدانید"
          />
          <BoxTextAndSlider />
        </Box>

        <Box marginTop={"5rem"}>
          <SliderWrapper numberOfShowSlider={3} ArrowPosition="35%">
            <CardCenterTextFooter
              Image="/public/images/Tourism/Slider/img7.jpg"
              link="/"
              textFooter="کریسمس در لندن: بازارهای کریسمس، چراغ‌های جشن و غیره"
            />
            <CardCenterTextFooter
              Image="/public/images/Tourism/Slider/img8.jpg"
              link="/"
              textFooter="کریسمس در لندن: بازارهای کریسمس، چراغ‌های جشن و غیره"
            />
            <CardCenterTextFooter
              Image="/public/images/Tourism/Slider/img9.jpg"
              link="/"
              textFooter="کریسمس در لندن: بازارهای کریسمس، چراغ‌های جشن و غیره"
            />
          </SliderWrapper>
        </Box>

        <Box>
          <TitleSection
            isSubTitle={false}
            mainTitle="راهنمای مسافران"
            isSeeAll={false}
          />
          <SliderWrapper numberOfShowSlider={3} ArrowPosition="30%">
            <CardItemProfileFooter
              link="/"
              countOfIem={10}
              imgCover="/public/images/Tourism/Slider/img10.jpg"
              profile="/public/images/NextTrip/img1.jpg"
              title="لندن: جالب ترین مکان های کوکتل"
              writer="شهروز کرمی"
            />
            <CardItemProfileFooter
              link="/"
              countOfIem={10}
              imgCover="/public/images/Tourism/Slider/img11.jpg"
              profile="/public/images/NextTrip/img2.jpg"
              title="لندن: جالب ترین مکان های کوکتل"
              writer="شهروز کرمی"
            />
            <CardItemProfileFooter
              link="/"
              countOfIem={10}
              imgCover="/public/images/Tourism/Slider/img12.jpg"
              profile="/public/images/NextTrip/img3.jpg"
              title="لندن: جالب ترین مکان های کوکتل"
              writer="شهروز کرمی"
            />
          </SliderWrapper>
        </Box>
      </Container>
      <Box
        sx={{ bgcolor: "#F2F1EC", padding: "2rem 1rem  ", margin: "2rem  0" }}
      >
        <Container>
          <Grid container spacing={3}>
            <Grid size={{ md: 3 }}>
              <Box>
                <img
                  src="/public/images/Tourism/Slider/mainImg.jpg"
                  alt=""
                  style={{
                    borderRadius: "50%",
                    width: "140px",
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: "bold",
                    padding: "1rem 0",
                    fontSize: "1.1rem",
                  }}
                >
                  خزیدن در رستوران های لندن
                </Typography>
                <Typography sx={{ fontSize: "1rem" }}>
                  بعد از سال‌ها نوشتن درباره‌ی آن‌ها بیشتر از آنچه من دوست دارم
                  اعتراف کنم، می‌توانم یک میخانه خوب لندن را سریع‌تر از آن‌چه
                  بتوانید بگویید «پینت، لطفاً» ببینم. راز چیست؟ بزرگ یا کوچک،
                  مرکزی یا حومه شهر، به شخصی که پشت میله است می رسد. و البته،
                  خود مکان نیز باید شخصیتی داشته باشد. اینجا میخانه های مورد
                  علاقه من هستند.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ md: 9 }}>
              <SimpleSlider countOfSlider={3} >
                <CardFooterDics
                  link="/"
                  countLike={54}
                  coverCard="/public/images/Tourism/Slider/img4.jpg"
                  discFooter="صاحبخانه ایرلندی، کان، استانداردهای بالایی را در این میخانه محله ای بی تکلف در جنوب شرقی لندن تعیین می کند: کارکنان کراوات می بندند و آبجو همیشه عالی ریخته می شود. پنج‌شنبه‌ها برای اجراهای نوازندگان محلی مورد علاقه من هستند، اما به لطف جو دوستانه و خوش‌آمد، در هیچ روز هفته نمی‌توانید اشتباه کنید."
                  title="سفره خانه بلیت هیل"
                />
                <CardFooterDics
                  link="/"
                  countLike={54}
                  coverCard="/public/images/Tourism/Slider/img5.jpg"
                  discFooter="صاحبخانه ایرلندی، کان، استانداردهای بالایی را در این میخانه محله ای بی تکلف در جنوب شرقی لندن تعیین می کند: کارکنان کراوات می بندند و آبجو همیشه عالی ریخته می شود. پنج‌شنبه‌ها برای اجراهای نوازندگان محلی مورد علاقه من هستند، اما به لطف جو دوستانه و خوش‌آمد، در هیچ روز هفته نمی‌توانید اشتباه کنید."
                  title="سفره خانه بلیت هیل"
                />
                <CardFooterDics
                  link="/"
                  countLike={54}
                  coverCard="/public/images/Tourism/Slider/img8.jpg"
                  discFooter="صاحبخانه ایرلندی، کان، استانداردهای بالایی را در این میخانه محله ای بی تکلف در جنوب شرقی لندن تعیین می کند: کارکنان کراوات می بندند و آبجو همیشه عالی ریخته می شود. پنج‌شنبه‌ها برای اجراهای نوازندگان محلی مورد علاقه من هستند، اما به لطف جو دوستانه و خوش‌آمد، در هیچ روز هفته نمی‌توانید اشتباه کنید."
                  title="سفره خانه بلیت هیل"
                />
              </SimpleSlider>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container>
        <Box>
          <TitleSection
            isSubTitle={true}
            mainTitle="مجموعه ها را مرور کنید"
            isSeeAll={false}
            subTitle="درباره کارهایی که باید انجام دهید، ببینید و بخورید ایده بگیرید"
          />
          <SliderWrapper numberOfShowSlider={4} ArrowPosition="40%">
            <CollectionCard
              TopCover="/public/images/Tourism/CollectionCard/img1.jpg"
              footerText="ببینید چه چیزی این مکان را در این فصل از سال بسیار جادویی می کند"
              link="/"
              textBody="زمستان در لندن"
            />

            <CollectionCard
              TopCover="/public/images/Tourism/CollectionCard/img2.jpg"
              footerText="ببینید چه چیزی این مکان را در این فصل از سال بسیار جادویی می کند"
              link="/"
              textBody="زمستان در لندن"
            />

            <CollectionCard
              TopCover="/public/images/Tourism/CollectionCard/img3.jpg"
              footerText="ببینید چه چیزی این مکان را در این فصل از سال بسیار جادویی می کند"
              link="/"
              textBody="زمستان در لندن"
            />

            <CollectionCard
              TopCover="/public/images/Tourism/CollectionCard/img4.jpg"
              footerText="ببینید چه چیزی این مکان را در این فصل از سال بسیار جادویی می کند"
              link="/"
              textBody="زمستان در لندن"
            />
          </SliderWrapper>
        </Box>
        <Box>
          <TitleSection
            isSubTitle={false}
            mainTitle="پایتخت های فرهنگی بیشتر بریتانیا"
            isSeeAll={false}
          />
          <SliderWrapper numberOfShowSlider={4} ArrowPosition="40%">
            <CardSingleText
              heightCard="300px"
              TopCover="/public/images/Tourism/Slider/img12.jpg"
              textBody="منچستر"
            />
            <CardSingleText
              heightCard="300px"
              TopCover="/public/images/Tourism/Slider/img8.jpg"
              textBody="منچستر"
            />
            <CardSingleText
              heightCard="300px"
              TopCover="/public/images/Tourism/Slider/img6.jpg"
              textBody="منچستر"
            />
            <CardSingleText
              heightCard="300px"
              TopCover="/public/images/Tourism/Slider/img5.jpg"
              textBody="منچستر"
            />
          </SliderWrapper>
        </Box>
        <Box>
          <TitleSection
            isSubTitle={false}
            mainTitle="از حامیان ما بیشتر کاوش کنید"
            isSeeAll={false}
          />
        </Box>
        <Grid container spacing={2} marginTop={"2rem"}>
          <Grid size={{ md: 3 }}>
            <ReadMoreCard
              coverImg="/public/images/Tourism/Slider/img5.jpg"
              disc="از قله های برفی گرفته تا آسمان خراش های سر به فلک کشیده، در اینجا برخی از بهترین مناظر کوه و شهر در جهان را مشاهده می کنید."
              link="/"
              titleCard="10 تا از حماسی ترین دیدگاه های جهان"
            />
          </Grid>
          <Grid size={{ md: 3 }}>
            <ReadMoreCard
              coverImg="/public/images/Tourism/Slider/img8.jpg"
              disc="از قله های برفی گرفته تا آسمان خراش های سر به فلک کشیده، در اینجا برخی از بهترین مناظر کوه و شهر در جهان را مشاهده می کنید."
              link="/"
              titleCard="10 تا از حماسی ترین دیدگاه های جهان"
            />
          </Grid>
          <Grid size={{ md: 3 }}>
            <ReadMoreCard
              coverImg="/public/images/Tourism/Slider/img10.jpg"
              disc="از قله های برفی گرفته تا آسمان خراش های سر به فلک کشیده، در اینجا برخی از بهترین مناظر کوه و شهر در جهان را مشاهده می کنید."
              link="/"
              titleCard="10 تا از حماسی ترین دیدگاه های جهان"
            />
          </Grid>
          <Grid size={{ md: 3 }}>
            <ReadMoreCard
              coverImg="/public/images/Tourism/Slider/img12.jpg"
              disc="از قله های برفی گرفته تا آسمان خراش های سر به فلک کشیده، در اینجا برخی از بهترین مناظر کوه و شهر در جهان را مشاهده می کنید."
              link="/"
              titleCard="10 تا از حماسی ترین دیدگاه های جهان"
            />
          </Grid>
        </Grid>
        <TitleSection
          isSubTitle={false}
          mainTitle="راهنمای سفر لندن"
          isSeeAll={false}
        />
        <TitleSection
          isSubTitle={false}
          mainTitle="نکات حرفه ای مسافران برای تجربه لندن"
          isSeeAll={false}
        />
        <Grid container>
          <Grid size={{ md: 9 }}>
            <TipCard
              name="شهروز  کرمی"
              profile="/public/images/NextTrip/img3.jpg"
              tipBody="آماده باشید: صرف نظر از گزارش آب و هوا، همیشه یک چتر و/یا کت بارانی در دست داشته باشید!"
            />
            <TipCard
              name="شهروز  کرمی"
              profile="/public/images/NextTrip/img6.jpg"
              tipBody="آماده باشید: صرف نظر از گزارش آب و هوا، همیشه یک چتر و/یا کت بارانی در دست داشته باشید!"
            />
            <TipCard
              name="شهروز  کرمی"
              profile="/public/images/NextTrip/img8.jpg"
              tipBody="آماده باشید: صرف نظر از گزارش آب و هوا، همیشه یک چتر و/یا کت بارانی در دست داشته باشید!"
            />
            <TipCard
              name="شهروز  کرمی"
              profile="/public/images/NextTrip/img1.jpg"
              tipBody="آماده باشید: صرف نظر از گزارش آب و هوا، همیشه یک چتر و/یا کت بارانی در دست داشته باشید!"
            />
            <TipCard
              name="شهروز  کرمی"
              profile="/public/images/NextTrip/img2.jpg"
              tipBody="آماده باشید: صرف نظر از گزارش آب و هوا، همیشه یک چتر و/یا کت بارانی در دست داشته باشید!"
            />
            <TipCard
              name="شهروز  کرمی"
              profile="/public/images/NextTrip/img5.jpg"
              tipBody="آماده باشید: صرف نظر از گزارش آب و هوا، همیشه یک چتر و/یا کت بارانی در دست داشته باشید!"
            />
          </Grid>
        </Grid>
        <TitleSection
          isSubTitle={false}
          mainTitle="بهترین راه برای رسیدن به آنجا چیست؟"
          isSeeAll={false}
        />
        <SimpleTextTitle
          textBody="لندن توسط شش فرودگاه بین المللی خدمات رسانی می شود: فرودگاه هیترو، فرودگاه گاتویک، فرودگاه شهر لندن، فرودگاه لوتون، فرودگاه استانستد و فرودگاه ساوتند. آنها با هم شلوغ ترین فضای هوایی جهان را بر اساس تعداد مسافران تشکیل می دهند."
          title="پرواز کردن"
        />
        <SimpleTextTitle
          textBody="لندن توسط شش فرودگاه بین المللی خدمات رسانی می شود: فرودگاه هیترو، فرودگاه گاتویک، فرودگاه شهر لندن، فرودگاه لوتون، فرودگاه استانستد و فرودگاه ساوتند. آنها با هم شلوغ ترین فضای هوایی جهان را بر اساس تعداد مسافران تشکیل می دهند."
          title="قطار"
        />
        <SimpleTextTitle
          textBody="لندن توسط شش فرودگاه بین المللی خدمات رسانی می شود: فرودگاه هیترو، فرودگاه گاتویک، فرودگاه شهر لندن، فرودگاه لوتون، فرودگاه استانستد و فرودگاه ساوتند. آنها با هم شلوغ ترین فضای هوایی جهان را بر اساس تعداد مسافران تشکیل می دهند."
          title="تاکسی"
        />
        <Box>
          <TitleSection
            isSubTitle={true}
            subTitle="این پرسش‌ها و پاسخ‌ها توسط هوش مصنوعی و با استفاده از رایج‌ترین سؤالاتی که مسافران در انجمن‌ها می‌پرسند، ایجاد شده‌اند."
            mainTitle="مشاوره سفر لندن"
            isSeeAll={false}
          />
          ‌
          <Box marginTop={"1rem"}>
            <AccordionMenu
              dataCoordion={[
                {
                  id: 10,
                  textBody: `
          مکان و محدوده قیمت
برخی از مسافران زنجیره‌های Premier Inn و Travelodge را برای گزینه‌های مقرون به صرفه در مرکز لندن، با قیمت‌های بالقوه در محدوده 150-250 دلار توصیه کردند. سالن پریمیر این کانتی و تراولودج کاونت گاردن به‌خاطر قیمت‌های خوب و مکان‌های مرکزی‌شان به‌طور خاص ذکر شده‌اند.`,
                  title: "چند هتل پیشنهادی در لندن کدامند؟",
                },
              ]}
            />
            <AccordionMenu
              dataCoordion={[
                {
                  id: 11,
                  textBody: `
          مکان و محدوده قیمت
برخی از مسافران زنجیره‌های Premier Inn و Travelodge را برای گزینه‌های مقرون به صرفه در مرکز لندن، با قیمت‌های بالقوه در محدوده 150-250 دلار توصیه کردند. سالن پریمیر این کانتی و تراولودج کاونت گاردن به‌خاطر قیمت‌های خوب و مکان‌های مرکزی‌شان به‌طور خاص ذکر شده‌اند.`,
                  title: "گزینه های حمل و نقل از هیترو به مرکز لندن چیست؟",
                },
              ]}
            />
            <AccordionMenu
              dataCoordion={[
                {
                  id: 20,
                  textBody: `
          مکان و محدوده قیمت
برخی از مسافران زنجیره‌های Premier Inn و Travelodge را برای گزینه‌های مقرون به صرفه در مرکز لندن، با قیمت‌های بالقوه در محدوده 150-250 دلار توصیه کردند. سالن پریمیر این کانتی و تراولودج کاونت گاردن به‌خاطر قیمت‌های خوب و مکان‌های مرکزی‌شان به‌طور خاص ذکر شده‌اند.`,
                  title: "چند فرودگاه پیشنهادی در لندن کدامند؟",
                },
              ]}
            />
          </Box>
        </Box>
        <Box>
          <TitleSection
            isSubTitle={false}
            mainTitle="سوالات متداول در مورد لندن"
            isSeeAll={false}
          />
          ‌
          <Box marginTop={"1rem"}>
            <AccordionMenu
              dataCoordion={[
                {
                  id: 10,
                  textBody: `
          مکان و محدوده قیمت
برخی از مسافران زنجیره‌های Premier Inn و Travelodge را برای گزینه‌های مقرون به صرفه در مرکز لندن، با قیمت‌های بالقوه در محدوده 150-250 دلار توصیه کردند. سالن پریمیر این کانتی و تراولودج کاونت گاردن به‌خاطر قیمت‌های خوب و مکان‌های مرکزی‌شان به‌طور خاص ذکر شده‌اند.`,
                  title: "چند هتل پیشنهادی در لندن کدامند؟",
                },
              ]}
            />
            <AccordionMenu
              dataCoordion={[
                {
                  id: 11,
                  textBody: `
          مکان و محدوده قیمت
برخی از مسافران زنجیره‌های Premier Inn و Travelodge را برای گزینه‌های مقرون به صرفه در مرکز لندن، با قیمت‌های بالقوه در محدوده 150-250 دلار توصیه کردند. سالن پریمیر این کانتی و تراولودج کاونت گاردن به‌خاطر قیمت‌های خوب و مکان‌های مرکزی‌شان به‌طور خاص ذکر شده‌اند.`,
                  title: "گزینه های حمل و نقل از هیترو به مرکز لندن چیست؟",
                },
              ]}
            />
            <AccordionMenu
              dataCoordion={[
                {
                  id: 20,
                  textBody: `
          مکان و محدوده قیمت
برخی از مسافران زنجیره‌های Premier Inn و Travelodge را برای گزینه‌های مقرون به صرفه در مرکز لندن، با قیمت‌های بالقوه در محدوده 150-250 دلار توصیه کردند. سالن پریمیر این کانتی و تراولودج کاونت گاردن به‌خاطر قیمت‌های خوب و مکان‌های مرکزی‌شان به‌طور خاص ذکر شده‌اند.`,
                  title: "چند فرودگاه پیشنهادی در لندن کدامند؟",
                },
              ]}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Tourism;
