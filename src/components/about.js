import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

const About = () => {
    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          aboutMe {
            description
            photoUrl
            title
          }
          presentation {
            name
          }
        }
      }
    }
  `)

    return (
        <section id="sobre" className="section-portfolio-item bg-gray-100">
            <h2 className="text-3xl font-bold uppercase text-center">Sobre mim</h2>
            <p className="text-center">
                <img src={data.site.siteMetadata.aboutMe.photoUrl}
                    className="rounded-full border-8 border-white shadow-xl inline-block my-5"
                    alt={data.site.siteMetadata.presentation.name} title={data.site.siteMetadata.presentation.name} />
            </p>
            <h3 className="text-xl font-bold my-2 text-center">{data.site.siteMetadata.aboutMe.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.aboutMe.description }} className="text-justify"></p>
        </section>
    )
}

export default About

