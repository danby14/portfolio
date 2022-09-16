module.exports = {
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data/`,
      },
    },
    "gatsby-transformer-json",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        include: /assets/,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-E0F8Y5J3YB",
          // "GA-TRACKING_ID", // Google Analytics / GA
        ],
      },
    },
  ],
}
