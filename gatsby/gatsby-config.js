module.exports = {
  siteMetadata: {
    title: `Igor Shopify Store`,
    description: `New Amazon build with gatsby and shopify `,
    author: `@igorhristov`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,

    /// shopify
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "igorhr-tutorial-store",
        accessToken: "4cafd5da4d0c5b569e940dd38fd6529c",
        verbose: true,
        paginationSize: 250,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
