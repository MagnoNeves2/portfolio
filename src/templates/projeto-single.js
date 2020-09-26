import React from "react";
import Header from "../components/header";
import Container from "../components/container";
import Project from '../components/project';
import { graphql } from 'gatsby';

export default ({ data }) => {
    const project = data.markdownRemark;

    return (
        <Container>
            <Header />
            <Project project={project} />
        </Container>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            fields {
                slug
            }
            frontmatter {
                title
                date(formatString: "DD/MM/YYYY")
                img
                techs
            }
            html
            id
        }
    }
`