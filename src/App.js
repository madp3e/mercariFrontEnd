import React, { useState } from "react";
import "./App.css";
import Appbar from "./components/Appbar/Appbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

function Layout() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const openDrawer = () => {
    setDrawerOpen(!drawerOpen);
    console.log("drawerOpen:", drawerOpen);
  };
  const drawerClose = () => {
    setDrawerOpen(!drawerOpen);
    console.log("drawerOpen:", drawerOpen);
  };

  const classes = useStyle();
  return (
    <React.Fragment>
      <Appbar openDrawer={openDrawer} sideBarSize={260} />
      <div className={classes.root}>
        <Sidebar drawerOpen={drawerOpen} drawerClose={drawerClose} />
        <Content sideBarSize={260} />
      </div>
    </React.Fragment>
  );
}

function App() {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
