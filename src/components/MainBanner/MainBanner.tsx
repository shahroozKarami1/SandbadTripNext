import { FC } from "react";
import { IMainBannerProps } from "../../types/intefaces";
import { CusMainBanner } from "@/elements/CusComponets";

const MainBanner: FC<IMainBannerProps> = ({ bannerUrl, children }) => {


  return <CusMainBanner sx={{
    background: `url(${bannerUrl})`,
  }}>{children}</CusMainBanner>;
};

export default MainBanner;
