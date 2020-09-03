import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import MercariLogo from "../../media/mercari.png";
import DropdownYear from "./DropdownYear";
import { Grid, useMediaQuery, Hidden } from "@material-ui/core";
import { uuid } from "uuidv4";

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: "linear-gradient(180deg,rgb(40 40 40) 0,rgb(17 17 17))",
  },
  drawerContainer: {
    overflow: "auto",
  },
  cardStyle: {
    width: "180px",
    height: "190px",
    margin: "auto",
    marginTop: "20px",
    marginBottom: "20px",
  },
  dashboardSign: {
    fontSize: "15px",
    fontWeight: 600,
    color: "rgb(191 188 188)",
    textAlign: "center",
  },
}));

export default function ClippedDrawer({ drawerOpen, drawerClose }) {
  const classes = useStyles();
  const theme = useTheme();
  const isActive = useMediaQuery(theme.breakpoints.up("md"));
  const [menuBarItems, setMenuBarItems] = useState({
    items: [
      {
        year: "2020",
        months: ["JAN", "FEB", "MARCH", "APRIL"],
        open: false,
        id: uuid(),
      },
      {
        year: "2021",
        months: ["JAN", "FEB", "MARCH", "APRIL"],
        open: false,
        id: uuid(),
      },
    ],
  });

  const handleClick = (selectedYear, status) => {
    const { items } = menuBarItems;
    const updatedItems = items.map((item) =>
      item.year === selectedYear ? { ...item, open: !item.open } : { ...item }
    );
    setMenuBarItems({ items: updatedItems });
  };

  const { items } = menuBarItems;
  return (
    <Grid>
      <Drawer
        className={classes.drawer}
        variant={isActive ? "permanent" : "temporary"}
        open={drawerOpen}
        onClose={drawerClose}
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.drawerContainer}>
          <CardMedia image={MercariLogo} className={classes.cardStyle} />
          <Typography
            style={{
              marginBottom: "20px",
              borderBottom: "1px solid rgb(255 255 255 / 20%) ",
            }}
          ></Typography>
          <Typography className={classes.dashboardSign}>
            MER`DASHBOARD
          </Typography>
          <React.Fragment>
            <DropdownYear items={items} handleClick={handleClick} />
          </React.Fragment>
        </div>
      </Drawer>
    </Grid>
  );
}
