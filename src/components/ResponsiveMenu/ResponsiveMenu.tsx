import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { FC, useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LoginBox from "../LoginBox/LoginBox";
import Link from "next/link";

const CusListItemDetails: FC<{ link: string; text: string }> = ({
  link,
  text,
}) => {
  return (
    <ListItem
      sx={{ marginLeft: "  4rem", marginBottom: "1rem  ", width: "100%" }}
    >
      <Link href={link} prefetch={true}>
        <Typography>{text}</Typography>
      </Link>
    </ListItem>
  );
};
const ResponsiveMenu = () => {
  let [isOpenDrawer, setIsOpenDrawer] = useState(false);
  let [isOpenLoginBox, setOpenLoginBox] = useState<boolean>(false);
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{
          padding: "  1rem   ",
          position: "sticky",
          top: 0,
          bgcolor: "#fff",

          zIndex: 999,
        }}
      >
        <IconButton onClick={() => setOpenLoginBox(true)}>
          <AccountCircleOutlinedIcon sx={{ fontSize: "2rem" }} />
        </IconButton>

        <Box width={"132px"} height={"80px"}>
          <Link href={"/"} prefetch={true}>
            <img
              src="/images/AllNewLogos/persian vertical 2-01.svg"
              style={{
                objectFit: "cover",
                objectPosition: "center",
                width: "100%",
                height: "100%",
              }}
              alt=""
            />
          </Link>
        </Box>
        <IconButton onClick={() => setIsOpenDrawer(true)}>
          <MenuOutlinedIcon sx={{ fontSize: "2rem" }} />
        </IconButton>
        <Drawer
          anchor="right"
          open={isOpenDrawer}
          onClose={() => setIsOpenDrawer(false)}
        >
          <List sx={{ padding: "2rem 0" }}>
            <CusListItemDetails link="/" text="خانه" />
            <CusListItemDetails link="/UserReview" text="نوشتن  بررسی" />
            <CusListItemDetails link="/Trips" text="سفر ها" />
            <CusListItemDetails
              link="/TravelersChoice"
              text="انتخاب  مسافران"
            />
            <CusListItemDetails link="/Articles" text="داستان های مسافران" />
            <CusListItemDetails link="/Hotels" text="هتل ها" />
            <CusListItemDetails link="/Attractions" text="کارهایی برای انجام" />
            <CusListItemDetails link="/Restaurants" text="رستوران ها" />
            <CusListItemDetails link="/CheapFlightsHome" text="پرواز ها" />
            <CusListItemDetails link="/Rentals" text="اجاره ها در تعطیلات" />
            <CusListItemDetails link="/ForumHome" text="انجمن ها" />
            <CusListItemDetails link="/PostPhotos" text="ارسال تصاویر" />
            <CusListItemDetails link="/CreateListing" text="اضافه کردن مکان" />
          </List>
        </Drawer>
      </Box>
      <LoginBox open={isOpenLoginBox} setOpen={setOpenLoginBox} />
    </>
  );
};

export default ResponsiveMenu;
