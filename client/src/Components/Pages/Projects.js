import React, { useState } from "react";
import Layout from "../Layout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Project from "../Project";
import { useUserContext } from "../../Context/UserContext";
import CreateProjectModal from "../Modals/CreateProjectModal";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => setIsVisible(!isVisible);

  const { user } = useUserContext();
  return (
    <Layout justify="justify-content-start" align="align-items-start">
      <h1 className="my-5 font-weight-bold text-center">Proyectos</h1>

      {user._id && (
        <>
          <Button variant="success" className="mb-3" onClick={toggleVisible}>
            Agregar proyecto
          </Button>
          <CreateProjectModal show={isVisible} onHide={toggleVisible} />
        </>
      )}

      <Row>
        <Col md={6} lg={4}>
          <Project
            title="Pagina de peliculas"
            description="Una buena página para ver peliculas hechas en react"
            link="https://www.youtube.com/watch?v=UtLgLVgfOf4&ab_channel=PHXNKUNIVERSE"
            github="https://www.youtube.com/watch?v=UtLgLVgfOf4&ab_channel=PHXNKUNIVERSE"
          />
        </Col>

        <Col md={6} lg={4}>
          <Project
            title="Pagina de peliculas"
            description="Una buena página para ver peliculas hechas en react"
            link="https://www.youtube.com/watch?v=UtLgLVgfOf4&ab_channel=PHXNKUNIVERSE"
            github="https://www.youtube.com/watch?v=UtLgLVgfOf4&ab_channel=PHXNKUNIVERSE"
          />
        </Col>

        <Col md={6} lg={4}>
          <Project
            title="Pagina de peliculas"
            description="Una buena página para ver peliculas hechas en react"
            link="https://www.youtube.com/watch?v=UtLgLVgfOf4&ab_channel=PHXNKUNIVERSE"
            github="https://www.youtube.com/watch?v=UtLgLVgfOf4&ab_channel=PHXNKUNIVERSE"
          />
        </Col>
      </Row>
    </Layout>
  );
}
