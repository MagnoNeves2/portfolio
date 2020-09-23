/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          require("tailwindcss")
        ]
      }
    },
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
    presentation: {
      hi: 'Olá, eu sou o',
      name: 'Magno Neves',
      title: 'Desenvolvedor web Full-stack Júnior',
      socialMedia: [
        {
          name: 'github',
          link: 'https://github.com/MagnoNeves2'
        },
        {
          name: 'instagram',
          link: 'https://www.instagram.com/magno_neves/'
        },
        {
          name: 'linkedin',
          link: 'https://www.linkedin.com/in/magnoneves/'
        }
      ]
    },
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
