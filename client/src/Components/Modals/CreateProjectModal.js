import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { createProject } from "../../Helpers/requests";
import { useMutation } from "react-query";
import { blobToUrl } from "../../Helpers/utils";
import { WEB_TECHNOLOGIES } from "../../Config/config";
import { toast } from "react-toastify";

const label = { fontSize: "15px" };

export default function CreateProjectModal({ setProjects, ...args }) {
  const [validated, setValidated] = useState(false);
  const mutation = useMutation((data) => createProject(data));

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.checkValidity() === false) {
      return e.stopPropagation();
    }

    setValidated(true);

    const fd = new FormData(form);
    blobToUrl(form.image.files[0], async (image) => {
      if (image) fd.set("image", image);
      try {
        const newProject = await mutation.mutateAsync(fd);
        setProjects((projects) => [newProject, ...projects]);
        toast.success("Proyecto creado");
      } catch (error) {
        toast.error("Ocurrió un error al crear el proyecto");
        console.log(error);
      }
    });
  };
  return (
    <Modal {...args} backdrop="static" centered>
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

          <Form.Group>
            <Form.Label style={label} htmlFor="image">
              Elegir imágen del proyecto
            </Form.Label>
            <input
              accept="image/*"
              type="file"
              id="image"
              name="image"
              className="form-control form-control-sm custom-file"
              disabled={mutation.isLoading}
            />
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
              {WEB_TECHNOLOGIES.map((op) => (
                <option key={op} value={op}>
                  {op}
                </option>
              ))}
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
