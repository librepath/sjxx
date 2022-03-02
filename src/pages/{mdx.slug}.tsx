import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import Mdx from "../components/Mdx";
import SpeedDial from "../components/SpeedDial";
import MindMap from "../components/MindMap";
const MdxSlug = ({ data, location }: Props) => {
  let isMap = location.pathname.slice(-3) === "map";
  // console.log("data.mdx", data.mdx);

  let { body, rawBody, h1, h2, frontmatter } = data.mdx;
  return (
    <Layout title={frontmatter.title || h1.map((h) => h.value).join(" ") || ""}>
      {isMap ? <MindMap children={rawBody} /> : <Mdx children={body} />}
      {isMap ? (
        <SpeedDial index fix path={location.pathname} />
      ) : (
        <SpeedDial
          anchors={h2.map((h) => h.value)}
          top
          index
          path={location.pathname}
        />
      )}
    </Layout>
  );
};

interface Props {
  location: { pathname: string };
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
    }
  }
`;

export default MdxSlug;
