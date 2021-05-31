import React from "react";
import Navbar from "./Navbar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import cs from "classnames";

function Layout({
  children,
  className = "justify-content-center align-items-center",
}) {
  return (
    <>
      <Row className="m-0">
        <Col className="p-0 m-0" md={4} lg={3}>
          <Navbar />
        </Col>
        <Col className="p-0 m-0" md={12} lg={9}>
          <Container
            role="main"
            className={cs(
              "py-5 flex-column d-flex px-lg-5 px-3 vh-100",
              className
            )}
            style={{ overflow: "hidden auto" }}
            fluid
          >
            {children}
          </Container>
        </Col>
      </Row>
    </>
  );
}

export default React.memo(Layout);
