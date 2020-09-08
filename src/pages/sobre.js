import React from "react";
import Header from "../components/header";
import Container from '../components/container';
import { Link, graphql } from "gatsby";

export default ({ data }) => {
    const { siteMetadata } = data.site;

    return (
        <Container>
            <Header title={siteMetadata.aboutPage.title} />

            <p>
                {siteMetadata.aboutPage.p}
            </p>

            <Link to="/">Home</Link>
        </Container>

    )
}


export const query = graphql`
{
  site(siteMetadata: {}) {
    siteMetadata {
      aboutPage {
        p
        title
      }
    }
  }
}
`


