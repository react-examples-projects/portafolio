import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { updateProject } from "../../Helpers/requests";
import { useMutation } from "react-query";
import { blobToUrl } from "../../Helpers/utils";
import { WEB_TECHNOLOGIES } from "../../Config/config";

const label = { fontSize: "15px" };

export default function UpdateProjectModal({
  _id,
  title,
  description,
  github,
  link,
  technologies,
  image,
  setProjects,
  isVisibleUpdateModal,
  toggleUpdateModal,
}) {
  const mutation = useMutation((data) => updateProject(data));

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    data.delete("image");
    blobToUrl(form.image.files[0], async (img) => {
      data.append("image", img || image);
      try {
        const newProject = await mutation.mutateAsync({ _id, data });
        //setProjects((projects) => [newProject, ...projects]);
        form.reset();
      } catch (error) {
        console.log(error);
      }
    });
  };
  return (
    <Modal
      show={isVisibleUpdateModal}
      onHide={toggleUpdateModal}
      backdrop="static"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Editar Projecto</Modal.Title>
      </Modal.Header>
      {mutation.isSuccess && (
        <Alert variant="success" className="rounded-0">
          Proyecto editado
        </Alert>
      )}
      {mutation.isError && (
        <Alert variant="danger" className="rounded-0">
          Ocurrió un error al editar el proyecto
        </Alert>
      )}

      <Modal.Body>
        <Form onSubmit={handleSubmit} noValidate>
          <Form.Group controlId="title">
            <Form.Label style={label}>Título</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              name="title"
              placeholder="Título del proyecto"
              defaultValue={title}
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
              defaultValue={description}
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
                  defaultValue={github}
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
                  defaultValue={link}
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
              {WEB_TECHNOLOGIES.map((op) => (
                <option
                  key={op}
                  value={op}
                  selected={technologies.includes(op)}
                >
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
            {mutation.isLoading
              ? "Actualizando proyecto..."
              : "Actualizar proyecto"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
