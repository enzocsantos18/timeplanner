import React, { useEffect, useState } from "react";
import { Container, ProjectList, InfoList, Header, Error } from "./styles";
import { useDispatch } from "react-redux";
import notFound from '../../assets/not_found.svg'

import { signOut } from "../../store/modules/auth/actions";
import NewProject from "../../components/NewProject";
import Project from "../../components/Project";
import InfoCard from "../../components/InfoCard";
import api from "../../services/api";

function Home() {
  const dispatch = useDispatch();
  const [projects, setProjects] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(0);
  const [projectInfo, setProjectInfo] = useState(0);

  useEffect(() => {
    api.get(`time/${selectedProject}`).then((res) => {
      setProjectInfo(res.data);
    });
  }, [selectedProject]);
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
  async function handleProjectClick(id) {
    selectedProject === id ? setSelectedProject(0) : setSelectedProject(id);

    if (selectedProject !== 0) {
      const projectInfos = await api.get(`time/${id}`);
      setProjectInfo(projectInfos.data);
    }
  }
  async function handleDelete(id) {
    await api.delete(`projects/${id}`);
    setProjects(projects.filter((project) => project.id !== id));
    setSelectedProject(0);
  }

  return (
    <>
      <Header>
        <div>
          <span onClick={() => setIsOpen(!isOpen)}>Criar novo projeto</span>
          <NewProject
            isOpen={isOpen}
            createProject={() => setIsOpen(false)}
          ></NewProject>

          <button onClick={handleSignOut}>Sair</button>
        </div>
      </Header>
      <Container>
        {projects.length === 0 ? (
          <Error>
             <img src={notFound}/>
            <h3>
              Você ainda não tem projetos cadastrados, adicione novos projetos.
            </h3>
          </Error>
        ) : (
          <>
            <h2>Projetos</h2>
            <ProjectList>
              {projects.map((project) => (
                <Project
                  onClick={() => {
                    handleProjectClick(project.id);
                  }}
                  handleDelete={() => handleDelete(project.id)}
                  key={project.id}
                  name={project.name}
                  id={project.id}
                  category={project.Category.name}
                />
              ))}
            </ProjectList>
          </>
        )}
        {selectedProject ? (
          <>
          <h2>Desempenho</h2>
          <InfoList>
            <InfoCard title="Hoje" value={projectInfo.day} />
            <InfoCard title="Essa semana" value={projectInfo.week} />
            <InfoCard title="Esse mês" value={projectInfo.month} />
            <InfoCard title="Esse ano" value={projectInfo.total} />
          </InfoList>
          </>
        ) : null}
      </Container>
    </>
  );
}

export default Home;
