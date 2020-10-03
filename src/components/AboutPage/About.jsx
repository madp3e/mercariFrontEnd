import React, { useState, useEffect } from "react";
import ImageList from "./ImageList";
import ProfilePic from "../../media/profile.png";
import {
  Grid,
  Toolbar,
  Typography,
  makeStyles,
  Paper,
  CardMedia,
} from "@material-ui/core";
import axios from "axios";

const About = () => {
  const [mercariLink, setMercariLink] = useState("");
  const [itemDetail, setItemDetail] = useState([]);
  const useStyles = makeStyles((theme) => ({
    root: {
      flex: 1,
    },
    aboutMeStyle: {
      fontSize: "45px",
      opacity: 0.7,
      marginTop: "10px",
      fontFamily: "Roboto",
      fontWeight: 200,
      textAlign: "center",
      marginBottom: "15px",
    },
    imgStyle: {
      borderRadius: "5px",
    },
    paperStyle: {
      background: "#fff",
      maxHeight: "500",
      width: "100%",
    },
    cardStyle: {
      width: "300px",
      height: "300px",
      borderRadius: "3px",
    },
    paragraphStyle: {
      margin: "20px",
      fontFamily: "Roboto",
      opacity: 0.8,
      letterSpacing: "1px",
      fontSize: "18px",
    },
  }));

  const {
    root,
    aboutMeStyle,
    paragraphStyle,
    paperStyle,
    cardStyle,
  } = useStyles();

  const handlePost = (e) => {
    e.preventDefault();
    axios
      .post("/link", { mercariLink })
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
      });
  };

  useEffect(() => {
    axios
      .get("/api")
      .then((res) => res.data)
      .then((data) => setItemDetail(data));
  }, [itemDetail]);

  return (
    <Grid className={root}>
      <Toolbar />
      <Typography className={aboutMeStyle}>About Me</Typography>
      <Paper elevation={0} className={paperStyle}>
        <Grid container>
          <Grid style={{ height: "100%" }} item md={6} sm={12} xs={12}>
            <Typography variant="body1" className={paragraphStyle} paragraph>
              I am a self-thaught full-stack web developer with enthusiasm and
              always eager to learn new techs. I am currently living in
              Shizuoka,Japan and actively looking for job opportunities in web
              developement.
            </Typography>
            {}
            <Typography variant="body1" className={paragraphStyle} paragraph>
              I am also a fast-learner when I had my eyes on new skill and will
              always give my best at mastering them. Before I started focusing
              on web developement, am a pyhton developer and I have developed a
              few project based applications. Currently my main full stacks are
              javascript and python.
            </Typography>
            <Typography variant="body1" className={paragraphStyle} paragraph>
              If you have any job opportunities that might suit me, please
              contact me at ahmadfaizuddin17@gmail.com
            </Typography>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <ImageList />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default About;
