import React from "react";
import {
  TableRow,
  TableCell,
  IconButton,
  Collapse,
  Typography,
  Box,
  Table,
  TableHead,
  TableBody,
  makeStyles,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { useState } from "react";

const BankInDetailRow = ({ bankInDetail, deleteBankInDetail }) => {
  const [openDetail, setOpenDetail] = useState(false);

  const useStyles = makeStyles((theme) => ({
    detailTitleStyle: {
      fontFamily: "Roboto",
      fontWeight: 200,
      opacity: 0.8,
    },
  }));

  const handleDelete = (detail, month) => {
    deleteBankInDetail(detail, month);
  };

  const classes = useStyles();

  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          <IconButton size="small" onClick={() => setOpenDetail(!openDetail)}>
            {openDetail ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="center">{bankInDetail.month}</TableCell>

        <TableCell align="center">{bankInDetail.totalBankIn}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={openDetail} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography
                className={classes.detailTitleStyle}
                variant="subtitle2"
              >
                {bankInDetail.month}`s Bank In Details
              </Typography>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Amount(RM)</TableCell>
                    <TableCell>Delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {bankInDetail.details &&
                    bankInDetail.details.map((detail, index) => (
                      <TableRow key={detail.date}>
                        <TableCell>{detail.date}</TableCell>
                        <TableCell>{detail.amount}</TableCell>
                        <TableCell>
                          {/* DELETE BUTTON FOR DETAILS */}
                          <IconButton
                            style={{ paddingTop: 0, paddingBottom: 0 }}
                            onClick={() =>
                              handleDelete(detail.date, bankInDetail.month)
                            }
                          >
                            <DeleteForeverIcon
                              color="secondary"
                              fontSize="small"
                            />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default BankInDetailRow;
