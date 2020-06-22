/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "Goldseabeach",
    description: "Explore Phuket as a local adventure with affordable hotel.forget your hardwork routine and say yes to explore the exciting city.",
    author: "@winrawee",
    twitterUsername: "@winrawee",
    image: "/goldseabeach.jpg",
    siteUrl: "https://goldseabeach.netlify.app",

  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://goldseabeach.netlify.app',
        sitemap: 'https://goldseabeach.netlify.app/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-sass`, `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`, `gatsby-plugin-sharp`, 
    `gatsby-plugin-transition-link`, `gatsby-plugin-playground`,
    `gatsby-plugin-react-helmet`, `gatsby-plugin-sitemap`,
  ],
}
