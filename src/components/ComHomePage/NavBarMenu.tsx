import { Button, ListItem, Typography } from "@mui/material";
import { FC } from "react";
import { INavbarMenuProps } from "../../types/intefaces";
import { useMedia } from "../../context/MediaQueryContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarMenu: FC<INavbarMenuProps> = ({
  NavBarMenuArr,
  fontSize,
  id,
  HandlerBtn,
  isFlight,
  StateID,

}) => {
  let isXs = useMedia();
  let  activeLink   = usePathname() ;  
  return (
    <>
      {NavBarMenuArr.map(({ icon, title, link, placeholder, textTitle }) => {
        return (
          <ListItem key={id} sx={{
            padding: " 0 0.75rem", "&:hover": {
            },
          }}>
            <Link href={link ? link : "/"}>
              <Button

                onClick={() => {

                  if (HandlerBtn) {
                    HandlerBtn(
                      textTitle || "",
                      id || 0,
                      placeholder || "",
                      isFlight
                    );
                  }
                }}
                sx={{
                  gap: 1,
                  padding: 0,
                  margin: 0,
                  "&:hover": {
                    borderBottom: !isXs ?  "3px  solid  #000"  : "none"
                  }
                }}
                style={{
                  paddingBottom: "0.5rem",
                  borderBottom: id === StateID || link === activeLink
                    ? "3px  solid var(--dark-color)"
                    : "",
                }}
              >
                {icon}
                <Typography
                  sx={{
                    whiteSpace: "nowrap",
                    fontWeight: "bold",
                    color:"var(--dark-color)",
                    fontSize: { fontSize },
                  }}
                >
                  {title}
                </Typography>
              </Button>
            </Link>
          </ListItem>
        );
      })}
    </>
  );
};

export default NavbarMenu;
