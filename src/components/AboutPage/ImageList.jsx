import React from "react";
import { GridList, GridListTile, makeStyles } from "@material-ui/core";
import Profile1 from "../../media/profile.png";
import Profile2 from "../../media/profile2.png";
import Profile3 from "../../media/profile3.png";

const ImageList = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
      borderRadius: "2px",
    },
    gridList: {
      width: "100%",
      height: 450,
    },
  }));
  const imageDatas = [
    {
      img: Profile1,
      col: 2,
    },
    {
      img: Profile2,
      col: 2,
    },
    {
      img: Profile3,
      col: 4,
    },
  ];
  const { root, gridList, imgStyle } = useStyles();
  return (
    <div className={root}>
      <GridList cellHeight={300} className={gridList} cols={4}>
        {imageDatas.map((image) => (
          <GridListTile key={image.img} cols={image.col || 1}>
            <img src={image.img} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default ImageList;
