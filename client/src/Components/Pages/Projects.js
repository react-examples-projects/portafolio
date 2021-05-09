import React from "react";
import Layout from "../Layout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Project from "../Project";
import { useUserContext } from "../../Context/UserContext";

export default function Projects() {
  const { user } = useUserContext();
  console.log(user);
  return (
    <Layout justify="justify-content-start" align="align-items-start">
      <h1 className="my-5 font-weight-bold text-center">Proyectos</h1>

      {user._id && (
        <Accordion className="mb-4">
          <Accordion.Toggle eventKey="0" as={Button} variant="success">
            Agregar proyecto
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="0">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              enim dolorum tempore repellat corporis? Id distinctio aliquam
              placeat ex dignissimos eos nam, odit porro nobis deleniti. Impedit
              iusto magni quia.
            </p>
          </Accordion.Collapse>
        </Accordion>
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
