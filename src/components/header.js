import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

import styles from './header.module.scss';

import Menu from '../components/menu';
import GitHub from './social-icons/github';
import Instagram from './social-icons/instagram';
import Linkedin from './social-icons/linkedin';


const Header = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          presentation {
            hi
            name
            title
            socialMedia {
              link
              name
            }
          }
        }
      }
    }
  `)
  return (
    <header className={styles.header}>
      <Menu />

      <div className="text-center py-5 my-5">
        <p className="text-2xl">{data.site.siteMetadata.presentation.hi}</p>
        <h1 className="text-6xl font-bold mt-2">{data.site.siteMetadata.presentation.name}</h1>
        <p className="text-lg mt-2">{data.site.siteMetadata.presentation.title}</p>
        <div className="my-10">
          {
            data.site.siteMetadata.presentation.socialMedia.map((socialMedia) => (
              <a key={socialMedia.name} href={socialMedia.link} target="_blank" rel="noreferrer" className="mx-2">
                {socialMedia.name === 'github' && <GitHub />}
                {socialMedia.name === 'instagram' && <Instagram />}
                {socialMedia.name === 'linkedin' && <Linkedin />}
              </a>
            ))
          }
        </div>

        <a href="#contato" className="btn btn-xl btn-outline-light">Contato</a>
      </div>

    </header>
  )
}

export default Header

