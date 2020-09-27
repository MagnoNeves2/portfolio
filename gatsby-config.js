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
    jobs: [
      {
        date: '05/2013 - atual',
        project: 'Thomson Reuters',
        role: 'Desenvolvedor Sênior',
        description: `<p>Atuo na criação de uma plataforma para software jurídico desenvolvendo
        novas features, correções de bugs e ajudando tecnicamente todos os times
        (Desenvolvimento, Qualidade, Especificação e Analistas de requisitos).</p>
        <p><strong>Tecnologias: </strong>HTML, CSS, JavaScript, C#, ASP NET MVC, ASP.NET Web API, .Net Core, Angular, SQL Server e Scrum.</p>`
      },
      {
        date: '09/2009 - 05/2013',
        project: 'CEOsoftware',
        role: 'Desenvolvedor .Net',
        description: `<p>Desenvolvimento de novas features, correções de bugs e melhorias em geral para mobile, web e desktop. </p>
        <p><strong>Tecnologias: </strong>HTML, CSS, JavaScript, VB.NET, ASP NET Web Forms, ASP NET Windows Forms, 
        ASP.NET Soap web service, SQL Server, Windows Mobile e Android.</p>`
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
  }
}
