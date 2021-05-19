import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useMutation } from "react-query";
import { deleteProject } from "../../Helpers/requests";
import React from "react";

export default function DeleteProjectModal({
  id,
  isVisibleDeleteModal,
  setVisibleDeleteModal,
  title,
}) {
  const mutation = useMutation((id) => deleteProject(id));

  const deleteProjectOnclick = async () => {
    const data = await mutation.mutateAsync(id);
    console.log(data);
  };

  return (
    <Modal
      show={isVisibleDeleteModal}
      onHide={setVisibleDeleteModal}
      backdrop="static"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Eliminar Proyecto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="mb-3">
          <small>
            El proyecto <strong>{title}</strong> se eliminará y esta acción no
            es reversible.
            <br />
            ¿Seguro de eliminar este proyecto?
          </small>
        </p>

        <Button
          variant="danger"
          onClick={deleteProjectOnclick}
          disabled={mutation.isLoading}
          block
        >
          {mutation.isLoading ? "Eliminando..." : "Si, de acuerdo"}
        </Button>
      </Modal.Body>
    </Modal>
  );
}
