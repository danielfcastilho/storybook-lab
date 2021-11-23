import React from "react";
import Box from "@material-ui/core/Box";

export default {
  title: "Layout/Box",
  component: Box,
};

const Template = (args) => (
  <Box
    boxShadow={2}
    bgcolor="background.paper"
    m={1}
    p={1}
    style={{ width: "400px", height: "300px" }}
  ></Box>
);

export const Default = Template.bind({});
Default.args = {};
