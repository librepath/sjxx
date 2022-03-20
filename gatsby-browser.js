import "./src/style/global.css";

import React from "react";
import { CssBaseline, Stack } from "@mui/material";
import Slugs from "./src/components/Menu";
import Link from "./src/components/Link";
import { MDXProvider } from "@mdx-js/react";
import { StoreProvider } from "./src/store";
import ThemeProvider from "./src/theme";

const coms = {
  Slugs,
  h2: (props) => <h2 id={props.children.toString()} {...props} />,
  a: (props) => <Link to={props.href || "javascript:void(0)"} {...props} />,
};

export const wrapRootElement = ({ element }) => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <CssBaseline>
          <MDXProvider components={coms}>
            <Stack
              id="layout-wrap"
              px={1}
              textAlign="justify"
              justifyContent="space-between"
              minHeight="100vh"
            >
              {element}
              <div />
            </Stack>
          </MDXProvider>
        </CssBaseline>
      </ThemeProvider>
    </StoreProvider>
  );
};
