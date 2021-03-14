import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Layout from "../Layout";
import { memo, useState } from "react";

function Contact() {
  return (
    <Layout dir="flex-column">
      <Form style={{ width: "100%", maxWidth: "650px" }}>
        <h1 className="mb-4 font-weight-bold">Contáctame</h1>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Título del mensaje"
            autoFocus
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="email"
            placeholder="Tu correo electrónico"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            as="textarea"
            placeholder="Contenido del mensaje"
            style={{ minHeight: "7rem" }}
            required
          />
        </Form.Group>

        <Form.Group>
          <Button type="submit" variant="outline-success">
            Enviar
          </Button>
        </Form.Group>
      </Form>
    </Layout>
  );
}

export default memo(Contact);
