"use client"
import { Box, Container, Input, InputAdornment, List } from "@mui/material";
import { CusTitleHomePage } from "../../elements/CusComponets";
import NavbarMenu from "./NavBarMenu";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import KingBedOutlinedIcon from "@mui/icons-material/KingBedOutlined";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import HouseboatOutlinedIcon from "@mui/icons-material/HouseboatOutlined";
import Grid from "@mui/material/Grid2";
import InpSearch from "../InpSearch/InpSearch";
import { useState } from "react";
import FlightInp from "./FlightInp/FlightInp";
import { useMedia } from "../../context/MediaQueryContext";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";
import SearchIcon from '@mui/icons-material/Search';
import AutoCompleteBox from "../AutoCompleteBox/AutoCompleteBox";
const NavBarHome = () => {
  let [textPlaceholder, setPlaceHolder] = useState<string>(
    "جاهایی برای رفتن و کارهایی برای انجام دادن و هتل ها و..."
  );
  let [textHomeTitle, setTextHomeTitle] = useState<string>("کجا میخوای بری");
  let [isFlightSearch, setIsFlightSearch] = useState<boolean>(false);
  let [isOpenAutoComplete, setIsOpenAutoComplete] = useState(false)
  let [idMenu, setIdMenu] = useState<number>(0);
  function handleBtnClick(
    mainTitle: string,
    id: number,
    textPlaceholder: string,
    isFlight?: boolean
  ) {
    if (mainTitle && textPlaceholder) {
      setPlaceHolder(textPlaceholder);
      setTextHomeTitle(mainTitle);
    }
    if (isFlight) {
      setIsFlightSearch(true);
    } else {
      setIsFlightSearch(false);
    }
    setIdMenu(id);
  }
  let isXs = useMedia();
  return (
    <Box
      sx={{
        // background: isXs
        //   ? "linear-gradient(180deg, rgba(241,90,41,1) 0%, rgba(255,255,255,1) 100%)"
        //   : "",
        // borderBottomLeftRadius: isXs ? "50rem" : "",
        // borderBottomRightRadius: isXs ? "50rem" : "",
        height: isXs ? "350px" : "",
      }}
    >
      <Container>
        <Grid container alignItems={"center"} justifyContent={"center"}>
          <Grid size={{ md: 12 }}>
            <Box
              display={"flex"}
              alignItems={!isXs ? "center" : "unset"}
              flexDirection={"column"}
              sx={{
                overflowX: {
                  xs: "scroll",
                  md: "unset"
                }
              }}
              justifyContent={"center"}
            >
              {!isXs && <CusTitleHomePage>{textHomeTitle}</CusTitleHomePage>}
              <Box>
                <List
                  sx={{
                    display: "flex",
                    mt: { xs: '2rem', md: "unset" },
                  }}
                >
                  <NavbarMenu
                    StateID={idMenu}
                    id={0}
                    HandlerBtn={handleBtnClick}
                    fontSize={"1rem"}
                    NavBarMenuArr={[
                      {
                        icon: (
                          <CottageOutlinedIcon
                          // sx={isXs ? { "& path": { color: "#000" } } : {}}
                          />
                        ),
                        title: "جست و جوی همه ",
                        textTitle: "کجا میخوای بری",
                        placeholder:
                          "جاهایی برای رفتن و کارهایی برای انجام دادن و هتل ها ...",
                      },
                    ]}
                  />
                  <NavbarMenu
                    StateID={idMenu}
                    id={1}
                    HandlerBtn={handleBtnClick}
                    fontSize={"1rem"}
                    NavBarMenuArr={[
                      {
                        icon: (
                          <KingBedOutlinedIcon
                          // sx={isXs ? { "& path": { color: "#fff" } } : {}}
                          />
                        ),
                        title: "هتل ها  ",
                        textTitle: "یه جای عالی بمون",
                        placeholder: "اسم هتل یا مقصد",
                      },
                    ]}
                  />
                  <NavbarMenu
                    StateID={idMenu}
                    id={2}
                    HandlerBtn={handleBtnClick}
                    fontSize={"1rem"}
                    NavBarMenuArr={[
                      {
                        icon: (
                          <CottageOutlinedIcon
                          // sx={isXs ? { "& path": { color: "#fff" } } : {}}
                          />
                        ),
                        title: "کارهایی برای انجام ",
                        textTitle: "یه کار سرگرم کننده انجام بده",
                        placeholder: "جاذبه، فعالیت یا مقصد",
                      },
                    ]}
                  />
                  <NavbarMenu
                    StateID={idMenu}
                    id={3}
                    HandlerBtn={handleBtnClick}
                    fontSize={"1rem"}
                    NavBarMenuArr={[
                      {
                        icon: (
                          <RestaurantOutlinedIcon
                          // sx={isXs ? { "& path": { color: "#fff" } } : {}}
                          />
                        ),
                        title: "رستوران ها ",
                        textTitle: "مکان هایی برای غذا خوردن پیدا کنید",
                        placeholder: "رستوران یا مقصد",
                      },
                    ]}
                  />
                  <NavbarMenu
                    StateID={idMenu}
                    id={4}
                    HandlerBtn={handleBtnClick}
                    isFlight={true}
                    fontSize={"1rem"}
                    NavBarMenuArr={[
                      {
                        icon: (
                          <FlightTakeoffOutlinedIcon
                          // sx={isXs ? { "& path": { color: "#fff" } } : {}}
                          />
                        ),
                        title: "پرواز ها ",
                        textTitle: "بهترین سفر رو پیدا کن",
                        placeholder:
                          "جاهایی برای رفتن و  کارهایی برای انجام دادن و هتل ها ...",
                      },
                    ]}
                  />
                  <NavbarMenu
                    StateID={idMenu}
                    id={5}
                    HandlerBtn={handleBtnClick}
                    fontSize={"1rem"}
                    NavBarMenuArr={[
                      {
                        icon: (
                          <HouseboatOutlinedIcon
                          // sx={isXs ? { "& path": { color: "#fff" } } : {}}
                          />
                        ),
                        title: "تعطیلات اجاره ها",
                        textTitle: "مکان های اجاره ای را کاوش کنید",
                        placeholder: "مقصد",
                      },
                    ]}
                  />
                </List>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ md: isFlightSearch ? 12 : 9 }}>
            <Box sx={{ marginTop: "2rem" }}>
              {isFlightSearch ? (
                <FlightInp />
              ) : (
                !isXs ? (
                  <InpSearch
                    isBtnSearch={true}
                    textPlaceHolder={textPlaceholder}
                  />
                ) : (

                  <Box sx={{
                    border: "1px  solid  #ccc",
                    borderRadius: "0.5rem",
                    position   : 'relative'
                  }}>
                    <Input
                      onFocus={() => setIsOpenAutoComplete(true)}
                      onBlur={() => setIsOpenAutoComplete(false)}
                      sx={{
                        width: "100vw" ,  
                        mt : "2rem"
                      }}
                      placeholder="مکان های مورد علاقه و هتل ها و ..."
                      startAdornment={
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      }
                    />
                    <PrimaryBtn text="جست وجو" sx={{
                      margin: '1.5rem' , 
                    }} />

                    {
                      isOpenAutoComplete && (
                        <AutoCompleteBox />
                      )
                    }
                  </Box>
                )
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NavBarHome;
