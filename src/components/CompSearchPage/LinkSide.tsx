import { Link, List, ListItem, Typography } from "@mui/material";
import { FC } from "react";
import { useMedia } from "../../context/MediaQueryContext";
import { CusRightSideBox } from "@/elements/CusComponets";

const LinkList: FC<{ text: string }> = ({ text }) => {
  return (
    <ListItem>
      <Link sx={{ color: "#000", cursor: "pointer" }}>{text}</Link>
    </ListItem>
  );
};
const LinkSide = () => {
  let isXs = useMedia();

  let listItems = [
    {
      text: "همه جست و  جو ها",
    },
    {
      text: "رستوران ها",
    },
    {
      text: "مقصد ها",
    },
    {
      text: "هتل ها",
    },
    {
      text: "کارهایی برای انجام",
    },
    {
      text: "اجاره ها در تعطیلات",
    },
    {
      text: "شرکت های هواپیمایی",
    },
    {
      text: "انجمن ها",
    },
  ];
  return (
    <CusRightSideBox sx={{
      top: isXs ? 80 : 200,

    }}>
      <Typography sx={{ fontWeight: "bold", paddingY: "0.5rem" }}>
        فیلتر نتایج
      </Typography>
      <List
        sx={{
          display: isXs ? "flex" : "block",
          whiteSpace: "nowrap",
          overflowX: "auto",
        }}
      >
        {listItems.map(({ text }) => {
          return <LinkList text={text} />;
        })}
      </List>
    </CusRightSideBox>
  );
};

export default LinkSide;
