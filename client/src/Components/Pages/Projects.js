import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useUserContext } from "../../Context/UserContext";
import CreateProjectModal from "../Modals/CreateProjectModal";
import ProjectList from "../ProjectList";
import Title from "../Titlte";
import useProjects from "../../Hooks/useProjects";
import ErrorFetchingProjects from "../Errors/ErrorFetchingProjects";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisible = () => setIsVisible(!isVisible);
  const { user } = useUserContext();
  const projects = useProjects();

  return (
    <>
      <Title title="Proyectos" />
      <h1 className="mt-5 mb-4 font-weight-bold">Proyectos</h1>
      <p>
        Proyectos personales más destacados utilizando tecnologías web,
        mayormente frameworks/librerías enfocadas a javascript.
      </p>
      {user._id && (
        <>
          <Button variant="success" className="mb-3" onClick={toggleVisible}>
            Agregar proyecto
          </Button>
          <CreateProjectModal
            show={isVisible}
            onHide={toggleVisible}
            setProjects={projects.setProjects}
          />
        </>
      )}

      {projects.isError ? (
        <ErrorFetchingProjects />
      ) : (
        <ProjectList {...projects} />
      )}
    </>
  );
}
