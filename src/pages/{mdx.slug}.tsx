import { graphql, PageProps } from "gatsby";
import React, { useEffect } from "react";
import MindMap from "../components/MindMap";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { useStore } from "../store";
// import { GlobalStyles } from "../theme";
const MdxSlug = ({ data, location: { pathname: path } }: Props) => {
  const [{ isMap }, set] = useStore()
  useEffect(() => {
    set({
      path,
      isMap: path.slice(-4).includes('map'),
      anchors: data.mdx.h2.map(h => h.value || ' '),
      file: data.mdx.parent.relativePath
    })
  }, [path])
  // let isMap = path.slice(-4).includes('map')

  let { body, rawBody, h1, frontmatter } = data.mdx;
  return (
    <div>
      <title>{frontmatter.title || h1.map((h) => h.value).join(" ") || ""}</title>
      {isMap ?
        <div id="map-wrap"> <MindMap children={rawBody} /> </div>
        :
        <div id="mdx-wrap"><MDXRenderer children={body} /></div>
      }
    </div>
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
