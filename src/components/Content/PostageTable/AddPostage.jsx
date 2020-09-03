import { useState } from "react";
import React, { useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Typography,
  DialogActions,
  Button,
  TextField,
  Input,
} from "@material-ui/core";

const AddPostageDetail = ({
  openModal,
  handleCloseAddPostage,
  handleAddPostage,
}) => {
  const [newPostage, setNewPostage] = useState({
    postedItem: "",
    postage: "",
    weight: "",
    trackingNo: "",
  });

  // handle change in form from modal
  const handleChange = (event) => {
    setNewPostage({
      ...newPostage,
      [event.target.name]: event.target.value,
    });
    console.log(newPostage);
  };

  // checking for form is valid or not
  //returning true as we considere all forms are filled
  const valid = () => {
    const { postedItem, postage, weight, trackingNo } = newPostage;
    return (
      postedItem.length > 0 &&
      postage.length > 0 &&
      weight.length > 0 &&
      trackingNo.length > 11
    );
  };

  const handleSubmit = (event) => {
    if (valid()) {
      event.preventDefault();
      // function defined in PostageTable.jsx
      handleAddPostage(newPostage);
    } else {
      return;
    }
  };

  const enableButton = !valid();

  return (
    <Dialog onClose={handleCloseAddPostage} open={openModal}>
      <DialogTitle>Add Postage Detail</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography variant="subtitle2">
            Make sure all detail inserted are correct!
          </Typography>
        </DialogContentText>
        {/* Form field */}
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex" }}>
            <TextField
              style={{ marginRight: "3px" }}
              size="small"
              margin="normal"
              name="postedItem"
              type="number"
              label="Item Posted"
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              style={{ marginRight: "3px" }}
              size="small"
              margin="normal"
              name="weight"
              type="number"
              label="Weight(kg)"
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              style={{ marginRight: "3px" }}
              size="small"
              margin="normal"
              name="postage"
              type="number"
              label="Postage(¥)"
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              size="small"
              margin="normal"
              name="trackingNo"
              label="Tracking No"
              variant="outlined"
              onChange={handleChange}
            />
          </div>
          {/* Button area */}
          <DialogActions>
            <Button onClick={handleCloseAddPostage} color="secondary">
              Cancel
            </Button>
            <Button disabled={enableButton} type="submit" color="primary">
              Save
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddPostageDetail;
