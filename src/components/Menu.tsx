import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Link from "./Link";

const SlugLinks = ({ left = "", right = "", depth = [NaN, 9] }) => {
  const data: Data = useStaticQuery(query);
  const slugs = data.allMdx.edges.map(({ node }) => ({
    label: node.frontmatter.title || node.headings[0]?.value,
    slug: node.slug,
  }));
  if (!depth[0]) depth[0] = left.split("/").length + 1;
  return (
    <div id='slugs-wrap'>
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
            dep > 3 ? "div" : `h${dep}`,
            { key: id, id: label },
            <Link to={`/${slug}`}>
              {/* {`第${meta.lesson || "?"}课`}{" "} */}
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
