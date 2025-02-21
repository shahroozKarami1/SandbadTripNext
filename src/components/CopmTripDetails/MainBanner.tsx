import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import React, { FC } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
import { CusBottomBanner, CusMainBannerTripDetails, CusTopOfBanner, DarkOverlay } from "../../elements/CusComponets";
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
const BannerBtn: FC<{
  isText: Boolean;
  icon: React.ReactNode;
  text?: string;
}> = ({ icon, isText, text }) => {
  return (
    <Button
      sx={{
        display: "flex",
        alignItems: "center",
        bgcolor: "#fff",
        borderRadius: "2rem",
        color: `var(--dark-color)`,
        gap: 1,
        padding: "0.5rem  0.75rem ",
      }}
    >
      <Typography sx={{ fontSize: "0.90rem", fontWeight: "bold" }}>
        {icon}
      </Typography>
      {isText && (
        <Typography sx={{ fontWeight: "bold", fontSize: "0.70rem" }}>
          {text}
        </Typography>
      )}
    </Button>
  );
};
const MainBanner = () => {


  return (
    <CusMainBannerTripDetails>
      <img
        src="/public/images/TripDetails/Banner/banner.jpg"
        alt=""
        style={{
          objectFit: "cover",
          objectPosition: "center",
          width: "100%",
          height: "100%",
          borderRadius: "1rem",
        }}
      />
      <DarkOverlay />
      <CusTopOfBanner>
        <BannerBtn icon={<MoreHorizIcon />} isText={false} />
        <BannerBtn
          icon={<FavoriteBorderIcon />}
          isText={true}
          text="ذخیره تمام آیتم ها "
        />
        <BannerBtn icon={<IosShareIcon />} isText={true} text="اشتراک سفر" />
      </CusTopOfBanner>

      <CusBottomBanner>
        <Typography
          sx={{ fontWeight: "bold", color: "#fff", fontSize: "3rem" }}
        >
          3 روز خانوادگی در رم
        </Typography>
        <Box display={"flex"} alignItems={"center"} gap={3}>
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <img
              src="/public/images/NextTrip/img5.jpg"
              style={{
                width: "40px",
                borderRadius: "50%",
              }}
              alt=""
            />
            <Typography sx={{ color: "#fff", fontWeight: "bold", fontSize: "0.90rem" }}>
              شهروز کرمی
            </Typography>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <DateRangeOutlinedIcon sx={{ "& path": { color: "#fff" } }} />
            <Typography sx={{ color: "#fff", fontWeight: "bold", fontSize: "0.90rem" }}>
              3 روز
            </Typography>
          </Box>
        </Box>
      </CusBottomBanner>
    </CusMainBannerTripDetails  >
  );
};

export default MainBanner;
