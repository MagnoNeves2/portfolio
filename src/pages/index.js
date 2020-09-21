import React from "react";
import Header from '../components/header';
import Container from '../components/container';
import { Link, graphql } from "gatsby";

export default ({ data }) =>

  <Container>
    <Header title={data.site.siteMetadata.homePage.title} />

    <p>
      {data.site.siteMetadata.homePage.p}
    </p>
    <Link to="sobre">Sobre</Link>
    <br />
    <Link to="projetos">Projetos</Link>
  </Container>

export const query = graphql`
{
  site(siteMetadata: {}) {
    siteMetadata {
      homePage {
        p
        title
      }
    }
  }
}
`