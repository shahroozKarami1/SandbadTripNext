"use client"
import React, { useEffect, useState } from 'react'
import MainHeader from '../MainHeader/MainHeader';
import TopBarHome from '../ComHomePage/TopBarHome';
import NavBarHome from '../ComHomePage/NavBarHome';
import FirstBanner from '../ComHomePage/FirstBanner';
import TitleSection from '../ComHomePage/TitleSection';
import { Box, Container, Typography } from '@mui/material';
import TheBestFoodSection from '../ComHomePage/TheBestFoodSection';
import TheBestdistination from '../ComHomePage/TheBestdistination';
import TourWaySection from '../ComHomePage/TourWaySection';
import MoreExploreSection from '../ComHomePage/MoreExploreSection';
import NextTripSection from '../ComHomePage/NextTripSection';
import SecoundBanner from '../ComHomePage/SecoundBanner';
import ThirdBanner from '../ComHomePage/ThirdBanner';
import FallDistinationSec from '../ComHomePage/FallDistinations/FallDistinationSec';

const HomeClient = () => {
    let [isShowStickyMenu, SetIsShowStickyMenu] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                SetIsShowStickyMenu(true);
            } else {
                SetIsShowStickyMenu(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <Box>
            {isShowStickyMenu && <MainHeader />}
            {!isShowStickyMenu && <TopBarHome />}
            <Container >
                <NavBarHome />
                <FirstBanner />
                <TitleSection
                    isSubTitle={true}
                    subTitle="جوایز انتخاب مسافران ۲۰۲۴ بهترین رستوران‌ها"
                    mainTitle="خودتان را با یک وعده غذایی برنده جایزه پذیرایی کنید"
                />
                <TheBestFoodSection />
                <TitleSection
                    isSubTitle={true}
                    subTitle="راهنمایی های آزموده شده و واقعی برای کمک به سفر بزرگ بعدی شما"
                    mainTitle="از سازندگان سفرهای مورد علاقه ما الهام بگیرید"
                />
                <TheBestdistination />
                <TitleSection
                    isSubTitle={true}
                    subTitle="برای نگاهی نزدیک به فرانکفورت، این تجربیات را رزرو کنید."
                    mainTitle="راه های تور فرانکفورت"
                />
                <TourWaySection />
                <TitleSection
                    isSubTitle={true}
                    subTitle="برای نگاهی نزدیک به فرانکفورت، این تجربیات را رزرو کنید."
                    mainTitle="چیزهای  بیشتر برای انجام  در فرانکفورد"
                />
                <TourWaySection />
            </Container>
            <Box sx={{ bgcolor: "#F2F1EC", marginTop: "2rem" }}>
                <Container sx={{ padding: "  0.25rem 0" }}>
                    <Box sx={{ margin: "1rem  0" }}>
                        <TitleSection isSubTitle={false} mainTitle="اکتشافات بیشتر" />
                    </Box>
                    <MoreExploreSection />
                </Container>
            </Box>
            <Container sx={{ marginTop: "2rem" }}>
                <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                    رویای سفر بعدی خود را داشته باشید
                </Typography>
                <NextTripSection
                    dataNextTripArr={[
                        {
                            Image: "/public/images/NextTrip/img4.jpg",
                            title: "آمستردام /  آلمان",
                        },
                        {
                            Image: "/public/images/NextTrip/img1.jpg",
                            title: "آمستردام /  آلمان",
                        },
                        {
                            Image: "/public/images/NextTrip/img2.jpg",
                            title: "آمستردام /  آلمان",
                        },
                        {
                            Image: "/public/images/NextTrip/img3.jpg",
                            title: "آمستردام /  آلمان",
                        },
                    ]}
                    mainTitle="تعطیلات آخر هفته از فرانکفورت"
                />
                <NextTripSection
                    dataNextTripArr={[
                        {
                            Image: "/public/images/NextTrip/img6.jpg",
                            title: "آمستردام /  آلمان",
                        },
                        {
                            Image: "/public/images/NextTrip/img7.jpg",
                            title: "آمستردام /  آلمان",
                        },
                        {
                            Image: "/public/images/NextTrip/img8.jpg",
                            title: "آمستردام /  آلمان",
                        },
                        {
                            Image: "/public/images/NextTrip/img5.jpg",
                            title: "آمستردام /  آلمان",
                        },
                    ]}
                    mainTitle="مقاصد عملیاتی برای تعطیلات بعدی شما"
                />
                <SecoundBanner />
            </Container>
            <Box sx={{ bgcolor: "#FFF7E1", marginTop: "5rem" }}>
                <ThirdBanner />
            </Box>
            <Container>
                <Box sx={{ margin: "1rem  0" }}>
                    <TitleSection isSubTitle={false} mainTitle="پرطرفدار در سفر" />
                </Box>
                <FallDistinationSec />
            </Container>
        </Box>
    )
}

export default HomeClient
