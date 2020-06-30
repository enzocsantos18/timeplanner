import React from 'react';

import {Container, ProjectList, SideBar } from './styles';
import Project from '../../components/Project'
import api from '../../services/api';


function Home() {
  api.get('project')
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