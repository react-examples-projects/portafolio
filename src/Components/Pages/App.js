import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import useBackground from "../../Hooks/useBackground";
import placeholder from "../../Images/znareak.png";
import Layout from "../Layout";

export default function Home() {
  useBackground();

  return (
    <Layout>
      <Row className="align-items-center">
        <Col md={12} lg={6}>
          <h1 className="mb-4 font-weight-bold">Libardo Rengifo</h1>
          <p className="lead text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            possimus hic consequatur aut et officiis deserunt corrupti, velit
            impedit soluta nulla saepe similique recusandae quasi repellendus
            veniam maxime perspiciatis numquam.
          </p>
          
        </Col>
        <Col md={12} lg={6}>
          <Image src={placeholder} className="rounded-sm" fluid />
        </Col>
      </Row>
    </Layout>
  );
}
