import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import placeholder from "../../Images/znareak.png";
import TextMagic from "../TextMagic";
import Title from "../Titlte";
import CV from "../../Resources/CV-Libardo.pdf"

export default function Home() {
  return (
    <Row className="align-items-center app">
      <Title title="Inicio" />
      <Col md={12} lg={6}>
        <h1 className="mb-4 font-weight-bold text-center text-md-center text-lg-left">
          Libardo Rengifo
        </h1>
        <p className="text-center text-md-center text-lg-left">
          Desarrollador web junior en
          <TextMagic text="ReactJS" />, <TextMagic text="NodeJS" /> y
          <TextMagic text="SASS" /> , en constante estudio y crecimiento
          integral en el ámbito laboral. Dispuesto a trabajar en ambientes
          grupales donde el trabajo en grupo y la comunicación es crucial.
          <a href={CV} target="_blank" className="d-block text-monospace mt-1" rel="noreferrer">
            Ver curriculum
          </a>
        </p>

        <blockquote>
          Si soy grande, es porque me apoyé en hombros fuertes.
        </blockquote>
      </Col>
      <Col md={12} lg={6}>
        <Image
          src={placeholder}
          className="rounded-circle d-block mx-auto mx-md-auto mx-lg-0"
          fluid
        />
      </Col>
    </Row>
  );
}
