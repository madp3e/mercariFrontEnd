import React from "react";
import {
  TableBody,
  TableRow,
  TableCell,
  makeStyles,
  Link,
  Button,
  IconButton,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const TableContent = ({
  tableItems,
  handleDeletePostage,
  handleEditPostage,
}) => {
  const useStyles = makeStyles((theme) => ({
    rowHover: {
      "&:hover": {
        transform: "scale(1.02)",
      },
    },
    cellText: {
      fontSize: "18px",
      fontWeight: 200,
      opacity: 0.8,
    },
  }));

  const classes = useStyles();

  return (
    <TableBody>
      {tableItems.map((item, index) => (
        <TableRow key={index} hover className={classes.rowHover}>
          <TableCell className={classes.cellText} align="center" key={item}>
            {item.postedItem}
          </TableCell>
          <TableCell className={classes.cellText} align="center" key={item}>
            {item.weight}
          </TableCell>
          <TableCell className={classes.cellText} align="center" key={item}>
            {item.postage}
          </TableCell>
          <TableCell className={classes.cellText} align="center" key={item}>
            <Link
              target="_blank"
              rel="noopener"
              href={`https://trackings.post.japanpost.jp/services/srv/search/?requestNo1=${item.trackingNo}&requestNo2=&requestNo3=&requestNo4=&requestNo5=&requestNo6=&requestNo7=&requestNo8=&requestNo9=&requestNo10=&search.x=75&search.y=16&startingUrlPatten=&locale=ja`}
              underline="none"
            >
              {item.trackingNo}
            </Link>
          </TableCell>
          <TableCell style={{ display: "flex", justifyContent: "center" }}>
            <IconButton disabled>
              <EditIcon fontSize="small" color="primary" />
            </IconButton>
            <IconButton onClick={() => handleDeletePostage(item.trackingNo)}>
              <HighlightOffIcon fontSize="small" color="secondary" />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TableContent;
