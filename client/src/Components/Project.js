import Badge from "react-bootstrap/Badge";
import ImagePlaceholder from "../Images/placeholder.png";
export default function Project({
  title,
  description,
  github,
  link,
  technologies = [],
  image,
}) {
  const styles = { fontSize: "12px" };
  return (
    <div
      className="bg-white shadow-sm h-100"
      style={{ borderRadius: "10px", maxHeight: "370px", overflowY: "auto" }}
    >
      <img
        src={image || ImagePlaceholder}
        alt="The project"
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

        <div className="d-flex mt-1">
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
