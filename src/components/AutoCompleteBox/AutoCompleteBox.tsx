import { Box, SxProps, Typography } from "@mui/material";
import { CusAutoComplete } from "../../elements/CusComponets";
import AutoCompleteItem from "./AutoCompleteItem";
import { FC } from "react";

const AutoCompleteBox: FC<{ sx?: SxProps }> = ({ sx }) => {
  return (
    <CusAutoComplete sx={sx}>
      <AutoCompleteItem IsNearby={true} name="در نزدیکی" />
      <AutoCompleteItem
        IsNearby={false}
        country="خراسان رضوی / ایران"
        cover="/images/NextTrip/img7.jpg"
        name="مشهد"
      />
      <Box sx={{ margin: "1rem  " }}>
        <Typography sx={{ fontSize: "0.90rem", fontWeight: "bold" }}>
          بیشترین بازدید
        </Typography>
      </Box>

      <AutoCompleteItem
        IsNearby={false}
        country=" تبریز / ایران"
        cover="/images/NextTrip/img8.jpg"
        name="عمارت ایل گلی"
      />
      <AutoCompleteItem
        IsNearby={false}
        country=" تبریز / ایران"
        cover="/images/NextTrip/img1.jpg"
        name="عمارت ایل گلی"
      />
    </CusAutoComplete>
  );
};

export default AutoCompleteBox;
