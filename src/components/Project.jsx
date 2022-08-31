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

      {github && (
        <Link
          href={github}
          target="_blank"
          rel="noreferrer noopener"
          style={{ marginTop: "0.5rem" }}
          color
        >
          <small>Github</small>
        </Link>
      )}
    </article>
  );
}
