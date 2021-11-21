import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";

export default {
  title: "Layout/Header",
  component: [AppBar, Toolbar],
};

const Template = (args) => (
  <AppBar {...args}>
    <Toolbar></Toolbar>
  </AppBar>
);

export const Default = Template.bind({});
Default.args = {};
