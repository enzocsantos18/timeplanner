import React, { useEffect, useState } from "react";

import { Container, ProjectList, InfoList, Header} from "./styles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../../store/modules/auth/actions";


import NewProject from '../../components/NewProject'
import Project from "../../components/Project";
import InfoCard from "../../components/InfoCard";
import api from "../../services/api";

function Home() {
  const dispatch = useDispatch();
  const [projects, setProjects] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(0);


  useEffect(() => {
    listProjects();
  }, [isOpen]);
  async function listProjects() {
    const projects = await api.get("/projects");

    setProjects(projects.data);
  }
  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <>
      <Header>
        <div>
          <Link  onClick={() => setIsOpen(!isOpen)}>Criar novo projeto</Link>
          <NewProject isOpen={isOpen} createProject={() => setIsOpen(false) }></NewProject>
  
          <button onClick={handleSignOut}>Sair</button>
        </div>
      </Header>
      <Container>
        <h2>Projetos</h2>
        <ProjectList>
          {projects.map((project) => (
            <Project
              onClick={() => {
                selectedProject === project.id ? setSelectedProject(0) : setSelectedProject(project.id)
              } }
              key={project.id}
              name={project.name}
              id={project.id}
              category={project.Category.name}
            />
          ))}
        </ProjectList>
        <h2>Desempenho</h2>
        {
          selectedProject ? (
          <InfoList>
            <InfoCard title="Hoje" value={1000} />
            <InfoCard title="Essa semana" value={1200}/>
            <InfoCard title="Esse mês" value={2000}/>
            <InfoCard title="Esse ano" value={400}/>
          </InfoList>

          ): null
        }

      </Container>
    </>
  );
}

export default Home;
