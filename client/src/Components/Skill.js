import React from "react";
import Img from "react-bootstrap/Image";

export default function Skill({ title, image, text }) {
  return (
    <div className="p-2 mb-3 text-center">
      <Img
        src={image}
        className="rounded-lg"
        style={{ maxHeight: "170px" }}
        fluid
      />
      <h4 className="mt-3">{title}</h4>
      <p style={{ fontSize: "15px" }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit
        sunt saepe quidem, deserunt fugit beatae est iure obcaecati aspernatur,
        id hic.
      </p>
    </div>
  );
}
