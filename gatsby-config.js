/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
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
    aboutMe: {
      title: 'Amante de tecnologias e com 1 ano de experiência na área!',
      description: `Persistente, curioso, focado e amante de tecnologia. Entusiasta de
      soluções e inovações. Me considero alguém com alto learning
      agility, o que me ajuda a realizar atividades simultâneas com êxito.
      Minha persistência me ajuda a ampliar meus conhecimentos e
      realizações todos os dias. Minha curiosidade ajuda a explorar
      cenários improváveis. Meu foco ajuda na gestão de recursos. Ser
      amante da tecnologia é viver uma paixão diariamente.`,
      photoUrl: 'https://pt.gravatar.com/userimage/186220469/eb785a35cb5361076307f0c70470428b.jpg?size=200'
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
