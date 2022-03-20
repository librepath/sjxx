import { graphql, PageProps } from "gatsby";
import React from "react";
import SpeedDial from "../components/SpeedDial";
import MindMap from "../components/MindMap";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../layout";
import Bread from "../components/Bread";
const MdxSlug = ({ data, location }: Props) => {
  const path = location.pathname
  // const win_path = window.location.pathname
  let isMap = path.slice(-3) === "map";
  // console.log(path, win_path);


  let { body, parent: { relativePath }, rawBody, h1, h2, frontmatter } = data.mdx;
  return (
    <Layout>
      <title>{frontmatter.title || h1.map((h) => h.value).join(" ") || ""}</title>
      <div id="mdx-wrap">
        {isMap ? <MindMap children={rawBody} /> : <MDXRenderer children={body} />}
      </div>
      <SpeedDial
        index
        top={!isMap}
        fix={isMap}
        anchors={isMap ? [] : h2.map((h) => h.value)}
      >
        <Bread pathname={path} filePath={relativePath} />
      </SpeedDial>
    </Layout>
  );
};

interface Props extends PageProps {
  data: {
    mdx: {
      slug: string;
      body: string;
      rawBody: string;
      frontmatter: {
        title: string;
      };
      h1: { value: string }[];
      h2: { value: string }[];
      parent: {
        relativePath: string;
      }
    };
  };
}
export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      slug
      body
      rawBody
      frontmatter {
        title
      }
      h1: headings(depth: h1) {
        value
      }
      h2: headings(depth: h2) {
        value
      }
      parent {
        ... on File {
          relativePath
        }
      }
    }
  }
`;

export default MdxSlug;
