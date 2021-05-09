import React from "react";

export default function Project({
  title,
  description,
  github,
  link,
  technologies,
  date,
}) {
  const styles = {
    fontSize: "12px",
  };
  return (
    <div className="bg-white shadow-sm mb-3" style={{ borderRadius: "10px" }}>
      <img
        src="https://picsum.photos/500/300"
        alt="The project"
        className="img-fluid w-100"
        style={{
          maxHeight: "200px",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      />
      <div className="px-4 pb-4 pt-3">
        <h5>{title}</h5>
        <p style={{ fontSize: "12px" }} className="text-muted">
          {description}
        </p>
        <div className="d-flex">
          <a href={github} style={styles} className="text-muted mr-2">
            Repositorio
          </a>
          <a href={link} style={styles} className="text-muted">
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}
