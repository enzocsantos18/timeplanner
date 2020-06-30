import React, {useEffect, useState} from 'react';

import {Container, ProjectList, SideBar } from './styles';
import {useDispatch} from 'react-redux';
import {signOut} from '../../store/modules/auth/actions'
import Project from '../../components/Project'
import api from '../../services/api';


function Home() {
  const dispatch = useDispatch();
  const [projects, setProjects] = useState([])

  useEffect(() =>{
    listProjects()
  }, [])
  async function listProjects(){
    const projects = await api.get('/projects')

    setProjects(projects.data)
  }
  function handleSignOut(){
    dispatch(signOut())

  }
  return (
    <Container>
    <SideBar>
      <p>Criar novo projeto</p>
      <button onClick={handleSignOut}>Sair</button>
    </SideBar>
    <ProjectList>
      {
        projects.map(project =>(
          <Project key={project.id} name={project.name} id={project.id} category={project.Category.name}  />
        ))
      }
    </ProjectList>
  </Container>
  );
}

export default Home;