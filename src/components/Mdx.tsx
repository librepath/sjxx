import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer, MDXRendererProps } from "gatsby-plugin-mdx";
import React from "react";
import Link from "./Link";
import Slugs from "./Slugs";

const coms = {
  Slugs,
  // Text: () => (
  //   <Button
  //     variant="contained"
  //     size="small"
  //     onClick={() => navigate("text")}
  //     children={"打开课文"}
  //   />
  // ),
  h2: (props) => <h2 id={props.children.toString()} {...props} />,
  h3: (props) => <h3 id={props.children.toString()} {...props} />,
  a: (props) => <Link to={props.href || "javascript:void(0)"} {...props} />,
};
export default (props: MDXRendererProps) => (
  <MDXProvider components={coms}>
    <div id="mdx-wrap">
      <MDXRenderer {...props} />
    </div>
  </MDXProvider>
);
