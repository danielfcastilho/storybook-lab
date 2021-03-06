import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import ContainerUI from "@material-ui/core/Container";
import { Container, Typography } from "@material-ui/core";

export default {
  title: "Layout/Container",
  component: [ContainerUI, Box, CssBaseline],
};

const Template = (args) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography component="div" style={{ backgroundColor: '#3C3E44', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
};

export const Default = Template.bind({});
Default.args = {};
