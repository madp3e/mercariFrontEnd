import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import CountUp from "react-countup";
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";

export default function SimpleCard() {
  const useStyle = makeStyles((theme) => ({
    cardStyle: {
      "&:hover": {
        transform: "scale(1.05)",
      },
    },
    iconSize: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
    counterFont: {
      color: "black",
      fontWeight: 100,
      opacity: 0.8,
    },
  }));

  const classes = useStyle();

  return (
    <Card raised className={classes.cardStyle}>
      <CardContent>
        <Grid container alignItems="center" justify="space-between">
          <Typography>
            <ShoppingCartTwoToneIcon
              color="primary"
              className={classes.iconSize}
            />
          </Typography>
          <Typography className={classes.counterFont} variant="h4">
            <CountUp start={0} end={1260} duration={2.1} /> items
          </Typography>
        </Grid>
        <Divider />
        <Typography
          className={classes.counterFont}
          style={{ marginTop: "10px" }}
          variant="h5"
        >
          ITEM BOUGHT
        </Typography>
        <Typography
          style={{ color: "black", opacity: 0.5 }}
          variant="subtitle1"
        >
          "Total item bought 2020"
        </Typography>
      </CardContent>
    </Card>
  );
}
