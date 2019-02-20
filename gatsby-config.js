module.exports = {
  siteMetadata: {
    title: `Pitchy`,
    description: `Tune your piano - the right way.`,
    author: `@eranshapira`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
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
        name: `pitchy-site`,
        short_name: `pitchy`,
        start_url: `/`,
        background_color: `#e91d63`,
        theme_color: `#e91d63`,
        display: `minimal-ui`,
        icon: `src/images/pitchy-icon.png`,
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-offline',
  ],
}
