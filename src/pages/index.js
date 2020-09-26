import React from "react";
import Header from '../components/header';
import Container from '../components/container';
import About from '../components/about';
import Jobs from '../components/jobs';
import Projects from '../components/projects';

export default () =>
  <Container>
    <Header />
    <About />
    <Jobs />
    <Projects limit="2" />
  </Container>