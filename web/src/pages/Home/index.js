import React from 'react';

import {Container, ProjectList, SideBar } from './styles';
import Project from '../../components/Project'
function Home() {

  return (
    <Container>
    <SideBar>
      <p>Criar novo projeto</p>
    </SideBar>
    <ProjectList>
      <Project></Project>
    </ProjectList>
  </Container>
  );
}

export default Home;