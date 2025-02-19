import { Box, List, Typography } from "@mui/material";
import { FC } from "react";
import { IwhenToVisitCardProps } from "../../types/intefaces";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import DoNotDisturbOnTotalSilenceOutlinedIcon from "@mui/icons-material/DoNotDisturbOnTotalSilenceOutlined";
import { CusIcon, CusListItemDetails, CusListItemTopic, CusListItemWhenVisit } from "@/elements/CusComponets";
const WhenToVisitCard: FC<IwhenToVisitCardProps> = ({
  countOfRainDay,
  temperature,
  typeOfBusy,
  monthName,
  details,
  isDetails,
}) => {


  return (
    <Box
      sx={{
        padding: "1rem",
        borderRadius: "0.5rem",
        margin: "0  0.5rem",
        direction: "rtl",
        border: "1px  solid #ccc",
      }}
    >
      <Typography sx={{ fontWeight: "bold" }}>{monthName}</Typography>
      <List>
        <CusListItemWhenVisit>
          <CusIcon>
            <DeviceThermostatIcon />
          </CusIcon>
          <CusListItemTopic>{temperature} &deg;F</CusListItemTopic>
          {isDetails && (
            <CusListItemDetails>{details?.tempDetail}</CusListItemDetails>
          )}
        </CusListItemWhenVisit>
        <CusListItemWhenVisit>
          <CusIcon>
            <WaterDropIcon />
          </CusIcon>
          <CusListItemTopic>{countOfRainDay}روز بارانی</CusListItemTopic>
          {isDetails && (
            <CusListItemDetails>{details?.rainDayDetail}</CusListItemDetails>
          )}
        </CusListItemWhenVisit>
        <CusListItemWhenVisit>
          <CusIcon>
            <DoNotDisturbOnTotalSilenceOutlinedIcon />
          </CusIcon>
          <CusListItemTopic>{typeOfBusy} شلوغ </CusListItemTopic>
          {isDetails && (
            <CusListItemDetails>{details?.busyDetail}</CusListItemDetails>
          )}
        </CusListItemWhenVisit>
      </List>
    </Box>
  );
};

export default WhenToVisitCard;
