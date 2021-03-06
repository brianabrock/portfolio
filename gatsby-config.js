module.exports = {
  siteMetadata: {
    title: `Briana Brock`,
    description: `Web portfolio for Briana Brock.`,
    author: `Allen Welch`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
        name: `brianabrock-portfolio`,
        short_name: `Briana Brock Portfolio`,
        start_url: `/portfolio`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
        resolve: 'gatsby-plugin-web-font-loader',
        options: {
            google: {
                families: ['Righteous', 'Noto Sans', 'Risque', 'IBM Plex Serif', 'Montserrat']
            }
        }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
  pathPrefix: "/portfolio"
}
