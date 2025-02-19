import { FC } from "react";
import { IListOfForumProps } from "../../types/intefaces";
import { List, ListItem, Typography } from "@mui/material";
import Link from "next/link";

const ListOfForum: FC<IListOfForumProps> = ({ DataArrListFormus, title }) => {
  return (
    <List>
      <Typography  sx={{fontWeight : "bold"  ,  fontSize : "1.1rem" ,  marginBottom  : "1rem"}}>{title}</Typography>
      {DataArrListFormus.map(({ link, text } ,  index) => {
        return (
          
            <ListItem key={index}>
              <Link href={link}>
                <Typography  >{text}</Typography>
              </Link>
            </ListItem>
          
        );
      })}
    </List>
  );
};

export default ListOfForum;
