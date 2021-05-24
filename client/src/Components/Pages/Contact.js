import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { memo, useState } from "react";
import Title from "../Titlte";
import useForm from "../../Hooks/useForm";

function Contact() {
  const mutation = useForm();
  const [data, setData] = useState({ title: "", from_name: "", message: "" });
  const onChange = ({ target }) => {
    setData((d) => ({ ...d, [target.name]: target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutateAsync(data);
  };

  return (
    <>
      <Title title="Contacto" />
      <Form
        style={{ width: "100%", maxWidth: "650px" }}
        onSubmit={handleSubmit}
      >
        <h1 className="mb-4 font-weight-bold">Contáctame</h1>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Título del mensaje"
            name="title"
            disabled={mutation.isLoading}
            onChange={onChange}
            value={data.title}
            autoFocus
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="email"
            placeholder="Tu correo electrónico"
            name="from_name"
            disabled={mutation.isLoading}
            onChange={onChange}
            value={data.from_name}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            as="textarea"
            placeholder="Contenido del mensaje"
            style={{ minHeight: "7rem" }}
            name="message"
            disabled={mutation.isLoading}
            onChange={onChange}
            value={data.message}
            required
          />
        </Form.Group>

        <Form.Group>
          <Button
            type="submit"
            variant="success"
            disabled={mutation.isLoading}
            block
          >
            {mutation.isLoading ? "Enviando..." : "Enviar"}
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}

export default memo(Contact);
