"use client"
import { Box, styled } from "@mui/material";
import React, { FC } from "react";
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import Slider from "react-slick";
interface ISliderWrapperProps {
  children: React.ReactNode;
  numberOfShowSlider: number;
  ArrowPosition?: string;
}
const SliderWrapper: FC<ISliderWrapperProps> = ({
  children,
  numberOfShowSlider,
  ArrowPosition
}) => {
  const CusArrowForwardIcon = styled(WestIcon)(({ theme }) => ({
    border: "1px  solid  #444",
    fontSize: "1.5rem",
    zIndex: 100,
    padding: "0.25rem",
    top: ArrowPosition ? ArrowPosition : "50%",
    borderRadius: "50%",
    backgroundColor: "#fff",
    position: "absolute",
    [theme.breakpoints.down("sm")]: {
      left: "0px",
      zIndex: 99
    },
    left: -30,
    "& path": {
      color: "#444"
    },
  })
  )
  const CusArrowCircleRightIcon = styled(EastIcon)(({ theme }) => ({
    fontSize: "1.5rem",
    zIndex: 100,

    position: "absolute",
    borderRadius: "50%",
    backgroundColor: "#fff",
    border: "1px  solid #444",
    padding: "0.25rem",
    [theme.breakpoints.down("sm")]: {
      right: "0px"
    },
    right: -30,
    top: ArrowPosition ? ArrowPosition : "50%",
    "& path": {
      color: "#444"

    }
  }))
  function SampleArrow(props: any) {
    const { children, onClick } = props;
    return (
      <div onClick={onClick} style={{ cursor: 'pointer' }}>
        {children}
      </div>
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: numberOfShowSlider,
    cssEase: "linear",
    autoplay: false,
    rtl: true,
    slidesToScroll: 1,
    nextArrow: <SampleArrow><CusArrowCircleRightIcon /></SampleArrow>,
    prevArrow: <SampleArrow><CusArrowForwardIcon /></SampleArrow>,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,

          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,

          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,

          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box>
      <div className="slider-container   mt-8  ">
        <Slider {...settings}>{children}</Slider>
      </div>
    </Box>
  );
};

export default SliderWrapper;
