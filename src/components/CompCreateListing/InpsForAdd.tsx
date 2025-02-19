import { Box, InputAdornment, Typography } from "@mui/material";
import { FC } from "react";
import { IInpsForAddProps } from "../../types/intefaces";
import { CusInpForAdd } from "@/elements/CusComponets";

const InpsForAdd: FC<IInpsForAddProps> = ({
  icon,
  isOptional,
  isSelectBox,
  label,
  isIcon,
  position,
  setIsOpenNewAddressBox,
}) => {


  return (
    <Box>
      <Box
        display={"flex"}
        gap={1}
        alignItems={"center"}
        sx={{ marginBottom: "0.25rem" }}
      >
        <Typography sx={{ fontWeight: "bold" }}>{label}</Typography>
        {isOptional && (
          <Typography sx={{ fontSize: "0.75rem" }}>(optional)</Typography>
        )}
      </Box>
      {!isSelectBox ? (
        isIcon ? (
          position === "start" ? (
            <CusInpForAdd
              onFocus= {  ()  =>  setIsOpenNewAddressBox ?.(true)}
              onBlur={()  =>  {
                if (setIsOpenNewAddressBox) {
                  setIsOpenNewAddressBox(false)
                }
              }}
              startAdornment={
                <InputAdornment position={position}>{icon}</InputAdornment>
              }
            />
          ) : (
            <CusInpForAdd
              endAdornment={
                <InputAdornment position={position}>{icon}</InputAdornment>
              }
            />
          )
        ) : (
          <CusInpForAdd />
        )
      ) : (
        <h1>helllo </h1>
      )}
    </Box>
  );
};

export default InpsForAdd;
