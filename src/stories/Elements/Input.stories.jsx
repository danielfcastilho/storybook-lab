import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import { Box, Paper } from "@material-ui/core";

export default {
  title: "Elements/Input",
};

const useStyles = makeStyles((theme) => ({
  image: {
    height: 150,
  },
}));

export const Image = (args) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        className={classes.image}
        src={`https://rickandmortyapi.com/api/character/avatar/1.jpeg`}
        alt="Rick"
        loading="lazy"
      />
    </div>
  );
};

export const Search = (args) => {
  return (
    <Box display="inline-block">
      <Paper elevation={2}>
        <InputBase style={{ marginLeft: 10 }} placeholder="Buscar..." />
        <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  );
};

export const WithLabel = (args) => {
  return (
    <TextField
      label="Nome"
      color="primary"
      value="Ricky Morty"
      focused
      InputProps={{
        readOnly: true,
      }}
    />
  );
};
