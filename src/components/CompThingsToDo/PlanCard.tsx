import { FC } from "react";
import { IPlanCardProps } from "../../types/intefaces";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
// import { useMedia } from "../../context/MediaQueryContext";
const PlanCard: FC<IPlanCardProps> = ({ disc, icon, title }) => {
  // let isXs = useMedia();
  return (
    <Grid size={{ md: 4, xs: 12 }}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={2}
        marginY={{ xs: "1rem", md: 0 }}
        border={{ xs: "1px solid  #ccc", md: "unset" }}
        alignItems={"center"}
        justifyContent={"center"}
        paddingY={{ xs: "2rem", md: "0rem" }}
      >
      <Box
        sx={{
          bgcolor: `var(--primary-color)`,
          padding: "0.5rem",
          borderRadius: "50%",
        }}
      >
        {icon}
      </Box>
      <Typography sx={{ fontWeight: "bold", fontSize: "1rem" }}>
        {title}
      </Typography>
      <Typography
        sx={{
          // fontWeight: "light",
          // fontSize: "0.9rem",
          textAlign: "center",
        }}
      >
        {disc}
      </Typography>
    </Box>
    </Grid >
  );
};

export default PlanCard;
