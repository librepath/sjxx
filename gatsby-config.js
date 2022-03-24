module.exports = {
  siteMetadata: {
    siteUrl: "https://sjxx.netlify.app",
    title: "修学辅助",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `docs`,
        path: `${__dirname}/docs`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md", ".MDX", ".MD"],
        // defaultLayouts: {
        //   default: require.resolve("./src/layout.tsx"),
        // },
      },
    },
    "gatsby-plugin-material-ui",
  ],
};
