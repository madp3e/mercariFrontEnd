import React from "react";
import RevenueData from "./MoneySpentData";
import { Line } from "react-chartjs-2";
import { Paper, makeStyles, Typography } from "@material-ui/core";

const ItemSoldGraph = () => {
  const useStyles = makeStyles({
    paperStyle: {
      padding: "10px",
      paddingTop: "20px",
      marginLeft: "5px",
      maxHeight: 400,
      maxWidth: "95%",
      "&:hover": {
        transform: "scale(1.05)",
      },
    },
    graphTitleStyle: {
      textAlign: "center",
      fontWeight: "200",
      opacity: 0.8,
    },
  });

  const classes = useStyles();

  return (
    <Paper className={classes.paperStyle} elevation={5}>
      <Typography className={classes.graphTitleStyle} variant="h5">
        MONEY SPENT
      </Typography>
      <Line height={150} data={RevenueData} />
    </Paper>
  );
};

export default ItemSoldGraph;
