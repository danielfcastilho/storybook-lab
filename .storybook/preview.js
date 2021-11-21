import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { StylesProvider } from "@material-ui/core";

import theme from "../src/theme";

export const decorators = [
  (Story) => (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </StylesProvider>
  ),
];
