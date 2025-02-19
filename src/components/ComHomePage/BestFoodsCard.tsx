import { FC } from "react";
import { IBestFoodsCardProps } from "../../types/intefaces";
import {
  CusCard,
  CusTPSimpleCard,
  DarkOverlay,
} from "../../elements/CusComponets";
import Image from "next/image";

const BestFoodsCard: FC<IBestFoodsCardProps> = ({ image, name }) => {
  return (
    <CusCard>
      <Image

        src={image ? image : ""}
        alt=""
        className="rounded-lg"
        style={{
          objectFit: "cover",
          objectPosition: "center",
          width: "100%",
          height: "100%",
        }}
      />
      <DarkOverlay />
      <CusTPSimpleCard>{name}</CusTPSimpleCard>
    </CusCard>
  );
};

export default BestFoodsCard;
