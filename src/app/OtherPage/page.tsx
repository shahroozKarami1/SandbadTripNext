import { Avatar, Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FadeSlider from "../../components/CompTravelerChoiceHotel/FadeSlider";
import CardSliderImg from "../../components/OtherPageComp/CardSliderImg";
import { AiBtn, BetaText, CusBackOfSlider } from "../../elements/CusComponets";
import TitleSection from "../../components/ComHomePage/TitleSection";
import BadgeBoxes from "../../components/CompTravelerChoiceHotel/BadgeBoxes";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import SliderWrapper from "../../components/SliderWraper/SliderWrapper";
import CardYellowBack from "../../components/OtherPageComp/CardYellowBack";
import TourWaysCard from "../../components/ComHomePage/TourWaysCard";
import CardHeaderSlider from "../../components/CompTourism/CardHeaderSlider";
import CardThreeImgs from "../../components/OtherPageComp/CardThreeImgs";
import SimpleSlider from "../../components/SliderWithOutContainer/SimpleSlider";
import GrayCardQues from "../../components/OtherPageComp/GrayCardQues";
import WhenToVisitCard from "../../components/CompTourism/WhenToVisitCard";
import ReviewBox from "../../components/CompHotelDetails/ReviewBox";
// import PersianDataPicker from "../../components/PersianDatePicker/PersianDataPicker";
function OtherPage() {
  return (
    <Box>
      <Container>
        <Grid
          container
          marginTop={"4rem"}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={8}
        >
          <Grid size={{ md: 6 }}>
            <Box position={"relative"}>
              <CusBackOfSlider />
              <FadeSlider>
                <CardSliderImg Image="/public/images/OtherPages/slider/img1.jpg" />
                <CardSliderImg Image="/public/images/OtherPages/slider/img2.jpg" />
              </FadeSlider>
            </Box>
          </Grid>
          <Grid size={{ md: 6 }}>
            <Box display={"flex"} flexDirection={"column"} gap={1}>
              <Typography sx={{ fontWeight: "bold", fontSize: "2.8rem" }}>
                کارهایی که باید در لندن انجام دهید
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.90rem",
                  padding: "0.5rem  0",
                  lineHeight: 2,
                }}
              >
                بازدید از مکان‌های سلطنتی و موزه‌ها از مهمترین کارهایی است که
                باید در لندن انجام شود - از مکان‌های دیدنی نمادین مانند کاخ
                کنزینگتون و پل برج گرفته تا موزه مشهور جهانی بریتانیا. برای
                توصیه های شخصی، محصول برنامه ریزی سفر با هوش مصنوعی ما را امتحان
                کنید.
              </Typography>

              <Box display={"flex"} alignItems={"center"} gap={1}>
                <AiBtn>
                  سفر خود را بسازید
                  <AutoAwesomeIcon sx={{ fontSize: "0.90rem" }} />
                </AiBtn>
                <Typography sx={{ fontSize: "0.7rem" }}>
                  ساخته شده با هوش مصنوعی
                </Typography>
                <BetaText>آزمایشی</BetaText>‌
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box>
          <TitleSection
            isSubTitle={true}
            mainTitle="تجربیات محبوب را کاوش کنید"
            isSeeAll={true}
            subTitle="بر اساس رتبه‌بندی‌ها و تعداد رزرو، ببینید سایر مسافران دوست دارند چه کاری انجام دهند."
          />
          <Grid container>
            <Grid size={{ md: 12 }}>
              <Box marginTop={"1rem"}>
                <BadgeBoxes
                  bgColor="#fff"
                  icon={<CardTravelIcon />}
                  text="سفر های روزانه (500)"
                />
                <BadgeBoxes
                  bgColor="#fff"
                  icon={<CardTravelIcon />}
                  text="سفر های روزانه (500)"
                />
                <BadgeBoxes
                  bgColor="#fff"
                  icon={<CardTravelIcon />}
                  text="سفر های روزانه (500)"
                />
                <BadgeBoxes
                  bgColor="#fff"
                  icon={<CardTravelIcon />}
                  text="سفر های روزانه (500)"
                />
                <BadgeBoxes
                  bgColor="#fff"
                  icon={<CardTravelIcon />}
                  text="سفر های روزانه (500)"
                />
                <BadgeBoxes
                  bgColor="#fff"
                  icon={<CardTravelIcon />}
                  text="سفر های روزانه (500)"
                />
                <BadgeBoxes
                  bgColor="#fff"
                  icon={<CardTravelIcon />}
                  text="سفر های روزانه (500)"
                />
                <BadgeBoxes
                  bgColor="#fff"
                  icon={<CardTravelIcon />}
                  text="سفر های روزانه (500)"
                />
                <BadgeBoxes
                  bgColor="#fff"
                  icon={<CardTravelIcon />}
                  text="سفر های روزانه (500)"
                />
                <BadgeBoxes
                  bgColor="#fff"
                  icon={<CardTravelIcon />}
                  text="سفر های روزانه (500)"
                />
                <BadgeBoxes
                  bgColor="#fff"
                  icon={<CardTravelIcon />}
                  text="سفر های روزانه (500)"
                />
                <BadgeBoxes
                  bgColor="#fff"
                  icon={<CardTravelIcon />}
                  text="سفر های روزانه (500)"
                />
                <BadgeBoxes
                  bgColor="#fff"
                  icon={<CardTravelIcon />}
                  text="سفر های روزانه (500)"
                />
                <BadgeBoxes
                  bgColor="#fff"
                  icon={<CardTravelIcon />}
                  text="سفر های روزانه (500)"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box>
          <TitleSection
            isSubTitle={true}
            mainTitle="تجربیات ضروری در لندن"
            isSeeAll={true}
            subTitle=" این تجربیات را برای نگاهی نزدیک به لندن رزرو کنید."
          />

          <SliderWrapper numberOfShowSlider={4}>
            <CardYellowBack
              CardPrice={50}
              TypeOfCard="کریسمس"
              coutOfLike="1200"
              coverCard="/public/images/Tourism/Slider/img2.jpg"
              title="تور لندن با اتوبوس شبانه با چراغ‌های کریسمس و راهنمای زنده"
            />
            <CardYellowBack
              CardPrice={50}
              TypeOfCard="کریسمس"
              coutOfLike="1200"
              coverCard="/public/images/Tourism/Slider/img4.jpg"
              title="تور لندن با اتوبوس شبانه با چراغ‌های کریسمس و راهنمای زنده"
            />
            <CardYellowBack
              CardPrice={50}
              TypeOfCard="کریسمس"
              coutOfLike="1200"
              coverCard="/public/images/Tourism/Slider/img5.jpg"
              title="تور لندن با اتوبوس شبانه با چراغ‌های کریسمس و راهنمای زنده"
            />
            <CardYellowBack
              CardPrice={50}
              TypeOfCard="کریسمس"
              coutOfLike="1200"
              coverCard="/public/images/Tourism/Slider/img8.jpg"
              title="تور لندن با اتوبوس شبانه با چراغ‌های کریسمس و راهنمای زنده"
            />
          </SliderWrapper>
        </Box>

        <Box>
          <TitleSection
            isSubTitle={false}
            mainTitle="لندن سلطنتی را کاوش کنید"
            isSeeAll={false}
          />

          <SliderWrapper numberOfShowSlider={4}>
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              Image="/public/images/Tourism/Slider/img3.jpg"
              score={160}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              Image="/public/images/Tourism/Slider/img4.jpg"
              score={160}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              Image="/public/images/Tourism/Slider/img5.jpg"
              score={160}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              Image="/public/images/Tourism/Slider/img7.jpg"
              score={160}
              isDetails={true}
              link="/"
              price={25}
            />
          </SliderWrapper>
        </Box>
        <Box>
          <TitleSection
            isSubTitle={false}
            mainTitle="سفرهای دریایی خوش منظره تیمز"
            isSeeAll={false}
          />

          <SliderWrapper numberOfShowSlider={4}>
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              Image="/public/images/Tourism/Slider/img10.jpg"
              score={160}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              Image="/public/images/Tourism/Slider/img9.jpg"
              score={160}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              Image="/public/images/Tourism/Slider/img12.jpg"
              score={150}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              Image="/public/images/Tourism/Slider/img11.jpg"
              score={150}
              isDetails={true}
              link="/"
              price={25}
            />
          </SliderWrapper>
        </Box>
        <Box>
          <TitleSection
            isSubTitle={true}
            mainTitle="برترین جاذبه های لندن"
            subTitle="این رتبه‌بندی‌ها توسط داده‌های Tripadvisor ارائه می‌شوند—ما نظرات مسافران، رتبه‌بندی‌ها، تعداد بازدید از صفحه و مکان کاربر را در نظر می‌گیریم."
            isSeeAll={true}
          />

          <SliderWrapper numberOfShowSlider={3}>
            <CardHeaderSlider
              CountOfExperience={435}
              TextExtraDisc="مجموعه قلعه‌ای تاریخی غرق در تاریخ سلطنتی، با نمایش جواهرات تاج و گشت‌های Yeoman Warder. میراث قرون وسطی بریتانیا و تجربیات آموزشی تعاملی را در بر می گیرد."
              conutOfLike={500}
              isExtraDisc={true}
              isYellowSeeWay={true}
              cover={[
                { id: 10, imgSrc: "/public/images/NextTrip/img5.jpg" },
                { id: 12, imgSrc: "/public/images/NextTrip/img7.jpg" },
              ]}
              footerCard="مکان های تاریخی"
              link="/"
              title="برج  لندن"
            />
            <CardHeaderSlider
              CountOfExperience={435}
              TextExtraDisc="مجموعه قلعه‌ای تاریخی غرق در تاریخ سلطنتی، با نمایش جواهرات تاج و گشت‌های Yeoman Warder. میراث قرون وسطی بریتانیا و تجربیات آموزشی تعاملی را در بر می گیرد."
              conutOfLike={500}
              isExtraDisc={true}
              isYellowSeeWay={true}
              cover={[
                { id: 10, imgSrc: "/public/images/NextTrip/img5.jpg" },
                { id: 12, imgSrc: "/public/images/NextTrip/img7.jpg" },
              ]}
              footerCard="مکان های تاریخی"
              link="/"
              title="برج  لندن"
            />
            <CardHeaderSlider
              CountOfExperience={435}
              TextExtraDisc="مجموعه قلعه‌ای تاریخی غرق در تاریخ سلطنتی، با نمایش جواهرات تاج و گشت‌های Yeoman Warder. میراث قرون وسطی بریتانیا و تجربیات آموزشی تعاملی را در بر می گیرد."
              conutOfLike={500}
              isExtraDisc={true}
              isYellowSeeWay={true}
              cover={[
                { id: 10, imgSrc: "/public/images/NextTrip/img5.jpg" },
                { id: 12, imgSrc: "/public/images/NextTrip/img7.jpg" },
              ]}
              footerCard="مکان های تاریخی"
              link="/"
              title="برج  لندن"
            />
            <CardHeaderSlider
              CountOfExperience={435}
              TextExtraDisc="مجموعه قلعه‌ای تاریخی غرق در تاریخ سلطنتی، با نمایش جواهرات تاج و گشت‌های Yeoman Warder. میراث قرون وسطی بریتانیا و تجربیات آموزشی تعاملی را در بر می گیرد."
              conutOfLike={500}
              isExtraDisc={true}
              isYellowSeeWay={true}
              cover={[
                { id: 10, imgSrc: "/public/images/NextTrip/img5.jpg" },
                { id: 12, imgSrc: "/public/images/NextTrip/img7.jpg" },
              ]}
              footerCard="مکان های تاریخی"
              link="/"
              title="برج  لندن"
            />
          </SliderWrapper>
          <SliderWrapper numberOfShowSlider={3}>
            <CardHeaderSlider
              CountOfExperience={435}
              TextExtraDisc="مجموعه قلعه‌ای تاریخی غرق در تاریخ سلطنتی، با نمایش جواهرات تاج و گشت‌های Yeoman Warder. میراث قرون وسطی بریتانیا و تجربیات آموزشی تعاملی را در بر می گیرد."
              conutOfLike={500}
              isExtraDisc={true}
              isYellowSeeWay={true}
              cover={[
                { id: 10, imgSrc: "/public/images/NextTrip/img5.jpg" },
                { id: 12, imgSrc: "/public/images/NextTrip/img7.jpg" },
              ]}
              footerCard="مکان های تاریخی"
              link="/"
              title="برج  لندن"
            />
            <CardHeaderSlider
              CountOfExperience={435}
              TextExtraDisc="مجموعه قلعه‌ای تاریخی غرق در تاریخ سلطنتی، با نمایش جواهرات تاج و گشت‌های Yeoman Warder. میراث قرون وسطی بریتانیا و تجربیات آموزشی تعاملی را در بر می گیرد."
              conutOfLike={500}
              isExtraDisc={true}
              isYellowSeeWay={true}
              cover={[
                { id: 10, imgSrc: "/public/images/NextTrip/img5.jpg" },
                { id: 12, imgSrc: "/public/images/NextTrip/img7.jpg" },
              ]}
              footerCard="مکان های تاریخی"
              link="/"
              title="برج  لندن"
            />
            <CardHeaderSlider
              CountOfExperience={435}
              TextExtraDisc="مجموعه قلعه‌ای تاریخی غرق در تاریخ سلطنتی، با نمایش جواهرات تاج و گشت‌های Yeoman Warder. میراث قرون وسطی بریتانیا و تجربیات آموزشی تعاملی را در بر می گیرد."
              conutOfLike={500}
              isExtraDisc={true}
              isYellowSeeWay={true}
              cover={[
                { id: 10, imgSrc: "/public/images/NextTrip/img5.jpg" },
                { id: 12, imgSrc: "/public/images/NextTrip/img7.jpg" },
              ]}
              footerCard="مکان های تاریخی"
              link="/"
              title="برج  لندن"
            />
            <CardHeaderSlider
              CountOfExperience={435}
              TextExtraDisc="مجموعه قلعه‌ای تاریخی غرق در تاریخ سلطنتی، با نمایش جواهرات تاج و گشت‌های Yeoman Warder. میراث قرون وسطی بریتانیا و تجربیات آموزشی تعاملی را در بر می گیرد."
              conutOfLike={500}
              isExtraDisc={true}
              isYellowSeeWay={true}
              cover={[
                { id: 10, imgSrc: "/public/images/NextTrip/img5.jpg" },
                { id: 12, imgSrc: "/public/images/NextTrip/img7.jpg" },
              ]}
              footerCard="مکان های تاریخی"
              link="/"
              title="برج  لندن"
            />
          </SliderWrapper>
          <SliderWrapper numberOfShowSlider={3}>
            <CardHeaderSlider
              CountOfExperience={435}
              TextExtraDisc="مجموعه قلعه‌ای تاریخی غرق در تاریخ سلطنتی، با نمایش جواهرات تاج و گشت‌های Yeoman Warder. میراث قرون وسطی بریتانیا و تجربیات آموزشی تعاملی را در بر می گیرد."
              conutOfLike={500}
              isExtraDisc={true}
              isYellowSeeWay={true}
              cover={[
                { id: 10, imgSrc: "/public/images/NextTrip/img5.jpg" },
                { id: 12, imgSrc: "/public/images/NextTrip/img7.jpg" },
              ]}
              footerCard="مکان های تاریخی"
              link="/"
              title="برج  لندن"
            />
            <CardHeaderSlider
              CountOfExperience={435}
              TextExtraDisc="مجموعه قلعه‌ای تاریخی غرق در تاریخ سلطنتی، با نمایش جواهرات تاج و گشت‌های Yeoman Warder. میراث قرون وسطی بریتانیا و تجربیات آموزشی تعاملی را در بر می گیرد."
              conutOfLike={500}
              isExtraDisc={true}
              isYellowSeeWay={true}
              cover={[
                { id: 10, imgSrc: "/public/images/NextTrip/img5.jpg" },
                { id: 12, imgSrc: "/public/images/NextTrip/img7.jpg" },
              ]}
              footerCard="مکان های تاریخی"
              link="/"
              title="برج  لندن"
            />
            <CardHeaderSlider
              CountOfExperience={435}
              TextExtraDisc="مجموعه قلعه‌ای تاریخی غرق در تاریخ سلطنتی، با نمایش جواهرات تاج و گشت‌های Yeoman Warder. میراث قرون وسطی بریتانیا و تجربیات آموزشی تعاملی را در بر می گیرد."
              conutOfLike={500}
              isExtraDisc={true}
              isYellowSeeWay={true}
              cover={[
                { id: 10, imgSrc: "/public/images/NextTrip/img5.jpg" },
                { id: 12, imgSrc: "/public/images/NextTrip/img7.jpg" },
              ]}
              footerCard="مکان های تاریخی"
              link="/"
              title="برج  لندن"
            />
            <CardHeaderSlider
              CountOfExperience={435}
              TextExtraDisc="مجموعه قلعه‌ای تاریخی غرق در تاریخ سلطنتی، با نمایش جواهرات تاج و گشت‌های Yeoman Warder. میراث قرون وسطی بریتانیا و تجربیات آموزشی تعاملی را در بر می گیرد."
              conutOfLike={500}
              isExtraDisc={true}
              isYellowSeeWay={true}
              cover={[
                { id: 10, imgSrc: "/public/images/NextTrip/img5.jpg" },
                { id: 12, imgSrc: "/public/images/NextTrip/img7.jpg" },
              ]}
              footerCard="مکان های تاریخی"
              link="/"
              title="برج  لندن"
            />
          </SliderWrapper>
        </Box>

        <Box>
          <TitleSection
            isSubTitle={true}
            mainTitle="سفرهای یک روزه"
            subTitle="از گردش های سریع گرفته تا گردش های یک روزه"
            isSeeAll={true}
          />

          <SliderWrapper numberOfShowSlider={4}>
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              Image="/public/images/Tourism/Slider/img10.jpg"
              score={160}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              Image="/public/images/Tourism/Slider/img7.jpg"
              score={160}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              Image="/public/images/Tourism/Slider/img3.jpg"
              score={150}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              Image="/public/images/Tourism/Slider/img5.jpg"
              score={150}
              isDetails={true}
              link="/"
              price={25}
            />
          </SliderWrapper>
        </Box>

        <Box>
          <TitleSection isSubTitle={false} mainTitle="کریسمس" isSeeAll={true} />

          <SliderWrapper numberOfShowSlider={4}>
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              Image="/public/images/OtherPages/Slider/img6.jpg"
              score={160}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              Image="/public/images/OtherPages/Slider/img3.jpg"
              score={160}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              Image="/public/images/OtherPages/Slider/img4.jpg"
              score={150}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              Image="/public/images/OtherPages/Slider/img5.jpg"
              score={150}
              isDetails={true}
              link="/"
              price={25}
            />
          </SliderWrapper>
        </Box>

        <Box>
          <TitleSection
            isSubTitle={false}
            mainTitle="تور های پیاده روی"
            isSeeAll={true}
          />

          <SliderWrapper numberOfShowSlider={4}>
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              Image="/public/images/NextTrip/img4.jpg"
              score={160}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              Image="/public/images/NextTrip/img8.jpg"
              score={160}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              Image="/public/images/NextTrip/img3.jpg"
              score={150}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              Image="/public/images/NextTrip/img1.jpg"
              score={150}
              isDetails={true}
              link="/"
              price={25}
            />
          </SliderWrapper>
        </Box>
        <Box>
          <TitleSection
            isSubTitle={false}
            mainTitle="بلیط و پاس موزه"
            isSeeAll={true}
          />

          <SliderWrapper numberOfShowSlider={4}>
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              Image="/public/images/OtherPages/Slider/img9.jpg"
              score={160}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              Image="/public/images/OtherPages/Slider/img8.jpg"
              score={160}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              Image="/public/images/OtherPages/Slider/img7.jpg"
              score={150}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              Image="/public/images/OtherPages/Slider/img10.jpg"
              score={150}
              isDetails={true}
              link="/"
              price={25}
            />
          </SliderWrapper>
        </Box>
        <Box>
          <TitleSection
            isSubTitle={false}
            mainTitle="تور های  کویری"
            isSeeAll={true}
          />

          <SliderWrapper numberOfShowSlider={4}>
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              Image="/public/images/ThingsToDoDetails/Simllerexp/img1.jpg"
              score={160}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              Image="/public/images/ThingsToDoDetails/Simllerexp/img2.jpg"
              score={160}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              Image="/public/images/ThingsToDoDetails/Simllerexp/img3.jpg"
              score={150}
              isDetails={true}
              link="/"
              price={25}
            />
            <TourWaysCard
              disc="کاخ باکینگهام و تغییر تجربه نگهبانان"
              Image="/public/images/ThingsToDoDetails/Simllerexp/img4.jpg"
              score={150}
              isDetails={true}
              link="/"
              price={25}
            />
          </SliderWrapper>
        </Box>
      </Container>

      <Box sx={{ backgroundColor: "#EAFAF4", marginTop: "5rem " }}>
        <Container>
          <Box sx={{ padding: "1rem  0  4rem  0" }}>
            <TitleSection
              isSubTitle={false}
              mainTitle="مکان های دیگر اطراف را کاوش کنید"
              isSeeAll={false}
            />
            <SliderWrapper numberOfShowSlider={2}>
              <CardThreeImgs
                imgUrls={{
                  mainImg: "/public/images/OtherPages/ThreeSlider/mainImg.jpg",
                  otherImgs: [
                    "/public/images/OtherPages/ThreeSlider/img1.jpg",
                    "/public/images/OtherPages/ThreeSlider/img2.jpg",
                  ],
                }}
                link="/"
                mileNumber={52}
                titleOfMainCard="آکسفورد"
              />
              <CardThreeImgs
                imgUrls={{
                  mainImg: "/public/images/OtherPages/ThreeSlider/mainImg.jpg",
                  otherImgs: [
                    "/public/images/OtherPages/ThreeSlider/img1.jpg",
                    "/public/images/OtherPages/ThreeSlider/img2.jpg",
                  ],
                }}
                link="/"
                mileNumber={52}
                titleOfMainCard="آکسفورد"
              />
              <CardThreeImgs
                imgUrls={{
                  mainImg: "/public/images/OtherPages/ThreeSlider/mainImg.jpg",
                  otherImgs: [
                    "/public/images/OtherPages/ThreeSlider/img1.jpg",
                    "/public/images/OtherPages/ThreeSlider/img2.jpg",
                  ],
                }}
                link="/"
                mileNumber={52}
                titleOfMainCard="آکسفورد"
              />
            </SliderWrapper>
          </Box>
        </Container>
      </Box>

      <Container>
        <Box>
          <TitleSection
            isSubTitle={false}
            mainTitle="راهنمای کوچک لندن"
            isSeeAll={false}
          />
          <Grid container marginTop={"2rem"}>
            <Grid size={{ md: 2 }}>
              <Box display={"flex"} flexDirection={"column"} gap={1}>
                <Avatar
                  src="/public/images/NextTrip/img1.jpg"
                  sx={{ width: 80, height: 80 }}
                />
                <Typography sx={{ fontWeight: "bold" }}>شهروز کرمی</Typography>
                <Typography sx={{ fontSize: "0.80rem", color: "#444" }}>
                  کارشناس سفر
                </Typography>
                <Typography sx={{ fontSize: "0.80rem", color: "#444" }}>
                  متولد لندن، هنوز آن را خانه می داند
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ md: 10 }}>
              <SimpleSlider countOfSlider={3}>
                <GrayCardQues
                  cardBody="یک مجموعه کنسرت ۲ تا ۳ هفته‌ای در تابستان به نام BST Hyde Park برگزار می‌شود که میزبان نمایش‌های فوق‌العاده در هوای آزاد، هم در روز و هم در شب است. ترکیب هر سال فراتر از چشمگیر است (من چند سال پیش بازی Rolling Stones و Duran Duran را دیدم). به علاوه فقط یک فضای خاص در آنجا وجود دارد. همچنین برای بازدیدکنندگان تابستانی، بلیط های ویمبلدون ارزش بررسی را دارد."
                  title="چه چیزی را بازدیدکنندگان نباید از دست بدهند؟"
                />
                <GrayCardQues
                  cardBody="یک مجموعه کنسرت ۲ تا ۳ هفته‌ای در تابستان به نام BST Hyde Park برگزار می‌شود که میزبان نمایش‌های فوق‌العاده در هوای آزاد، هم در روز و هم در شب است. ترکیب هر سال فراتر از چشمگیر است (من چند سال پیش بازی Rolling Stones و Duran Duran را دیدم). به علاوه فقط یک فضای خاص در آنجا وجود دارد. همچنین برای بازدیدکنندگان تابستانی، بلیط های ویمبلدون ارزش بررسی را دارد."
                  title="چه چیزی را بازدیدکنندگان نباید از دست بدهند؟"
                />
                <GrayCardQues
                  cardBody="یک مجموعه کنسرت ۲ تا ۳ هفته‌ای در تابستان به نام BST Hyde Park برگزار می‌شود که میزبان نمایش‌های فوق‌العاده در هوای آزاد، هم در روز و هم در شب است. ترکیب هر سال فراتر از چشمگیر است (من چند سال پیش بازی Rolling Stones و Duran Duran را دیدم). به علاوه فقط یک فضای خاص در آنجا وجود دارد. همچنین برای بازدیدکنندگان تابستانی، بلیط های ویمبلدون ارزش بررسی را دارد."
                  title="چه چیزی را بازدیدکنندگان نباید از دست بدهند؟"
                />
              </SimpleSlider>
            </Grid>
          </Grid>
        </Box>

        <Box>
          <TitleSection
            isSubTitle={false}
            mainTitle="چه زمانی  باید بازدید کرد "
            isSeeAll={false}
          />
          <SliderWrapper numberOfShowSlider={4}>
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
            isSubTitle={false}
            mainTitle="آنچه مسافران می گویند"
            isSeeAll={false}
          />
          <SliderWrapper numberOfShowSlider={3}>
            <ReviewBox
              countContributions={22}
              date="18 خرداد"
              likeCount={5}
              name="محمد سعید احمدی  کوپایی"
              profile="/public/images//NextTrip/img1.jpg"
              reviewBody="من و خانمم اصلا راضی نبودیم با این   که غذاخوری‌هایی با تجربه‌های شگفت‌انگیز غذایی داشتیم، از رفتن به کباب سرای مسلم برای جشن سالگرد ازدواجمان هیجان‌زده بودیم.
متأسفانه ما بسیار ناامید شدیم. 22 دوره که عموماً فاقد طعم بودند، به حداقل مهارت پخت و پز نیاز داشتند و عمدتاً فاقد مواد اولیه با کیفیت بودند.
مهمتر از آن ما احساس می کردیم که بسیار عجله داریم. سرویس نه تنها در نقاطی آشفته بود، بلکه شخصی دائماً پشت میز بود، اما به ندرت همان فرد بود. من بسیاری از ناهار سه ساعته تنبل را با تنها 4 دوره تجربه کرده ام. این 22 دوره انجام شد و در 2.5 ساعت گردگیری شد.
ما با پخت شراب رفتیم و این تا حدی بر غذا برتری داشت. وقتی نزدیک به 1000 یورو برای تجربه در موگاریتز (از جمله پرواز شراب) پرداخت می‌کنید - فکر نمی‌کنم غیرمنطقی باشد که انتظار داشته باشیم این تجربه باشکوه باشد. نزدیک نبود."
              title="ناامید"
              typeOfFamilly="زوج"
            />
            <ReviewBox
              countContributions={22}
              date="18 خرداد"
              likeCount={5}
              name="محمد سعید احمدی  کوپایی"
              profile="/public/images//NextTrip/img1.jpg"
              reviewBody="من و خانمم اصلا راضی نبودیم با این   که غذاخوری‌هایی با تجربه‌های شگفت‌انگیز غذایی داشتیم، از رفتن به کباب سرای مسلم برای جشن سالگرد ازدواجمان هیجان‌زده بودیم.
متأسفانه ما بسیار ناامید شدیم. 22 دوره که عموماً فاقد طعم بودند، به حداقل مهارت پخت و پز نیاز داشتند و عمدتاً فاقد مواد اولیه با کیفیت بودند.
مهمتر از آن ما احساس می کردیم که بسیار عجله داریم. سرویس نه تنها در نقاطی آشفته بود، بلکه شخصی دائماً پشت میز بود، اما به ندرت همان فرد بود. من بسیاری از ناهار سه ساعته تنبل را با تنها 4 دوره تجربه کرده ام. این 22 دوره انجام شد و در 2.5 ساعت گردگیری شد.
ما با پخت شراب رفتیم و این تا حدی بر غذا برتری داشت. وقتی نزدیک به 1000 یورو برای تجربه در موگاریتز (از جمله پرواز شراب) پرداخت می‌کنید - فکر نمی‌کنم غیرمنطقی باشد که انتظار داشته باشیم این تجربه باشکوه باشد. نزدیک نبود."
              title="ناامید"
              typeOfFamilly="زوج"
            />
            <ReviewBox
              countContributions={22}
              date="18 خرداد"
              likeCount={5}
              name="محمد سعید احمدی  کوپایی"
              profile="/public/images//NextTrip/img1.jpg"
              reviewBody="من و خانمم اصلا راضی نبودیم با این   که غذاخوری‌هایی با تجربه‌های شگفت‌انگیز غذایی داشتیم، از رفتن به کباب سرای مسلم برای جشن سالگرد ازدواجمان هیجان‌زده بودیم.
متأسفانه ما بسیار ناامید شدیم. 22 دوره که عموماً فاقد طعم بودند، به حداقل مهارت پخت و پز نیاز داشتند و عمدتاً فاقد مواد اولیه با کیفیت بودند.
مهمتر از آن ما احساس می کردیم که بسیار عجله داریم. سرویس نه تنها در نقاطی آشفته بود، بلکه شخصی دائماً پشت میز بود، اما به ندرت همان فرد بود. من بسیاری از ناهار سه ساعته تنبل را با تنها 4 دوره تجربه کرده ام. این 22 دوره انجام شد و در 2.5 ساعت گردگیری شد.
ما با پخت شراب رفتیم و این تا حدی بر غذا برتری داشت. وقتی نزدیک به 1000 یورو برای تجربه در موگاریتز (از جمله پرواز شراب) پرداخت می‌کنید - فکر نمی‌کنم غیرمنطقی باشد که انتظار داشته باشیم این تجربه باشکوه باشد. نزدیک نبود."
              title="ناامید"
              typeOfFamilly="زوج"
            />
          </SliderWrapper>
        </Box>

        {/* <PersianDataPicker/> */}
      </Container>
    </Box>
  );
}

export default OtherPage;
