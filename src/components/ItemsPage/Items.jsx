import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import "./Items.css";
import {
  Grid,
  Toolbar,
  Button,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import axios from "axios";
import firebase from "firebase";
import { db } from "../../firebase/Firebase";

const Items = ({ match }) => {
  const [itemDetail, setItemDetail] = useState([]);
  const [scraped, setScraped] = useState({});
  const [mercariLink, setMercariLink] = useState("");
  const [disabelBtn, setDisableBtn] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(match.params.month);
    db.collection("items")
      .doc(match.params.month)
      .collection("posts")
      .orderBy("timeStamp", "asc")
      .onSnapshot((snapshot) => {
        setItemDetail(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            item: doc.data(),
          }))
        );
      });
  }, [match.params.month]);

  const handlePost = (e) => {
    e.preventDefault();
    db.collection("items").doc(match.params.month).collection("posts").add({
      itemImage: scraped.itemImage,
      itemName: scraped.itemName,
      itemPrice: scraped.itemPrice,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setScraped({});
    setDisableBtn(!disabelBtn);
  };

  // const handleScrap = async (e) => {
  //   e.preventDefault();
  //   setLoading(!loading);
  //   try {
  //     const data = await axios.post("/test", { mercariLink }).then((res) => {
  //       console.log(res.data);
  //       setScraped(res.data);
  //     });

  //     setMercariLink("");
  //     setLoading(false);
  //     setDisableBtn(!disabelBtn);
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };

  const handleScrap = async (e) => {
    e.preventDefault();
    setLoading(!loading);
    console.log("sending link to server");
    const done = await axios
      .post("https://mercari-server.herokuapp.com/test", { mercariLink })
      .then((res) => {
        console.log(res.data);
      });
  };

  useEffect(() => {
    axios
      .get("https://mercari-server.herokuapp.com/test2")
      .then((res) => console.log(res.data));
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <Toolbar />

      <div className="Item_form">
        <form>
          <input
            value={mercariLink}
            onChange={(e) => setMercariLink(e.target.value)}
            className="Item_input"
            placeholder="Enter Mercari Link.."
          />
          <Button
            onClick={handleScrap}
            variant="contained"
            color="primary"
            size="small"
            type="submit"
            disabled={mercariLink.length > 10 && false}
          >
            Send
          </Button>
        </form>
        <div className="Item_itemDetail">
          <Typography fontSize={16}>
            Item Name: {}
            {loading ? <CircularProgress size={12} /> : scraped.itemName}
          </Typography>
          <Typography fontSize={16}>
            Item Price: {}
            {loading ? <CircularProgress size={14} /> : scraped.itemPrice}
          </Typography>
          <Button onClick={handlePost} size="small" disabled={disabelBtn}>
            ADD to Db
          </Button>
        </div>
      </div>
      <Grid className="Item" container justify="center">
        {itemDetail.map(({ item, id }) => (
          <ItemCard key={id} item={item} />
        ))}
      </Grid>
    </div>
  );
};

export default Items;
