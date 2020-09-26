import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby"
import Section from './section';
import Project from './project';

const Projects = (props) => {
    const data = useStaticQuery(graphql`
    {
        allMarkdownRemark {
            edges {
              node {
                fields {
                  slug
                }
                id
                frontmatter {
                  title
                  date(formatString: "DD/MM/YYYY")
                  img
                  techs
                }
                html
              }
            }
        }
    }
  `)
    const top = props.limit ? props.limit : data.allMarkdownRemark.edges.length;
    const projects = data.allMarkdownRemark.edges.slice(0, top);

    return (
        <Section id="projects" className="bg-gray-100" title="Acesso aos projetos">
            {projects.map(({ node }) => (
                <Project key={node.id} project={node} />
            ))}

            {data.allMarkdownRemark.edges.length > top &&
                <div className="text-center">
                    <Link to="projetos" className="btn btn-primary">Ver todos</Link>
                </div>
            }

        </Section >
    )
}

export default Projects

