import styles from "../styles/projects.module.scss";
import projects from "../projects.json";
import Project from "./Project";

export default function Projects() {
  return (
    <section className={styles.projects}>
      <h3 className="text-gradient">Proyectos</h3>
      <p>He aqui algunos de mis proyectos favoritos que he trabajo</p>

      <div className={styles.projectList}>
        {projects.map((props) => (
          <Project {...props} key={props._id} />
        ))}
      </div>
    </section>
  );
}
