import { CusBtn } from "@/elements/CusComponets";

import Link from "next/link";
import { FC } from "react";

const LinkBorder: FC<{ text: string; link: string }> = ({ text, link }) => {

  return (
    <CusBtn>
      <Link href={link}>{text}</Link>
    </CusBtn>
  );
};

export default LinkBorder;
