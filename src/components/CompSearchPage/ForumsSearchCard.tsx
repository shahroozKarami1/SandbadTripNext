import { FC } from "react";
import { IForumsSearchCardProps } from "../../types/intefaces";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { CusWrapperBox } from "@/elements/CusComponets";

const ForumsSearchCard: FC<IForumsSearchCardProps> = ({
  date,
  disc,
  name,
  nameOfForum,
  profile,
  title,
}) => {

  return (
    <CusWrapperBox>
      <Typography sx={{ fontWeight: "bold" }}>{title}</Typography>

      <Box display={"flex"} alignItems={"center"} gap={1}>
        <Image
          src={profile}
          alt=""
          style={{ width: "50px", borderRadius: "50%", height: "50px" }}
        />
        <Box display={"flex"} gap={1}>
          <Typography sx={{ color: "#444", fontSize: "0.90rem" }}>
            توسط {name}
          </Typography>
          <Typography sx={{ color: "#444", fontSize: "0.90rem" }}>
            {date}
          </Typography>
        </Box>
      </Box>
      <Typography sx={{ fontSize: "0.90rem", paddingY: " 0.5rem" }}>
        از انجمن: {nameOfForum}
      </Typography>
      <Box marginTop={"1rem"}>
        <Typography sx={{ fontSize: "0.80rem", color: "#444" }}>
          {disc}
        </Typography>
      </Box>
    </CusWrapperBox>
  );
};

export default ForumsSearchCard;
