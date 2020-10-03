import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Typography,
  TextField,
  DialogActions,
  Button,
} from "@material-ui/core";
import { useState } from "react";

const AddBankIn = ({
  openAddBankIn,
  handleClose,
  bankInDetails,
  AddingBankIn,
}) => {
  const defaultMonth = "JANUARY";

  const [newBankIn, setNewBankIn] = useState({
    month: defaultMonth,
    amount: "",
    date: "",
  });

  const validForm = () => {
    const { month, amount, date } = newBankIn;
    return month.length > 0 && amount.length > 0 && date.length > 5;
  };

  const handleChange = (event) => {
    setNewBankIn({ ...newBankIn, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    if (validForm) {
      event.preventDefault();
      AddingBankIn(newBankIn);
      setNewBankIn({
        month: defaultMonth,
        amount: "",
        date: "",
      });
      handleClose(!openAddBankIn);
    } else {
      return;
    }
  };

  const enableButton = !validForm();

  return (
    <Dialog open={openAddBankIn} onClose={handleClose}>
      <DialogTitle>Add BankIn Detail </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography variant="subtitle2">
            Make sure bank in detail inserted are correct!
          </Typography>
        </DialogContentText>
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex" }}>
            <TextField
              style={{ margin: "3px" }}
              label="Select Month"
              select
              margin="normal"
              name="month"
              size="small"
              variant="outlined"
              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
            >
              {bankInDetails.map((month, index) => (
                <option key={month.month}>{month.month}</option>
              ))}
            </TextField>
            <TextField
              style={{ margin: "3px" }}
              label="BankIn Amount (RM)"
              size="small"
              margin="normal"
              name="amount"
              type="number"
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              label="Date"
              InputLabelProps={{ shrink: true }}
              style={{ margin: "3px" }}
              size="small"
              margin="normal"
              name="date"
              type="date"
              variant="outlined"
              onChange={handleChange}
            />
          </div>

          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button disabled={enableButton} on type="submit" color="primary">
              Save
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddBankIn;
