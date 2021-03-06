import React from "react";
import SlugMenu from "./src/components/Menu";
import Link from "./src/components/Link";
import { MDXProvider } from "@mdx-js/react";
import { StoreProvider } from "./src/store";
import ThemeProvider from "./src/theme";
import Layout from "./src/layout";

const coms = {
  SlugMenu,
  h2: (props) => <h2 id={props.children?.toString()} {...props} />,
  a: (props) => <Link to={props.href || "javascript:void(0)"} {...props} />,
};

export const wrapRootElement = ({ element }) => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <MDXProvider components={coms}>
          <Layout>{element}</Layout>
        </MDXProvider>
      </ThemeProvider>
    </StoreProvider>
  );
};
