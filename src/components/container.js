import React from 'react';
import styles from './container.module.css';
import { useStaticQuery, graphql } from 'gatsby';

export default ({ children }) => {
    const { site } = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                footerText
                }
            }
        }
    `)
    return (
        <div>
            <div div className={styles.container} >
                {children}
                <div className={styles.footer}>{site.siteMetadata.footerText}</div>
            </div >
        </div>
    )
}