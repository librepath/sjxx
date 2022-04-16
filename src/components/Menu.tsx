import { useTheme } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Link from "./Link";


const SlugLinks = ({ left = "", right = "", depth = [NaN, 9] }) => {
  const data: Data = useStaticQuery(query);
  const slugs = data.allMdx.edges.map(({ node }) => ({
    label: node.frontmatter.title || node.headings[0]?.value,
    slug: node.slug,
  }));
  const theme = useTheme();
  const deep = [
    { tag: 'h1', color: theme.palette.primary.contrastText },
    { tag: 'h2', color: theme.palette.primary.main },
    { tag: 'h3', color: theme.palette.secondary.main },
    { tag: 'div', color: theme.palette.text.primary },
  ]
  if (!depth[0]) depth[0] = left.split("/").length + 1;
  return (
    <div id='menu-wrap'>
      {slugs.map(({ label, slug }, id) => {
        let arr = slug.split("/");
        let dep = arr.length;
        if (
          arr.pop() === right &&
          slug.indexOf(left) === 0 &&
          depth[0] <= dep &&
          (!depth[1] || depth[1] >= dep)
        )
          return React.createElement(
            `${deep[Math.min(dep - 1, 4)].tag}`,
            { key: id, id: label },
            <Link to={`/${slug}`} sx={{ color: deep[Math.min(dep - 1, 4)].color }} >
              {label}
            </Link>
          );
      })}
    </div>
  );
};
interface Data {
  allMdx: {
    edges: {
      node: {
        id: string;
        slug: string;
        frontmatter: {
          title: string;
        };
        headings: {
          value: string;
        }[];
      };
    }[];
  };
}
const query = graphql`
  {
    allMdx(sort: { fields: slug }) {
      edges {
        node {
          id
          slug
          frontmatter {
            title
          }
          headings(depth: h1) {
            value
          }
        }
      }
    }
  }
`;
export default SlugLinks;
