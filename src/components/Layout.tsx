import React from "react";
import { CssBaseline, ThemeProvider, Stack, StackProps } from "@mui/material";
import themeOptions from "../style/theming";
import { TITLE } from "../constants/SiteMeta";

interface Props extends StackProps {
  title: string;
}
const Layout = ({ title, ...rest }: Props) => (
  <ThemeProvider theme={themeOptions}>
    <CssBaseline>
      <title children={title || TITLE} />
      <Stack
        id="layout-wrap"
        sx={{ px: 1, textAlign: "justify" }}
        justifyContent="space-between"
        minHeight="100vh"
        {...rest}
      />
    </CssBaseline>
  </ThemeProvider>
);

export default Layout;
