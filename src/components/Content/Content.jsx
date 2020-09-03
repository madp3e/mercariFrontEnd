import React from "react";
// Components imports
import ContentCard from "./Cards/BoughtItemCard";
import MoneySpentCard from "./Cards/MoneySpentCard";
import RevenueCard from "./Cards/RevenueCard";
import ItemSoldGraph from "./Graph/ItemSoldGraph";
import RevenueGraph from "./Graph/MoneySpentGraph";
import PostageTable from "./PostageTable/PostageTable";
import BankIn from "./BankInDetail/BankIn";
// Material ui imports
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, Grid, Typography } from "@material-ui/core";
import LocalAtmSharpIcon from "@material-ui/icons/LocalAtmSharp";
import PollSharpIcon from "@material-ui/icons/PollSharp";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    margin: "15px",
  },
  title: {
    color: "black",
    fontWeight: 100,
    opacity: 0.8,
    fontSize: 20,
    flex: 1,
  },
  iconStyle: {
    opacity: 0.8,
    fontSize: 35,
    marginRight: "5px",
  },
}));

const Content = ({ sideBarSize }) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <Toolbar />
      <Grid container>
        <LocalAtmSharpIcon className={classes.iconStyle} color="primary" />
        <Typography className={classes.title}>Expenses Overview</Typography>
        <Grid
          style={{ marginBottom: "1px" }}
          container
          justify="center"
          spacing={3}
        >
          <Grid item lg={4} md={6} sm={10} xs={12}>
            <ContentCard className={classes.cardSpacing} />
          </Grid>
          <Grid item lg={4} md={6} sm={10} xs={12}>
            <MoneySpentCard />
          </Grid>
          <Grid item lg={4} md={10} sm={10} xs={12}>
            <RevenueCard />
          </Grid>
        </Grid>
        <PollSharpIcon
          className={classes.iconStyle}
          style={{ color: "#71B37C" }}
        />
        {/* GRAPHS COMP */}
        <Typography className={classes.title}>Data Analyzation</Typography>
        {/* ITEM SOLD GRAPH */}
        <Grid
          style={{ marginBottom: "3px" }}
          container
          justify="center"
          spacing={2}
        >
          <Grid item lg={6} md={10} sm={10} xs={12}>
            <ItemSoldGraph />
          </Grid>
          {/* REVENUE GRAPH */}
          <Grid item lg={6} md={10} sm={10} xs={12}>
            <RevenueGraph />
          </Grid>
        </Grid>

        <Grid container justify="space-around" spacing={2}>
          {/* POSTING DETAIL COMP */}
          <PostageTable />
          {/* BANKING DETAIL COMP */}
          <BankIn />
        </Grid>
      </Grid>
    </main>
  );
};

export default Content;
