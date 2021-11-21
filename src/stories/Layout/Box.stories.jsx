import React from "react";
import Box from "@material-ui/core/Box";

export default {
  title: "Layout/Box",
  component: Box,
};

const Template = (args) => (
  <Box
    sx={{
      bgcolor: "background.paper",
      m: 1,
      p: 2,
      width: "8rem",
      height: "5rem",
      border: "1px solid",
      borderColor: 'lightgrey',
    }}
    boxShadow={4}
  ></Box>
);

export const Default = Template.bind({});
Default.args = {};
