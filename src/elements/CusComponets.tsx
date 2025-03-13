"use client"
import styled from "@emotion/styled";
import { Box, Button, Input, LinearProgress, ListItem, Rating, TextareaAutosize, TextField, Typography } from "@mui/material";
import FirstBannerImg from "../../public/images/HomePage/FirstBanner.jpg";
import MainBanner from "/public/images/ThingsToDoPage/Banner.jpg";
import CircleIcon from "@mui/icons-material/Circle";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";

export const CusMenuBtn = styled(Button)({
  backgroundColor: "transparent",
  color: `var(--dark-color)`,
  fontWeight: "bold",
  fontSize: "0.90rem",
  margin: "0.5rem",
  borderRadius: "2rem",

  "&:hover": {
    backgroundColor: "#ccc",
  },
});
export const CusTitleHomePage = styled(Typography)({
  fontSize: "3rem",
  fontWeight: "bolder",
  marginBottom: "1rem",
});
export const CusSearchInp = styled(Input)({
  border: 0,
  position: "relative",
  
  padding: "  0.75rem   1rem ",
  backgroundColor: "#fff",
  width: "90%",
  "&.MuiInput-underline": {
    ":before": {
      display: "none",
    },
    "&.MuiInputBase-root": {
      "::after": {
        display: "none",
      },
    },
  },
});
export const CusSearchBtn = styled(Button)({
  whiteSpace: "nowrap",
  backgroundColor: `var(--primary-color)`,
  borderRadius: "2rem",
  color: "#000",
  padding: "0.5rem  1.2rem",
  fontWeight: "bold",
  marginLeft: "0.5rem",
});
export const CusFirstBanner = styled(Box)({
  backgroundImage: `url(${FirstBannerImg.src})`,
  height: "500px",
  backgroundPosition: "right",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  borderRadius: "0.25rem",
  position: "relative",
  overflow  : "hidden"
});

export const CusSectionTitle = styled(Box)({
  marginTop: "3rem ",
  marginBottom: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  gap: 4,
});
export const CusTPSimpleCard = styled(Typography)({
  position: "absolute",
  bottom: "2px",
  padding: "0.25rem 0.5rem",
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "#fff",
  width: "100%",
  boxShadow: " inset  -3px -20px 25px 2px rgba(0, 0, 0, 0.45)",
});

export const CusBoxIconHeart = styled(Box)({
  position: "absolute",
  top: "10px",
  right: "10px",
  display: "flex",
  cursor: "pointer",
  alignItems: 'center',
  justifyContent: "center",
  backgroundColor: "#fff",
  borderRadius: "50%",
  padding: "0.5rem",
});

export const CusCard = styled(Box)({
  position: "relative",
  overflow: "hidden",
  margin: "0  0.5rem",
  borderRadius: "1rem",
  direction: "rtl",
});
export const CusStickyMenu = styled(Box)({
  backgroundColor: "#fff",
  position: "sticky",
  display: "block",
  top: 0,
  zIndex: 999,
  width: "100vw",
  paddingTop: "1rem"
});
export const CusThingsToDoPage = styled(Box)({
  background: `linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url(${MainBanner.src})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  
  height: "70vh",
  width: "100vw",
});

export const CusReviewCard = styled(Box)({
  backgroundColor: `#fff`,
  borderRadius: "0.75rem",
  padding: "1.2rem",
  border: "1px  solid  #ccc",
});

export const CusCircleIcon = styled(CircleIcon)({
  "&.MuiSvgIcon-root": {
    fill: `var(--primary-color)`,
    fontSize: "1.2rem",
  },
});

export const CusInput = styled(Input)({
  border: "1px solid #000",
  borderRadius: "2rem",
  padding: "0.70rem",
  width: "100%",

  "&.MuiInputBase-root::before": {
    display: "none !important",
  },
  "&.MuiInputBase-root::after": { border: 0, display: "none !important" },
  "&.MuiInputAdornment-root": {
    "& ::after": {
      display: "none",
    },
  },
});
export const CusTravelerBox = styled(Box)({
  backgroundColor: "#fff",
  boxShadow: `var(--main-shadow)`,
  width: "400px",
  borderRadius: "0.5rem",
  marginTop: "1rem",
  padding: "1rem",
  position: "absolute",
  zIndex: 99,
});

export const CusCardDeals = styled(Box)({
  backgroundColor: "#fff",
  padding: "1rem",
  borderRadius: "0.5rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "1rem",
});

export const CusCircleOutLine = styled(PanoramaFishEyeIcon)({
  "&.MuiSvgIcon-root": {
    // transition: "all  0.25s  ease ",
    // padding: 0,
    // ":hover": {
    //   borderRadius: "50%",
    //   backgroundColor: `var(--primary-color)`,
    //   border: 0,
    // },
    fontSize: "1.2rem",

    fill: `var(--primary-color)`,
  },
});
export const CusStartAndBuildCardTrip = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "5rem ",
  borderRadius: "1rem",

  height: "100%",
});

export const DarkOverlay = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 100%)",
        zIndex: 0,
        borderRadius: "0.5rem",
        height: "100%",
        width: "100%",
      }}
    />
  );
};
export const CusCardDetails = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  // border: "1px  solid  #ccc",
  borderRadius: "1rem",
  height: "100%",
  backgroundColor: "#fff",
});

export const CusOutLineLinkBtn = styled(Button)({
  padding: "0",
  color: "var(--dark-color)",
  fontWeight: "bold",
  fontSize: "0.80rem",
  borderBottom: "1px  solid  var(--dark-color)",
});

export const CusAddBtn = styled(AddCircleOutlinedIcon)({
  fontSize: "2.2rem",
  cursor: "pointer",
});
export const CusRemoveBtn = styled(RemoveCircleOutlinedIcon)({
  fontSize: "2.2rem",
  "&.MuiSvgIcon-root  path": {
    color: `var(--gray-color)`,
    cursor: "pointer",
  },
});

export const CusBackOfSlider = styled(Box)({
  position: "absolute",
  width: "100%",
  top: -30,
  left: 30,
  height: "100%",
  background: " #D9D3FB",
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
  zIndex: 0,
});

export const AiBtn = styled(Button)({
  backgroundColor: "#CEBEE5",
  color: "#000",
  fontWeight: "bold",
  borderRadius: "2rem",
  padding: "0.5rem  1em",
  fontSize: "0.80rem",
  marginLeft: "0.5rem",
});

export const BetaText = styled(Typography)({
  fontSize: "0.7rem",
  fontWeight: "bold",
  backgroundColor: "#CEBEE5",
  padding: "0.35rem",
  borderRadius: "0.25rem",
});

export const CusYellowCard = styled(Box)({
  position: "relative",
  margin: "0   0.2rem",
  direction: "rtl",
  backgroundColor: "#FFF7E1",
  padding: "0.80rem",
  borderRadius: "1rem",
});

export const CusSearchCard = styled(Box)({
  backgroundColor: "#fff",
  borderRadius: "0.5rem",
  overflow: "hidden",
  margin: "2rem  0 ",
  boxShadow: "var(--main-shadow)",
  ":hover": {
    "& .titleHover": {
      transition: "all  0.25s  ease",
      opacity: 0.5,
      borderBottom: "1px  solid  #444",
    },
  },
});


export const CusAutoComplete = styled(Box)({
  backgroundColor: "#fff",
  boxShadow: "-1px 20px 22px 0px rgba(0,0,0,0.75)",
  display: "flex",
  flexDirection: 'column',
  right: 0,
  position: "absolute",
  overflowX: "hidden",
  width: "100%",
  zIndex: 200,
  borderBottomRightRadius: "1rem",
  borderBottomLeftRadius: "1rem",
})



export const CusVerifiedOutlinedIcon = styled(VerifiedOutlinedIcon)({
  "& path": {
    color: "#FF5D5D",
  },
});

export const CusInnerBlogBox = styled(Box)({
  boxShadow: "0 4px 5px 0 rgba(0,0,0,.09)",
  backgroundColor: "#fff",
  borderRadius: "0.5rem",
  padding: "1rem",
  margin: "1rem  0",
});
export const CusTitleRightSide = styled(Typography)({
  fontSize: "1.2rem",
});

export const CusDarkBtnSearch = styled(Button)({
  backgroundColor: "var(--dark-color)",
  color: "#fff",
  whiteSpace: "nowrap",
  padding: "0.75rem  2rem",
  fontWeight: "bold",
  width : "100%"
});
export const CusMainBox = styled(Box)({
  margin: "3rem  0",
  padding: "2rem",
  borderRadius: "1rem",
});
export const CusTgSubText = styled(Typography)({
  margin: "0.5rem",
  width: "250px",
  fontWeight: 500,
});

export const CusTPTitle = styled(Typography)({
  color: "#fff",
  fontWeight: "bold",
});
export const CusInnerMainBanner = styled(Box)({
  position: "absolute",
  bottom: 100,
  right: 150,
  display: "flex",
  alignItems: "center",
});

export const CusBoxTextCard = styled(Box)({
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  bottom: 0,
  overflow: "hidden",
  width: "90%",
  right: 0,
  padding: "1rem 2rem ",
});
export const CusBoxBtnCard = styled(Button)({
  color: `var(--dark-color)`,
  fontWeight: "bold",
  borderRadius: "3rem",
  padding: "1rem",
  fontSize: "1rem",
});
export const CusAddPlaceBtn = styled(Button)({
  border: "2px  solid  #000",
  fontWeight: "bold",
  padding: " 0.75rem  0.5rem",
  marginTop: "1rem",
  width: "100%",
  color: `var(--dark-color)`,
  borderRadius: "2rem",
  ":hover": {
    color: "#fff",
  },
});

export const CusAutoCompleteItem = styled(Box)({
  display: "flex",
  alignItems: "center",
  margin: '0.75rem  1rem  ',
  cursor: "pointer",
  transition: "all  0.25s  ease",
  "&:hover": {
    backgroundColor: "#ccc"

  }
});
export const CoverNearbyIcon = styled(Box)({
  padding: "1rem 1.4rem",
  backgroundColor: "#ccc",
  borderRadius: "0.5rem"
});

export const CusTPForCard = styled(Typography)({
  bottom: 0,
  position: "absolute",
  right: 0,
  color: "#fff",
  padding: "1rem",

});
export const CusBtnTraverler = styled(Button)({
  backgroundColor: "#fff",
  border: "1px  solid  #000",
  borderRadius: "2rem",
  padding: "  1rem   2rem ",
  gap: 5,
  whiteSpace: "nowrap",
});
export const CusBtnSearch = styled(Button)({
  backgroundColor: `var(--primary-color)`,
  color: "#000",
  width: "100%",
  fontWeight: "bold",
  borderRadius: "2rem",
  padding: "1rem",
  whiteSpace: "nowrap",
});

export const CusListItem = styled(ListItem)({
  marginBottom: "1rem  ",
  display: "flex",
  justifyContent: "center",
});
export const CusYellowBtn = styled(Button)({
  backgroundColor: `var(--yellow-color)`,
  fontWeight: "bold",
  padding: "  0.5rem 1rem   ",
  borderRadius: "2rem",
  fontSize: "0.80rem",
  color: "#000",
});

export const CusCardWrapper = styled(Box)({
  position: "relative",
  borderRadius: "0.5rem",
  margin: "0.75rem 0",

});
export const CusCardTextBox = styled(Box)({
  position: "absolute",
  bottom: "10px",
  padding: "1rem",
  "& .CardText": {
    color: "#fff",
    fontWeight: "bold",
    lineHeight: 1.5,
  },
});

export const CusPosterSlider = styled(Box)({
  height: "60vh",
  marginTop: "1.5rem",
  width: "100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "2rem 0 ",
  display: "flex",
  justifyContent: "flex-end",
  flexDirection: "column",
  position: "relative",
});
export const CusInp = styled(TextField)({
  width: "100%",
  direction: "rtl",

})
export const CusTextArea = styled(TextareaAutosize)({
  width: "100%",
  direction: "rtl",
  padding: "1rem",
  border: "1px  solid #ccc",
})

export const MarkCard = styled(Box)({
  position: "absolute", top: 0, right: 0,

})
export const MarkCardText = styled(Typography)({
  color: "#fff", fontSize: "0.80rem", padding: "0.25rem", borderTopRightRadius: "1rem"
})

export const CusServicesCardBox = styled(Box)({
  transition: "all 0.25s ease",
  padding: "0.5rem  0",
  ":hover": {
    backgroundColor: "var(--primary-color)",
  },
});

export const StyledIconBox = styled(Box)({
  fontSize: "1.5rem",
  path: {
    color: "#444",
  },
});

export const CusInpForAdd = styled(Input)({
  width: "100%",
  margin: "1rem  0",
  border: "2px  solid  #ccc",
  padding: "0.5rem",
  "&.MuiInputBase-root": {
    "&::before": {
      display: "none",
    },
  },
});

export const CusVIewBtn = styled(Button)({
  border: "1px  solid  #000",
  fontWeight: "bold",
  color: "#000",
  width: "100%",
});
export const CusListItemForCardDeals = styled(ListItem)({
  fontSize: "0.80rem",
});

export const CusCardWhiteBottom = styled(Box)({
  paddingBottom: "1rem",
  ":hover": {
    opacity: 0.7,
    "& .titleCard": {
      borderBottom: "3px  solid #000",
    },
  },
});

export const CusRoundTripInp = styled(Box)({
  backgroundColor: "#fff",
  borderRadius: "99999px",
  display: "flex",
  alignItems: "center",
  position: "relative",
});
export const CusReponsiveFlightInp = styled(Box)({
  backgroundColor: "#fff",
  display: 'flex',
  width : "400px" ,  
  flexDirection: "column"
})

export const CosWrapBoxSliderDetails = styled(Box)({
  boxShadow: "var(--main-shadow)",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
  height: '100%',
  borderRadius: "0.5rem",
  position: "relative"

})
export const CusLikeIcon = styled(FavoriteBorderIcon)({
  backgroundColor: "#fff",
  borderRadius: '50%',
  padding: "0.20rem",
  cursor: "pointer"
})
export const CusSmallImgBox = styled(Box)({
  position: "relative",
  margin: "0.5rem 0",
  width: "100%",
  height: "100%",
});
export const CusInnerBox = styled(Box)({
  position: "absolute",
  bottom: 0,
  padding: "0.5rem",
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
});
export const CusInnerBigBox = styled(Box)({
  width: "100%",
  height: "400px",
});
export const CusMentions = styled(Button)({
  color: "#000",
  border: "1px solid #ccc",
  borderRadius: "2rem",
  padding: "0.5rem",
  margin: "0.25rem",
  fontSize: "0.70rem",
  fontWeight: "bold",
});
export const CusCardWrapperCardAndReview = styled(Box)({
  position: "relative",
  margin: "0.25rem  0.5rem",
  height: "230px",
});
export const CardRestauran = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: "2rem",
  border: "1px solid  var(--gray-color)",
  position: "relative",
  borderRadius: "0.5rem"
});

export const CusBoxDistination = styled(Box)({
  border: "1px  solid  #000",
  borderRadius: "0.5rem",
});
export const CusWrapperBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
  padding: "1.2rem",
  borderRadius: "0.5rem",
  margin: "0.75rem  ",
  boxShadow: "var(--main-shadow)",
  gap: 5,
});
export const CusRightSideBox = styled(Box)({
  bgcolor: "#fff",
  borderRadius: "0.5rem",
  padding: "0.5rem",
  marginTop: "6rem",
  boxShadow: "var(--main-shadow)",
  position: "sticky",
  backgroundColor: "#fff",
  zIndex: 400,
});
export const CusCardAdvice = styled(Box)({
  borderRadius: "1rem",
  border: "1px  solid  #ccc",
});

export const CusBoxWrapper = styled(Box)({
  position: "relative",
  width: "100%",
  padding: "0  0.5rem  ",
  height: "250px",
});
export const CusText = styled(Typography)({
  color: "#000",
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "0.90rem",
});

export const WrapperBox = styled(Box)({
  padding: "0.5rem",
  position: "relative",
  width: "100%",
  direction: "rtl",
  height: "250px",
});
export const CusCardHeaderSliderWrapper = styled(Box)({
  position: "relative",
  margin: " 0.5rem",
  direction: "rtl",
  border: "1px  solid  #ccc",
  borderRadius: "1rem",
});
export const CusLikeIconHeaderSlider = styled(Box)({
  position: "absolute",
  top: 15,
  right: 15,
  backgroundColor: "#fff",
  borderRadius: "1rem",
  padding: "0.25rem",
});
export const CusCardItemProfileFooter = styled(Box)({
  margin: "0.5rem",
  direction: "rtl",
});
export const CusCountPhoto = styled(Box)({
  backgroundColor: "var(--dark-color)",
  color: "#fff",
  borderRadius: "2rem",
  position: "absolute",
  bottom: 10,
  right: 10,
  display: "flex",
  padding: "0.5rem",
  alignItems: "center",
  gap: 5
});
export const CusWrapperCard = styled(Box)({
  backgroundColor: "#F2F1EC",
  padding: "0.5rem",
  borderRadius: "0.5rem",
});

export const CusListItemWhenVisit = styled(ListItem)({
  padding: "0.25rem  0",
  display: "flex",
  alignItems: "center",
  gap: 5,
});
export const CusListItemTopic = styled(Typography)({
  fontWeight: "bold",
  fontSize: "0.80rem",
});
export const CusListItemDetails = styled(Typography)({
  fontSize: "0.70rem",
  color: "#444",
});
export const CusIcon = styled("span")({
  "& path": {
    color: "#64D2FF",
  },
  "& svg": {
    fontSize: "0.90rem",
  },
});
export const BoxOverLay = styled(Box)({
  position: "absolute",
  height: "100%",
  width: "100%",
  right: 0,
  inset: 0,
  background: "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 100%)",
});

export const CusBadgeBox = styled(Button)({
  display: "inline-flex",
  alignItems: "center",
  borderRadius: "2rem",
  padding: "0.5rem  1rem",
  gap: 3,
  margin: "0.5rem",
  border: "1px  solid #ccc"
});
export const CusFooter = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginTop: "2rem",
  justifyContent: "space-between",
  borderTop: "1px  solid #ccc",
  paddingTop: "0.5rem",
});
export const CusLine = styled(Box)({
  backgroundColor: "var(--primary-color)",
  height: "15px",
  width: "150px",
  borderRadius: "2rem",
});

export const CusTpCard = styled(Typography)({
  color: "#fff",
  fontWeight: "bold",
  fontSize: "1.5rem",
  bottom: 15,
  right: 10,
  position: "absolute"
});

export const CusCardWrapperTinyCard = styled(Box)({
  position: "relative",
  // width : "100%" , 
  margin: "0  0.5rem"
});

export const CusBtn = styled(Button)({
  color: "#444",
  fontSize: "0.90rem",
  borderBottom: "1px solid #000",
  padding: 0,
  margin: "0.25rem 0",
  borderRadius: 0
})

export const CusProgressBar = styled(LinearProgress)({
  width: '100%',
  borderRadius: "1rem",
  height: "13px",
  backgroundColor: "#E0E0E0",
  "& .MuiLinearProgress-bar": {
    backgroundColor: "var(--primary-color)",

  }
});

export const CusCardGaryQues = styled(Box)({
  borderRadius: "1rem",
  backgroundColor: "#F2F2F2",
  padding: "1rem",
  margin: '0.5rem',
  direction: "rtl"
});
export const CusMainBanner = styled(Box)({
  height: "80vh",
  // width: "100vw",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "bottom",
});

export const CusDarkBtn = styled(Button)({
  backgroundColor: `var(--dark-color)`,
  color: "#fff",
  borderRadius: "1.2rem",
  whiteSpace: "nowrap",
  padding: "0.5rem  2rem  ",
  fontSize: "1rem",
  fontWeight: "bold",
});


export const CusMainBannerTripDetails = styled(Box)({
  position: "relative",
  height: "320px",
});
export const CusTopOfBanner = styled(Box)({
  position: "absolute",
  top: 20,
  left: 20,
  display: "flex",
  gap: 10,
  alignItems: "center",
});
export const CusBottomBanner = styled(Box)({
  position: "absolute",
  bottom: 20,
  right: 30,
  display: "flex",
  flexDirection: "column",
  gap: 10,
});
export const CusRentalCard = styled(Box)({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  border: "1px  solid #ccc",
  padding: "2rem",
  alignItems: "center",
  justifyContent: 'center'
});
export const StyledRating = styled(Rating)({
  transform: "scaleX(-1)", // معکوس کردن محور X
  "& .MuiRating-icon": {
    transform: "scaleX(-1)", // برگرداندن آیکون‌ها به حالت عادی
  },
});

export const CusBtnStartAndBuildCard = styled(Button)({
  color: "#000",
  fontWeight: "bold",
  borderRadius: "2rem",
  marginTop: "1.5rem",
  padding: "1rem",
  fontSize: "0.80rem"
});

export const CusCardText = styled(Typography)({
  color: "#fff",
  fontWeight: "bold",
  fontSize: "1.5rem",
  bottom: 10,
  position: "absolute",
  right: "20px",
});

export const CusIconAiCardPlanning = styled(AutoAwesomeOutlinedIcon)({

  "&.MuiSvgIcon-root  ": {
    backgroundColor: "#F2ECF9",
    borderRadius: "50%",
    fontSize: "1.5rem",
    padding: "0.5rem",
    "& path": {
      color: "#784AB1"
    }
  }
})