import Navbar from "./Navbar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import useBackground from "../Hooks/useBackground";
import placeholder from "../Images/placeholder.png";

export default function Home() {
  useBackground();

  return (
    <Row className="vh-100 vw-100 m-0">
      <Col className="p-0 m-0" md={4} lg={3}>
        <Navbar />
      </Col>
      <Col className="p-0 m-0" md={8} lg={9}>
        <Container className="px-5 vh-100">
          <Row className="justify-content-center align-items-center vh-100">
            <Col md={12} lg={6}>
              <h1 className="mb-4 font-weight-bold">Libardo Rengifo</h1>
              <p className="lead text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquid possimus hic consequatur aut et officiis deserunt
                corrupti, velit impedit soluta nulla saepe similique recusandae
                quasi repellendus veniam maxime perspiciatis numquam.
              </p>
            </Col>
            <Col md={12} lg={6}>
              <Image
                src={placeholder}
                className="w-100 rounded-sm"
                fluid
              />
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
}
