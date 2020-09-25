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
    projects: [
      {
        title: 'HandsOn Ionic 4 para iniciantes',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus urna ac lectus maximus, nec hendrerit turpis consequat. 
        Aenean porta tincidunt neque a vulputate. Nullam at sapien mollis, pellentesque sapien sed, porta ex. Nam vitae ultrices ligula. Vivamus 
        justo nulla, ullamcorper ac fermentum eget, convallis nec ligula. In elementum laoreet tempor. Vivamus convallis nibh et vulputate efficitur. 
        Nam pellentesque ex in feugiat molestie.`,
        technologies: ['Ionic', 'Html', 'CSS', 'JavaScript'],
        img: 'http://www.fabricadecodigo.com/wp-content/uploads/elementor/thumbs/app-todo-com-ionic-ogd6rpbwgkg8mbyll61x8ez2zohiqvp8xbg4eysni8.png'
      },
      {
        title: 'HandsOn Ionic e SQLite',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus urna ac lectus maximus, nec hendrerit turpis consequat. 
        Aenean porta tincidunt neque a vulputate. Nullam at sapien mollis, pellentesque sapien sed, porta ex. Nam vitae ultrices ligula. Vivamus 
        justo nulla, ullamcorper ac fermentum eget, convallis nec ligula. In elementum laoreet tempor. Vivamus convallis nibh et vulputate efficitur. 
        Nam pellentesque ex in feugiat molestie.`,
        technologies: ['Ionic', 'Html', 'CSS', 'JavaScript'],
        img: 'http://www.fabricadecodigo.com/wp-content/uploads/elementor/thumbs/app-lista-de-compras-com-ionic-ogd6rlkjp8b3bw4274feyfx8m501w3abksu6huy874.png'
      },
      {
        title: 'HandsOn Ionic e APIs REST',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus urna ac lectus maximus, nec hendrerit turpis consequat. 
        Aenean porta tincidunt neque a vulputate. Nullam at sapien mollis, pellentesque sapien sed, porta ex. Nam vitae ultrices ligula. Vivamus 
        justo nulla, ullamcorper ac fermentum eget, convallis nec ligula. In elementum laoreet tempor. Vivamus convallis nibh et vulputate efficitur. 
        Nam pellentesque ex in feugiat molestie.`,
        technologies: ['Ionic', 'Html', 'CSS', 'JavaScript'],
        img: 'http://www.fabricadecodigo.com/wp-content/uploads/elementor/thumbs/app-agendamento-de-servi%C3%A7os-com-ionic-ogd6rir14q78d285nl7j8ymutzdy8zz4kevq212eps.png'
      }
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
