import React from "react";
import DropdownMonth from "./DropdownMonth";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
import WavesIcon from "@material-ui/icons/Waves";
import { uuid } from "uuidv4";

const DropdownYear = ({ items, handleClick }) => {
  const useStyles = makeStyles((theme) => ({
    primaryStyles: {
      fontSize: "15px",
      fontWeight: 600,
      color: "rgb(191 188 188)",
      opacity: 1,
    },
    yearFontStyle: {
      color: "rgb(191 188 188)",
      opacity: 1,
      fontSize: "18px",
      fontWeight: 600,
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
  }));
  const classes = useStyles();
  return (
    <List>
      {items.map((item, index) => (
        <React.Fragment key={uuid()}>
          <ListItem
            button
            onClick={() => handleClick(item.year, item.open)}
            className={classes.primaryStyles}
          >
            <WavesIcon key={uuid()} style={{ marginRight: "20px" }} />
            <ListItemText
              classes={{
                primary: classes.yearFontStyle,
              }}
              className={classes.listItem}
              primary={item.year}
            />
            {item.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <DropdownMonth open={item.open} months={item.months} />
        </React.Fragment>
      ))}
    </List>
  );
};

export default DropdownYear;
