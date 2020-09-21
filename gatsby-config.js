/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      }
    },
    'gatsby-transformer-remark'
  ],
  siteMetadata: {
    footerText: 'Magão codando!',
    homePage: {
      title: 'Página Inicial',
      p: 'Página bonitona com vários projetos.'
    },
    aboutPage: {
      title: 'Sobre',
      p: 'Aqui encontra-se tudo sobre o meu ser!'
    }
  }
}
