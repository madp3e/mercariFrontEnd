import React from "react";
import ItemSoldData from "./ItemSoldData";
import { Bar } from "react-chartjs-2";
import { Paper, makeStyles, Typography } from "@material-ui/core";

const ItemSoldGraph = () => {
  const useStyles = makeStyles({
    paperStyle: {
      padding: "10px",
      marginLeft: "5px",
      paddingTop: "20px",
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
        ITEM BOUGHT & REVENUE
      </Typography>
      <Bar height={150} data={ItemSoldData[0]} options={ItemSoldData[1]} />
    </Paper>
  );
};

export default ItemSoldGraph;
