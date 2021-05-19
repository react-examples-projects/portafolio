import React from "react";
import Img from "react-bootstrap/Image";
import ErrorFetching from "../../Images/error_fetching.svg";
import Button from "react-bootstrap/Button";

export default function ErrorFetchingProjects({
  maxWidth = "400px",
  title = "Ocurrió un error en la descarga",
}) {
  const reload = () => window.location.reload();

  return (
    <div className="text-center mx-auto" style={{ maxWidth }}>
      <h4 className="text-danger">{title}</h4>
      <Img src={ErrorFetching} className="d-block mb-4 mx-auto w-100" />
      <Button variant="success" onClick={reload} block>
        Recargar la página
      </Button>
    </div>
  );
}
