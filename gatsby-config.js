module.exports = {
  siteMetadata: {
    title: "Vyap | Helping wholesales reach all their retailers in one place.",
    description:  "Workflow management app that helps wholesalers connect with local retailers and create orders, update payments and manage purchase entries & employees.",
    siteUrl: `https://vyap.app`,
    social: {
      twitter: `VyapApp`,
    },
  },
  plugins: [
    "gatsby-plugin-styled-components",
    'gatsby-plugin-postcss',
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "BLAH",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Vyap | Helping wholesales reach all their retailers in one place.`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: "src/images/new_logo.svg",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
