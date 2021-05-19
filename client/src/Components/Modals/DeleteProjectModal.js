import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useMutation } from "react-query";
import { deleteProject } from "../../Helpers/requests";
import { toast } from "react-toastify";
import React from "react";

export default function DeleteProjectModal({
  id,
  isVisibleDeleteModal,
  toggleDeleteModal,
  title,
  setProjects,
}) {
  const mutation = useMutation((id) => deleteProject(id));

  const deleteProjectOnclick = async () => {
    try {
      await mutation.mutateAsync(id);
      toggleDeleteModal();
      toast.success("Proyecto eliminado");
      setProjects((projects) => {
        const projectsFilter = projects.filter((project) => project._id !== id);
        return projectsFilter;
      });
    } catch {
      toast.error("Ocurrió un error al eliminar el proyecto");
    }
  };

  return (
    <Modal
      show={isVisibleDeleteModal}
      onHide={toggleDeleteModal}
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
