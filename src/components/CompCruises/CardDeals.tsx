import { Box ,  List, Typography } from "@mui/material";
import { FC } from "react";
import { ICardDealsProps } from "../../types/intefaces";
import { CusCardDeals, CusListItemForCardDeals, CusVIewBtn } from "../../elements/CusComponets";

const CardDeals: FC<ICardDealsProps> = ({
  AfterDisCount,
  beforeDisCount,
  countDay,
  date,
  departs,
  distination,
  nameShip,
}) => {

  return (
    <CusCardDeals>
      <Box display={"flex"} flexDirection={"column"}>
        <Typography sx={{ fontWeight: "bold" }}>
          {countDay} کروز شبانه به {distination}
        </Typography>
        <List>
          <CusListItemForCardDeals>
            <span className="font-bold">کشتی :</span> {nameShip}
          </CusListItemForCardDeals>
          <CusListItemForCardDeals>
            <span className="font-bold">تاریخ کشتیرانی: </span> {date}
          </CusListItemForCardDeals>
          <CusListItemForCardDeals>
            <span className="font-bold">حرکت:</span> {departs}
          </CusListItemForCardDeals>
        </List>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-end"}
        gap={1}
      >
        <Typography
          sx={{
            color: "#b03038",
            fontWeight: "bold",
            fontSize: "0.80rem",
            textDecoration: "line-through",
          }}
        >
          {beforeDisCount}ریال
        </Typography>
        <Typography sx={{ fontSize: "1.2em", fontWeight: "bold" }}>
          {AfterDisCount}ریال
        </Typography>
        <CusVIewBtn>دیدن کروز</CusVIewBtn>
      </Box>
    </CusCardDeals>
  );
};

export default CardDeals;
