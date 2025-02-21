import { FC } from "react";
import { CusCardWrapperTinyCard, CusTpCard, DarkOverlay } from "../../elements/CusComponets";
import Link from "next/link";

const TinyCardSingleText: FC<{
  link: string;
  cover: string;
  text: string;
}> = ({ cover, link, text }) => {

  return (
    <CusCardWrapperTinyCard>
      <Link href={link}>
        <DarkOverlay />
        <img src={cover} alt="" style={{ borderRadius: "1rem", objectFit: "cover", width: "100%" }} />
        <CusTpCard>{text}</CusTpCard>
      </Link>
    </CusCardWrapperTinyCard>
  );
};
export default TinyCardSingleText;
