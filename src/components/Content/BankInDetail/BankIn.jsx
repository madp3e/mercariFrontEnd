import React, { useState } from "react";
import {
  Paper,
  makeStyles,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Grid,
  Typography,
  IconButton,
} from "@material-ui/core";
import BankInDetailRow from "./BankInDetailRow";
import AddBankIn from "./AddBankIn";
import AddIcon from "@material-ui/icons/Add";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

const BankIn = () => {
  const [openAddBankIn, setOpenAddBankIn] = useState(false);

  let [bankInDetails, setBankInDetails] = useState([
    {
      month: "JANUARY",
      totalBankIn: 1500 + 3000,
      details: [
        { date: 20200104, amount: 1500 },
        { date: 20200116, amount: 3000 },
      ],
    },
    {
      month: "FEBRUARY",
      totalBankIn: 1750 + 1250,
      details: [
        { date: 20200215, amount: 1750 },
        { date: 20200225, amount: 1250 },
      ],
    },
    {
      month: "MARCH",
      totalBankIn: 2300 + 4100,
      details: [
        { date: 20200215, amount: 2300 },
        { date: 20200225, amount: 4100 },
      ],
    },
    {
      month: "APRIL",
      totalBankIn: 3200 + 1000,
      details: [
        { date: 20200215, amount: 3200 },
        { date: 20200225, amount: 1000 },
      ],
    },
    {
      month: "MAY",
      totalBankIn: 3000 + 2300,
      details: [
        { date: 20200215, amount: 2300 },
        { date: 20200225, amount: 3000 },
      ],
    },
    {
      month: "JUNE",
      totalBankIn: 0,
      details: [],
    },
  ]);

  const AddingBankIn = (newPostage) => {
    console.log(newPostage.month);

    const MonthIndex = bankInDetails.findIndex(
      (bankInDetail) => bankInDetail.month == newPostage.month
    );
    const updatedData = bankInDetails[MonthIndex].details.concat({
      date: newPostage.date,
      amount: newPostage.amount,
    });
    bankInDetails = [...bankInDetails];
    bankInDetails[MonthIndex].details = updatedData;
    setBankInDetails(bankInDetails);
  };

  const deleteBankInDetail = (toDeleteDetail, month) => {
    console.log(toDeleteDetail, month);
    // 1. find the index of the month
    const targetedMonth = bankInDetails.findIndex(
      (bankInDetail) => bankInDetail.month == month
    );
    // 2. target the detail array inside the month
    const updatedData = bankInDetails[targetedMonth].details.filter(
      (detail) => detail.date != toDeleteDetail
    );
    // 3. copy the actual version of the whole data
    bankInDetails = [...bankInDetails];
    // 4. set the updated date to the targeted month`s details array
    bankInDetails[targetedMonth].details = updatedData;
    // 5. set the bankIndetail
    setBankInDetails(bankInDetails);
  };

  const useStyles = makeStyles((theme) => ({
    postingBankingTitle: {
      display: "flex",
      alignItems: "center",
    },
    iconStyle: {
      opacity: 0.8,
      fontSize: 35,
      marginRight: "5px",
    },
    title: {
      color: "black",
      fontWeight: 100,
      opacity: 0.8,
      fontSize: 20,
      flex: 1,
    },
  }));

  const classes = useStyles();

  return (
    <Grid item lg={4} md={10} sm={10} xs={12}>
      <Grid className={classes.postingBankingTitle}>
        <AccountBalanceIcon
          className={classes.iconStyle}
          style={{ color: "#EC932F" }}
        />
        <Typography className={classes.title}>Banking Detail</Typography>
        <IconButton onClick={() => setOpenAddBankIn(!openAddBankIn)}>
          <AddIcon style={{ color: "rgb(113, 179, 124)" }} />
        </IconButton>
        <AddBankIn
          openAddBankIn={openAddBankIn}
          handleClose={() => setOpenAddBankIn(!openAddBankIn)}
          AddingBankIn={AddingBankIn}
          bankInDetails={bankInDetails}
        />
      </Grid>
      <TableContainer style={{ maxHeight: 440 }} component={Paper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="center">Month</TableCell>
              <TableCell align="center">Total BankIn(RM)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bankInDetails.map((bankInDetail, index) => (
              <BankInDetailRow
                deleteBankInDetail={deleteBankInDetail}
                key={index}
                bankInDetail={bankInDetail}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default BankIn;
