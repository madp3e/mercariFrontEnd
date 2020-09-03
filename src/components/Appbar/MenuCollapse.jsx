import React from "react";
import {
  Collapse,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { CallMissedSharp } from "@material-ui/icons";

const MenuCollapse = ({ openMenu, appBarMenu }) => {
  const useStyles = makeStyles((theme) => ({
    dropdownStyle: {
      position: "absolute",
      background: "rgb(243 241 241)",
      borderRadius: "3px",
      textAlign: "left",
      maxWidth: 100,
    },
    collapseMenuStyle: {
      color: "rgb(63 81 181)",
    },
  }));

  const classes = useStyles();

  return (
    <Collapse className={classes.dropdownStyle} in={openMenu}>
      <List>
        {appBarMenu.map((menu, index) => (
          <ListItem key={index} button>
            <ListItemText
              className={classes.collapseMenuStyle}
              primary={menu}
            />
          </ListItem>
        ))}
      </List>
    </Collapse>
  );
};

export default MenuCollapse;
