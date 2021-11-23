import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import {
  Grid,
  ImageListItem,
  ImageListItemBar,
  Paper,
} from "@material-ui/core";

export default {
  title: "Data/List",
};
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  imageList: {
    width: 600,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "100%",
    height: 30,
  },
}));

export const Images = (args) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} rowHeight={180}>
        <ImageListItem>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/289.jpeg"
            alt="Rick D716-C"
          />
          <ImageListItemBar title="Rick D716-C" />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/95.jpeg"
            alt="Dipper and Mabel Mortys"
          />
          <ImageListItemBar title="Dipper and Mabel Mortys" />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/131.jpeg"
            alt="Gar Gloonch"
          />
          <ImageListItemBar title="Gar Gloonch" />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/3.jpeg"
            alt="Summer Smith"
          />
          <ImageListItemBar title="Summer Smith" />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/740.jpeg"
            alt="Cirque du Soleil Zumanity Member"
          />
          <ImageListItemBar title="Cirque du Soleil Zumanity Member" />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/550.jpeg"
            alt="Double Microwawe"
          />
          <ImageListItemBar title="Double Microwawe" />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/105.jpeg"
            alt="Gar Gloonch"
          />
          <ImageListItemBar title="Gar Gloonch" />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/424.jpeg"
            alt="Pizza-person"
          />
          <ImageListItemBar title="Dr. Glip-Glop" />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/77.jpeg"
            alt="Cowboy Morty"
          />
          <ImageListItemBar title="Cowboy Morty" />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/100.jpeg"
            alt="Bubonic Plague"
          />
          <ImageListItemBar title="Bubonic Plague" />
        </ImageListItem>
      </ImageList>
    </div>
  );
};

export const Stack = (args) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container item={true} xs={6} spacing={3}>
        <Grid item xs={12} >
          <Paper className={classes.paper}>Anatomy Park</Paper>
        </Grid>
        <Grid item xs={12} >
          <Paper className={classes.paper}>Pilot</Paper>
        </Grid>
        <Grid item xs={12} >
          <Paper className={classes.paper}>Meeseeks and Destroy</Paper>
        </Grid>
      </Grid>
    </div>
  );
};
