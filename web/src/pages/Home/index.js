import React from 'react';

import {Container, ProjectList, SideBar } from './styles';
import {useDispatch} from 'react-redux';
import {signOut} from '../../store/modules/auth/actions'
import Project from '../../components/Project'
import api from '../../services/api';


function Home() {
  const dispatch = useDispatch();

  function handleSignOut(){
    dispatch(signOut())

  }
  api.get('project')
  return (
    <Container>
    <SideBar>
      <p>Criar novo projeto</p>
      <button onClick={handleSignOut}>Sair</button>
    </SideBar>
    <ProjectList>
      <Project></Project>
    </ProjectList>
  </Container>
  );
}

export default Home;