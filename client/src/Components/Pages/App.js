import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import placeholder from "../../Images/znareak.png";
import Layout from "../Layout";
import TextMagic from "../TextMagic";

export default function Home() {
  return (
    <Layout>
      <Row className="align-items-center">
        <Col md={12} lg={6}>
          <h1 className="mb-4 font-weight-bold">Libardo Rengifo</h1>
          <p className="">
            Desarrollador web junior en
            <TextMagic text="ReactJS" />, <TextMagic text="NodeJS" /> y
            <TextMagic text="SASS" /> , en constante estudio y crecimiento
            integral en el ámbito laboral. Dipuesto a trabajar en ambientes
            grupales donde el trabajo en grupo y la comunicación es crucial.
          </p>

          <blockquote>
            Si soy grande, es porque me apoyé en hombros fuertes.
          </blockquote>
        </Col>
        <Col md={12} lg={6}>
          <Image src={placeholder} className="rounded-circle" fluid />
        </Col>
      </Row>
    </Layout>
  );
}
