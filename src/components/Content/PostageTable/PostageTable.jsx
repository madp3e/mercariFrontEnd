import React from "react";
import TableHeader from "./TableHeader";
import TableContent from "./TableContent";
import AddPostage from "./AddPostage";
import {
  Paper,
  makeStyles,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Grid,
  Typography,
  IconButton,
} from "@material-ui/core";
import FlightTakeoffSharpIcon from "@material-ui/icons/FlightTakeoffSharp";
import AddIcon from "@material-ui/icons/Add";
import { useState } from "react";
import { useEffect } from "react";

const PostingTable = () => {
  // Component States
  const [openModal, setOpenModal] = useState(false);

  // const [toEditItem, setToEditItem] = useState({
  //   postedItem: null,
  //   weight: null,
  //   postage: null,
  //   trackingNo: null,
  // });
  // const [isEdit, setIsEdit] = useState(false);

  const [tableItems, setTableItem] = useState([
    {
      postedItem: 50,
      weight: 19,
      postage: 12500,
      trackingNo: "eg578340337jp",
    },
    {
      postedItem: 50,
      weight: 19,
      postage: 12500,
      trackingNo: "eg15793163JP",
    },
  ]);

  const tableHeadMenus = [
    "Posted Item",
    "Weight",
    "Postage(¥)",
    "Tracking No.",
    "Edit",
  ];

  const handleOpenAddPostage = () => {
    setOpenModal(!openModal);
  };

  const handleCloseAddPostage = (event) => {
    setOpenModal(!openModal);
  };

  const handleAddPostage = (newPostage) => {
    setTableItem([...tableItems, newPostage]);
    setOpenModal(!openModal);
  };

  const handleDeletePostage = (trackingNo) => {
    console.log("about to delete postage no:", trackingNo);
    setTableItem(tableItems.filter((item) => item.trackingNo != trackingNo));
  };

  // const handleEditPostage = (item) => {
  //   setIsEdit(!isEdit);
  //   setToEditItem(item);
  //   console.log(toEditItem);
  //   setOpenModal(!openModal);
  // };

  // Component Styling
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: "100%",
      maxHeight: 440,
    },
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
    <React.Fragment>
      {/* Table Title */}
      <Grid item lg={7} md={10} sm={10}>
        <Grid className={classes.postingBankingTitle}>
          <FlightTakeoffSharpIcon
            className={classes.iconStyle}
            color="secondary"
          />
          <Typography className={classes.title}>Posting Detail</Typography>

          <IconButton onClick={handleOpenAddPostage}>
            <AddIcon style={{ color: "rgb(113, 179, 124)" }} />
          </IconButton>
          {/* Modal */}
          <AddPostage
            // toEditItem={toEditItem}
            // isEdit={isEdit}
            handleAddPostage={handleAddPostage}
            handleCloseAddPostage={handleCloseAddPostage}
            openModal={openModal}
          />
        </Grid>
        {/* Table Content */}
        <TableContainer component={Paper} className={classes.root}>
          <Table stickyHeader>
            <TableHeader tableHeadMenus={tableHeadMenus} />
            <TableContent
              handleDeletePostage={handleDeletePostage}
              // handleEditPostage={handleEditPostage}
              tableItems={tableItems}
            />
          </Table>
        </TableContainer>
      </Grid>
    </React.Fragment>
  );
};

export default PostingTable;
