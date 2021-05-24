import html from "../../Images/html.png";
import css from "../../Images/css.jpg";
import sass from "../../Images/sass.jpg";
import node from "../../Images/node.svg";
import react from "../../Images/react.png";
import express from "../../Images/express.png";
import mongodb from "../../Images/mongodb.png";
import Skill from "../Skill";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Title from "../Titlte";

export default function Skills() {
  return (
    <>
      <Title title="Habilidades" />
      <h1 className="mt-5 mb-4 font-weight-bold">Habilidades</h1>
      <Row className="align-items-center">
        <Col lg={4}>
          <Skill
            title="React"
            image={react}
            desc="Librería para desarrollar interfaces gráficas orientadas a pagínas SPA, de forma interactiva y dinamica"
          />
        </Col>

        <Col lg={4}>
          <Skill
            title="Node"
            image={node}
            desc="Entorno de javascript multiplataforma enfocado a realizar aplicaciones de diversas índoles"
          />
        </Col>

        <Col lg={4}>
          <Skill
            title="Express"
            image={express}
            desc="Librería enfocada a facilitar la creación de infraestructuras backend a través de node js"
          />
        </Col>

        <Col lg={4}>
          <Skill
            title="MongoDB"
            image={mongodb}
            desc="Base de datos orientado a documentos, permite almacenar grandes cantidades de información a través de documentos o archivos en BJSON"
          />
        </Col>

        <Col lg={4}>
          <Skill
            title="SASS"
            image={sass}
            desc="Es un lenguaje de estilos para desarrollar de una forma más fácil, flexible y de forma más programática CSS"
          />
        </Col>

        <Col lg={4}>
          <Skill
            title="CSS"
            image={css}
            desc="Lenguaje de estilos en cascadas, permite añadir estilos y maquetar a las páginas web, se complemente con SASS"
          />
        </Col>

        <Col lg={4}>
          <Skill
            title="HTML"
            image={html}
            desc="Lenguaje de etiquetas, permite realizar la estructura o esqueleto de una página web a través de etiquetas para cada elemento de la misma"
          />
        </Col>
      </Row>
    </>
  );
}
