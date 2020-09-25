import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Section from './section';
import styles from './projects.module.scss';

const Projects = () => {
    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          projects {
            description
            img
            title
            technologies
          }
        }
      }
    }
  `)
    const top = 2;
    const projects = data.site.siteMetadata.projects.slice(0, top);

    return (
        <Section id="projects" className="bg-gray-100" title="Acesso aos projetos">
            {projects.map((project, index) => (

                < div key={index} className={styles.projectContainer} >

                    <div div className={styles.projectImageContainer} >
                        <img src={project.img}
                            alt="Imagem ilustrativa do projeto" />
                    </div>

                    <div className={styles.projectInfoContainer}>
                        <h3 className={styles.title}>{project.title}</h3>
                        <p dangerouslySetInnerHTML={{ __html: project.description }}>
                        </p>
                        <ul className={styles.technologies}>
                            {project.technologies.map((tech, indexTech) => (
                                <li key={indexTech}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                </div >
            ))}

            {data.site.siteMetadata.projects.length > top &&
                <div className="text-center">
                    <a href="#" className="btn btn-primary">Ver todos</a>
                </div>
            }

        </Section >
    )
}

export default Projects

