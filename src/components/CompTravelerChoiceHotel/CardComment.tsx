import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { ICardCommentProps } from "../../types/intefaces";
import { CusCircleIcon, CusFooter } from "../../elements/CusComponets";
import ReadMore from "../ReadMore/ReadMore";

const CardComment: FC<ICardCommentProps> = ({
  CommentBody,
  date,
  email,
  profile,
}) => {

  return (
    <Box
      sx={{
        border: "1px solid  #ccc",
        padding: "1rem",
        borderRadius: "1rem",
        margin: "0.5rem ",
      }}
    >
      <Box display={"flex"} justifyContent={"flex-end"} marginBottom={"0.25rem"}>
        <CusCircleIcon />
        <CusCircleIcon />
        <CusCircleIcon />
        <CusCircleIcon />
        <CusCircleIcon />
      </Box>
      <ReadMore lineShow={3} textBody={CommentBody} />
      <CusFooter>
        <Box display={"flex"} gap={1} alignItems={"center"}>
          <img src={profile} style={{ width: "40px" }} alt="" className="rounded-full" />
          <Typography sx={{ fontWeight: "bold", fontSize: "0.70rem" }}>
            {email}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: "0.70rem" }}>
            بررسی شده در <span className="font-bold  ">{date}</span>
          </Typography>
        </Box>
      </CusFooter>
    </Box>
  );
};

export default CardComment;
