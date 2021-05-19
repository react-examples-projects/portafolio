import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Project from "./Project";
import ProjectsLoader from "./Loaders/ProjectsLoader";

export default function ProjectList({ projects, isLoading, setProjects }) {
  if (isLoading) return <ProjectsLoader />;

  return (
    <Row className="justify-content-stretch">
      {projects?.map((project) => {
        return (
          <Col md={6} lg={4} className="mb-3 px-2" key={project._id}>
            <Project {...project} key={project._id} setProjects={setProjects}/>
          </Col>
        );
      })}
    </Row>
  );
}
