import { FC } from "react";
import { IDarkBtnProps } from "../../types/intefaces";
import { CusDarkBtn } from "@/elements/CusComponets";

const DarkBtn: FC<IDarkBtnProps> = ({ children, setState }) => {

  return (
    <CusDarkBtn onClick={setState ? () => setState(true) : () => {}}>
      {children}
    </CusDarkBtn>
  );
};

export default DarkBtn;
