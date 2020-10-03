import React, { useEffect, useState } from "react";
import "./ItemCards.css";
import { Typography } from "@material-ui/core";

const ItemCards = ({ item }) => {
  return (
    <div className="ItemCard">
      <div className="ItemCard_thumbnail">
        <span>{item.itemPrice}</span>
        <img className="ItemCard_image" src={item.itemImage} />
      </div>
      <Typography className="ItemCard_name" variant="subtitle2">
        {item.itemName}
      </Typography>
    </div>
  );
};

export default ItemCards;
