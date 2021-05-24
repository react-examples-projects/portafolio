import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { memo } from "react";
import Title from "../Titlte";
import { sendForm } from "../../Helpers/utils";

function Contact() {
  return (
    <>
      <Title title="Contacto" />
      <Form style={{ width: "100%", maxWidth: "650px" }} onSubmit={sendForm}>
        <h1 className="mb-4 font-weight-bold">Contáctame</h1>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Título del mensaje"
            name="title"
            autoFocus
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="email"
            placeholder="Tu correo electrónico"
            name="from_name"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            as="textarea"
            placeholder="Contenido del mensaje"
            style={{ minHeight: "7rem" }}
            name="message"
            required
          />
        </Form.Group>

        <Form.Group>
          <Button type="submit" variant="success" block>
            Enviar
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}

export default memo(Contact);
