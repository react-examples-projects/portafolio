import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import ImagePlaceholder from "../Images/placeholder.png";
import { useUserContext } from "../Context/UserContext";
import { BiTrash, BiEditAlt } from "react-icons/bi";
import DeleteProjectModal from "./Modals/DeleteProjectModal";
import UpdateProjectModal from "./Modals/UpdateProjectModal";
import { useState } from "react";

export default function Project({
  _id,
  title,
  description,
  github,
  link,
  technologies = [],
  image,
  setProjects,
}) {
  const styles = { fontSize: "12px" };
  const { user } = useUserContext();
  const [isVisibleDeleteModal, setVisibleDeleteModal] = useState(false);
  const [isVisibleUpdateModal, setVisibleUpdateModal] = useState(false);
  const toggleDeleteModal = () => setVisibleDeleteModal(!isVisibleDeleteModal);
  const toggleUpdateModal = () => setVisibleUpdateModal(!isVisibleUpdateModal);

  return (
    <div
      className="bg-white shadow-sm h-100 w-100"
      style={{ borderRadius: "10px", maxHeight: "370px", overflowY: "auto" }}
      role="listitem"
    >
      <img
        src={image || ImagePlaceholder}
        alt={title}
        title={title}
        className="img-fluid w-100"
        style={{
          objectFit: "cover",
          maxHeight: "200px",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      />
      <div className="px-4 py-3">
        <h6>{title}</h6>
        <p style={{ fontSize: "12px" }} className="text-muted">
          {description}
        </p>

        <div className="d-flex flex-wrap">
          {technologies.map((tech, i) => (
            <Badge variant="secondary" className="mr-1 mb-1" key={i} pill>
              <small className="font-weight-light text-white">{tech}</small>
            </Badge>
          ))}
        </div>

        <div className="d-flex my-1">
          {github && (
            <a
              href={github}
              style={styles}
              className="text-muted mr-2"
              target="_blank"
              rel="noreferrer"
            >
              Repositorio
            </a>
          )}

          {link && (
            <a
              href={link}
              style={styles}
              className="text-muted"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          )}
        </div>

        {user._id && (
          <div className="d-flex">
            <Button variant="link" size="sm" onClick={toggleDeleteModal}>
              <span className="text-danger mr-1">Eliminar</span>
              <BiTrash style={{ fill: "#dc3545" }} />
            </Button>
            <Button variant="link" size="sm" onClick={toggleUpdateModal}>
              <span className="text-primary mr-1">Editar</span>
              <BiEditAlt style={{ fill: "#007bff" }} />
            </Button>
          </div>
        )}
      </div>

      <DeleteProjectModal
        id={_id}
        {...{ isVisibleDeleteModal, toggleDeleteModal, title, setProjects }}
      />
      <UpdateProjectModal
        {...{
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
        }}
      />
    </div>
  );
}
