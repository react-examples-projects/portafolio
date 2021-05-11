import { useState } from "react";
import Layout from "../Layout";
import Button from "react-bootstrap/Button";

import { useUserContext } from "../../Context/UserContext";
import CreateProjectModal from "../Modals/CreateProjectModal";
import ProjectList from "../ProjectList";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisible = () => setIsVisible(!isVisible);
  const { user } = useUserContext();

  return (
    <Layout className="justify-content-start align-items-start">
      <h1 className="mt-5 mb-4 font-weight-bold text-center">Proyectos</h1>
      <p>
        Una recopilación de proyectos personales y grupales utilizando tecnologías web,
        mayormente frameworks/librerías enfocadas a javascript:
      </p>
      {user._id && (
        <>
          <Button variant="success" className="mb-3" onClick={toggleVisible}>
            Agregar proyecto
          </Button>
          <CreateProjectModal show={isVisible} onHide={toggleVisible} />
        </>
      )}

      <ProjectList />
    </Layout>
  );
}
