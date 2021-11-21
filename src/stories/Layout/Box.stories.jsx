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
      borderColor: "#a9a9a9",
      boxShadow: "0px 0px 20px 0px rgba(169,58,232,0.4)",
    }}
    boxShadow={4}
  >Dados</Box>
);

export const Default = Template.bind({});
Default.args = {};
