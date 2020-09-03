import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  makeStyles,
} from "@material-ui/core";
import { uuid } from "uuidv4";

const Dropdown = ({ open, months }) => {
  const useStyle = makeStyles((theme) => ({
    listItemTextStyle: {
      color: "rgb(204 204 204)",
    },
    listItemStyle: {
      "&:hover": {
        background: "#444",
      },
    },
  }));

  const classes = useStyle();

  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {months.map((month, index) => (
          <ListItem
            className={classes.listItemStyle}
            style={{ paddingLeft: "70px" }}
            button
            key={uuid()}
          >
            <ListItemText
              className={classes.listItemTextStyle}
              primary={month}
            />
          </ListItem>
        ))}
      </List>
    </Collapse>
  );
};

export default Dropdown;
