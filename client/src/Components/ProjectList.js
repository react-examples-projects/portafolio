import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Project from "./Project";
import ProjectsLoader from "./Loaders/ProjectsLoader";

export default function ProjectList({ projects, isLoading, setProjects }) {
  if (isLoading) return <ProjectsLoader />;

  return (
    <Row role="list">
      {projects?.map((project) => {
        return (
          <Col
            sm={12}
            md={6}
            lg={4}
            className="mb-3 px-2 w-100"
            key={project._id}
          >
            <Project {...project} key={project._id} setProjects={setProjects} />
          </Col>
        );
      })}
    </Row>
  );
}
