import React, { useState } from "react";
import DropdownMonth from "./DropdownMonth";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
import WavesIcon from "@material-ui/icons/Waves";
import { uuid } from "uuidv4";

const DropdownYear = ({ yearMenus, getYearMonth }) => {
  const [openMenu, setOpenMenu] = useState(false);

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
      <React.Fragment key={uuid()}>
        <ListItem
          button
          onClick={() => setOpenMenu(!openMenu)}
          className={classes.primaryStyles}
        >
          <WavesIcon key={uuid()} style={{ marginRight: "20px" }} />
          <ListItemText
            classes={{
              primary: classes.yearFontStyle,
            }}
            className={classes.listItem}
            primary={yearMenus.year}
          />
          {openMenu ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        {yearMenus.months.map((month, index) => (
          <DropdownMonth
            year={yearMenus.year}
            getYearMonth={getYearMonth}
            month={month}
            openMenu={openMenu}
          />
        ))}
      </React.Fragment>
    </List>
  );
};

export default DropdownYear;
