import styles from "../styles/projects.module.scss";
import { Link, Tag } from "@geist-ui/core";

export default function Project({
  _id,
  technologies,
  title,
  description,
  github,
  link,
}) {
  return (
    <article className={styles.project} key={_id}>
      <Link href={link} target="_blank" rel="noreferrer noopener">
        <h3>{title}</h3>
      </Link>

      <p>{description}</p>
      <div className={styles.technologies}>
        {technologies.map((tech) => (
          <Tag scale={0.6} key={tech}>
            {tech}
          </Tag>
        ))}
      </div>

      <div style={{ marginTop: "0.5rem" }}>
        {github && (
          <Link href={github} target="_blank" rel="noreferrer noopener" color>
            <small>Github</small>
          </Link>
        )}
        {link && (
          <Link
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            style={{ marginLeft: github ? "1rem" : "0" }}
            color
          >
            <small>Ver en linea</small>
          </Link>
        )}
      </div>
    </article>
  );
}
