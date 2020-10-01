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
      title: 'Desenvolvedor Web Full-stack Júnior',
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
    jobs: [
      {
        date: '27/09/2020',
        project: 'Portfolio',
        role: 'Desenvolvedor Full-stack',
        description: `<p>Criação do portfolio para a exposição dos projetos que já desenvolvi e fiz participações
         ao longo da minha atuação como desenvolvedor. Além de listar e contar um pouco sobre cada projeto,
         há também seções em que falo um pouco mais sobre mim e minhas qualificações como profissional.  </p>
        <p><strong>Tecnologias: </strong>HTML, SCSS, JavaScript, ReactJS, GatsbyJs, TailwindCSS.</p>`
      },
      {
        date: '24/08/2020',
        project: 'Union',
        role: 'Desenvolvedor Full-stack',
        description: `<p>A Union é uma plataforma criada com o intuito de facilitar a procura e o acesso das 
        pessoas aos cursos gratuitos que existem e estão espalhados pela internet. Além de ser uma plataforma 
        integradora entre usuários e conteúdos gratuitos, há a possibilidade de interações e recomendações entre os usúarios cadastrados.</p>
        <p><strong>Tecnologias: </strong>HTML, CSS, JavaScript, Angular 9, Spring Boot, Java 8, MySQL</p>`
      },
      {
        date: '10/07/2020',
        project: 'Momentum',
        role: 'Desenvolvedor Full-stack (com foco no Back-end)',
        description: `<p>O Momentum é uma rede social com o intuito de facilitar à busca por informações, compartilhamentos de depoimentos 
        e/ou locais de acolhimento para pessoas com depressão e ansiedade.</p>
        <p><strong>Tecnologias: </strong>HTML, CSS, JavaScript, Angular 9, Spring Boot, Java 8, MySQL</p>`
      }
    ],
    skills: [
      { name: 'HTML', progress: 75 },
      { name: 'CSS', progress: 75 },
      { name: 'JavaScript', progress: 75 },
      { name: 'Java', progress: 50 },
      { name: 'Node JS', progress: 50 },
      { name: 'Angular 9', progress: 75 },
      { name: 'Spring Boot', progress: 75 },
      { name: 'Bootstrap', progress: 75 },
      { name: 'Git', progress: 75 },
      { name: 'MySql', progress: 75 }
    ],
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
