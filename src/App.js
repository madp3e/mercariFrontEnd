import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Appbar from "./components/Appbar/Appbar";
import AboutPage from "./components/AboutPage/About";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import Items from "./components/ItemsPage/Items";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

function Layout() {
  const [yearMonth, setYearMonth] = useState({
    year: "",
    month: "",
  });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const openDrawer = () => {
    setDrawerOpen(!drawerOpen);
    console.log("drawerOpen:", drawerOpen);
  };
  const drawerClose = () => {
    setDrawerOpen(!drawerOpen);
    console.log("drawerOpen:", drawerOpen);
  };

  const getYearMonth = (year, month) => {
    console.log(year, month);
  };

  const classes = useStyle();

  return (
    <React.Fragment>
      <Router>
        <Appbar openDrawer={openDrawer} sideBarSize={260} />
        <div className={classes.root}>
          <Sidebar
            getYearMonth={getYearMonth}
            drawerOpen={drawerOpen}
            drawerClose={drawerClose}
          />
          <React.Fragment>
            <Switch>
              {/* route to main dashboard */}
              <Route
                exact
                path="/"
                render={(props) => <Content sideBarSize={260} />}
              />
              {/* route to about page */}
              <Route exact path="/about" render={(props) => <AboutPage />} />
              {/* Route for items according to month and year */}
              <Route exact path="/:year/:month" component={Items} />
            </Switch>
          </React.Fragment>
        </div>
      </Router>
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
