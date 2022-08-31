import { Link, Tag } from "@geist-ui/core";
import styles from "../styles/projects.module.scss";
import projects from "../projects.json";

export default function Projects() {
  return (
    <section className={styles.projects}>
      <h3 className="text-gradient">Proyectos</h3>
      <p>He aqui algunos de mis proyectos favoritos que he trabajo</p>

      <div className={styles.projectList}>
        {projects.map(
          ({ _id, technologies, title, description, github, link }) => (
            <article className={styles.project} key={_id}>
              <Link href={link} target="_blank" rel="noreferrer noopener">
                <h3>{title}</h3>
              </Link>

              <p>{description}</p>
              <div className={styles.technologies}>
                {technologies.map((tech) => (
                  <Tag scale={0.6}>{tech}</Tag>
                ))}
                {/* <Link href={github} className={styles.link} target="_blank" rel="noreferrer noopener">
                  {github}
                </Link> */}
              </div>
            </article>
          )
        )}
      </div>
    </section>
  );
}
