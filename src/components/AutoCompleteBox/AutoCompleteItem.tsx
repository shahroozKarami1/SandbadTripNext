import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { IAutoCompleteItemProps } from "../../types/intefaces";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import Image from "next/image";
import { CoverNearbyIcon, CusAutoCompleteItem } from "@/elements/CusComponets";

const AutoCompleteItem: FC<IAutoCompleteItemProps> = ({
  country,
  cover,
  name,
  IsNearby,
}) => {
  return (
    <CusAutoCompleteItem display={"flex"} gap={1} alignItems={"center"}>
      <Box>
        {IsNearby ? (
          <CoverNearbyIcon>
            <NearMeOutlinedIcon />
          </CoverNearbyIcon>
        ) : (
          <Box sx={{ height: "70px" }}>
            <Image
              src={cover ?  cover  :  ""}
              alt=""
              style={{
                objectFit: "cover",
                objectPosition: "center",
                width: "100%",
                borderRadius: "0.5rem",
                height: "100%",
              }}
            />
          </Box>
        )}
      </Box>
      <Box display={"flex"} flexDirection={"column"}>
        <Typography sx={{ fontWeight: "bold" }}>{name}</Typography>
        <Typography sx={{ color: "#444", fontSize: "0.90rem" }}>
          {country}
        </Typography>
      </Box>
    </CusAutoCompleteItem>
  );
};

export default AutoCompleteItem;
