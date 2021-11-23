import React from "react";
import Grid from "@material-ui/core/Grid";
import { Search } from "../Elements/Input.stories";
import { Sort } from "../Elements/Button.stories";

export default {
  title: "Data/Filter",
};

const Template = (args) => {
  return (
    <>
      <Grid container item spacing={1} sm={12} md={9} lg={7}>
        <Grid item xs={12} sm={6} md={5}>
          <Search />
        </Grid>
        <Grid item xs={12} sm={2} >
          <Sort />
        </Grid>
      </Grid>
    </>
  );
};

export const Default = Template.bind({});
Default.ImageList = {};
