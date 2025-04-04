"use client"
import { SearchOutlined } from "@mui/icons-material";
import { Box, InputAdornment, InputProps } from "@mui/material";
import { FC, useState } from "react";
import { CusSearchBtn, CusSearchInp } from "../../elements/CusComponets";
import AutoCompleteBox from "../AutoCompleteBox/AutoCompleteBox";

interface IInpSearchProps extends InputProps {
  isBtnSearch: boolean;
  textPlaceHolder: string;
}

const InpSearch: FC<IInpSearchProps> = ({ isBtnSearch, textPlaceHolder, sx }) => {
  let [isOpenCompleteBox, setIsOpenCompleteBox] = useState(false);
  return (
    <Box position={"relative"} width={"100%"} display={"flex"} justifyContent={"center"}>
      <CusSearchInp
        sx={{
          borderRadius: isOpenCompleteBox ? "0rem" : "2rem",
          borderTopLeftRadius: isOpenCompleteBox ? "1rem" : "2rem",
          borderTopRightRadius: isOpenCompleteBox ? "1rem" : "2rem",
          boxShadow: isOpenCompleteBox
            ? "   0px -1px 13px 0px rgba(0,0,0,0.75)"
            : `var(--main-shadow)`,
          ...sx
        }}
        onFocus={() => setIsOpenCompleteBox(true)}
        onBlur={() => setIsOpenCompleteBox(false)}
        placeholder={textPlaceHolder}
        endAdornment={
          <InputAdornment position="end">
            <SearchOutlined />
          </InputAdornment>
        }
        startAdornment={
          isBtnSearch ? <CusSearchBtn> جست و جو </CusSearchBtn> : null
        }
      />
      {isOpenCompleteBox && <AutoCompleteBox />}
    </Box>
  );
};

export default InpSearch;
