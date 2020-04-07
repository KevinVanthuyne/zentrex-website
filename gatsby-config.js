module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zentrex`,
        short_name: `Zentrex`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FF0000`,
        display: `standalone`,
        icon: `src/assets/img/favicon.png`,
      },
    },
  ],
};
