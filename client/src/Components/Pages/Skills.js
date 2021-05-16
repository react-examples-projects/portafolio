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
          <Skill title="React" image={react} />
        </Col>

        <Col lg={4}>
          <Skill title="Node" image={node} />
        </Col>

        <Col lg={4}>
          <Skill title="Express" image={express} />
        </Col>

        <Col lg={4}>
          <Skill title="MongoDB" image={mongodb} />
        </Col>

        <Col lg={4}>
          <Skill title="SASS" image={sass} />
        </Col>

        <Col lg={4}>
          <Skill title="CSS" image={css} />
        </Col>

        <Col lg={4}>
          <Skill title="HTML" image={html} />
        </Col>
      </Row>
    </>
  );
}
