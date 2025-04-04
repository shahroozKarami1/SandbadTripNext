import { FC } from "react";
import { IReviewsCardProps } from "../../types/intefaces";
import { Box, Typography } from "@mui/material";
import { CusCircleIcon, CusReviewCard } from "../../elements/CusComponets";
import Link from "next/link";

const ReviewsCard: FC<IReviewsCardProps> = ({
  comment,
  link,
  profile,
  score,
  title,
  topRateIn,
}) => {
  return (
    <Link href={link} prefetch ={true}>
      <CusReviewCard  >
        <Typography sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}> {title}</Typography>
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <Box display={"flex"}>
            <CusCircleIcon />
            <CusCircleIcon />
            <CusCircleIcon />
            <CusCircleIcon />
          </Box>
          <Typography sx={{ color: `var(--gray-color)` }}>{score}</Typography>
        </Box>
        <Typography sx={{ fontWeight: "bold", fontSize: "0.90rem" }} >
          بالاترین امتیاز در <span className="font-light">{topRateIn}</span>
        </Typography>
        <Box display={"flex"} alignItems={"flex-start"} gap={1} sx={{ marginTop: "1rem" }}>
          <img src={profile} alt="" className="rounded-full" style={{ width: "40px" ,  borderRadius : "50%" }} />
          <Typography sx={{ fontSize: "0.80rem" }}>{comment}</Typography>
        </Box>
      </CusReviewCard>
    </Link>
  );
};

export default ReviewsCard;
