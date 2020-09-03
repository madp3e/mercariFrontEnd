import React, { useState } from "react";
import MenuCollapse from "./MenuCollapse";
import Appbar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {
  Typography,
  IconButton,
  makeStyles,
  Grid,
  Button,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import StoreIcon from "@material-ui/icons/Store";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const Header = ({ sideBarSize, openDrawer }) => {
  const useStyle = makeStyles((theme) => ({
    appbarStyle: {
      background: "#fff",
      width: `calc(100% - ${sideBarSize}px)`,
      borderRadius: "2px",
    },
    appbarStyle2: {
      background: "#fff",
      width: "100%",
      borderRadius: "2px",
    },
  }));

  const appBarMenu = ["Contact", "About", "Logout"];

  const theme = useTheme();
  const isActive = useMediaQuery(theme.breakpoints.up("md"));
  const classes = useStyle();
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const appBarSmall = () => {
    return isActive ? (
      <React.Fragment>
        {appBarMenu.map((menu) => (
          <Button key={menu} style={{ opacity: 0.8 }} color="primary">
            {menu}
          </Button>
        ))}
      </React.Fragment>
    ) : (
      <React.Fragment>
        <div id="Appbar-Dropdown">
          <Button onClick={handleOpenMenu}>
            <Typography color="primary">Menu</Typography>
            <ArrowDropDownIcon />
          </Button>
          <MenuCollapse appBarMenu={appBarMenu} openMenu={openMenu} />
        </div>
        <IconButton onClick={openDrawer}>
          <MenuIcon style={{ opacity: 0.8 }} color="primary" />
        </IconButton>
      </React.Fragment>
    );
  };

  return (
    <Appbar
      position="fixed"
      className={isActive ? classes.appbarStyle : classes.appbarStyle2}
    >
      <Toolbar>
        <IconButton>
          <StoreIcon
            fontSize="large"
            color="primary"
            style={{ opacity: 0.8 }}
          />
        </IconButton>
        <Typography color="primary" style={{ flex: 1 }} variant="h6">
          MERCATRACKS
        </Typography>
        {appBarSmall()}
      </Toolbar>
    </Appbar>
  );
};

export default Header;
