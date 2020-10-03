import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { uuid } from "uuidv4";

const Dropdown = ({ openMenu, month, year, getYearMonth }) => {
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

  const handleClick = () => {
    getYearMonth(year, month);
  };

  const classes = useStyle();

  return (
    <Collapse in={openMenu} timeout="auto">
      <List component="div" disablePadding>
        <Link to={`/${year}/${month}`} style={{ textDecoration: "none" }}>
          <ListItem
            className={classes.listItemStyle}
            style={{ paddingLeft: "70px" }}
            button
            key={uuid()}
            onClick={() => handleClick(year, month)}
          >
            <ListItemText
              className={classes.listItemTextStyle}
              primary={month}
            />
          </ListItem>
        </Link>
      </List>
    </Collapse>
  );
};

export default Dropdown;
