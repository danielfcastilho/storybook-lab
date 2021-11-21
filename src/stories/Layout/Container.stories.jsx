import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import ContainerUI from "@material-ui/core/Container";

export default {
  title: "Layout/Container",
  component: [ContainerUI, Box, CssBaseline],
};

const Template = (args) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <ContainerUI maxWidth="sm">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
      </ContainerUI>
    </React.Fragment>
  );
};

export const Default = Template.bind({});
Default.args = {};
