import React, { Component } from "react";
import { TableHead, TableRow, TableCell, makeStyles } from "@material-ui/core";

const TableHeader = ({ tableHeadMenus }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: "100%",
      maxHeight: 440,
    },
  }));

  const classes = useStyles();

  return (
    <TableHead>
      <TableRow>
        {tableHeadMenus.map((menu, index) => (
          <TableCell align="center" key={index}>
            {menu}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
