import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { createProject } from "../../Helpers/requests";
import { useMutation } from "react-query";

const label = { fontSize: "15px" };
export default function CreateProjectModal(props) {
  const [validated, setValidated] = useState(false);
  const mutation = useMutation((data) => createProject(data));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.checkValidity() === false) {
      return e.stopPropagation();
    }
    setValidated(true);

    const xhr = await mutation.mutateAsync(new FormData(form));
    console.log(xhr);
  };
  return (
    <Modal {...props} centered>
      <Modal.Header closeButton>
        <Modal.Title>Nuevo proyecto</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form validated={validated} onSubmit={handleSubmit} noValidate>
          <Form.Group controlId="title">
            <Form.Label style={label}>Título</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              name="title"
              placeholder="Título del proyecto"
              disabled={mutation.isLoading}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label style={label}>Descripción</Form.Label>
            <Form.Control
              size="sm"
              as="textarea"
              name="description"
              placeholder="Descripción del proyecto"
              disabled={mutation.isLoading}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Row>
            <Col>
              <Form.Group controlId="github">
                <Form.Label style={label}>Link de github</Form.Label>
                <Form.Control
                  size="sm"
                  type="url"
                  name="github"
                  placeholder="Github del proyecto"
                  disabled={mutation.isLoading}
                  required
                ></Form.Control>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="link">
                <Form.Label style={label}>Link del demo</Form.Label>
                <Form.Control
                  size="sm"
                  type="url"
                  name="link"
                  placeholder="Link del proyecto"
                  disabled={mutation.isLoading}
                  required
                ></Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Group controlId="technologies">
            <Form.Label style={label}>Tecnologías</Form.Label>
            <Form.Control
              size="sm"
              as="select"
              name="technologies"
              placeholder="Tecnologías del proyecto"
              style={{ height: "150px" }}
              disabled={mutation.isLoading}
              required
              multiple
            >
              <option>ReactJS</option>
              <option>NodeJS</option>
              <option>HTML5</option>
              <option>CSS3</option>
              <option>Javascript</option>
              <option>SASS</option>
              <option>ExpressJS</option>
              <option>MongoDB + Mongoose</option>
            </Form.Control>
          </Form.Group>

          <Button
            variant="success"
            type="submit"
            disabled={mutation.isLoading}
            block
          >
            {mutation.isLoading ? "Creando proyecto..." : "Crear proyecto"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
