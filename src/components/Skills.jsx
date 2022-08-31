import { Tag } from "@geist-ui/core";
import styles from "../styles/skills.module.scss";
export default function Skills() {
  return (
    <section className={styles.skills}>
      <h3 className="text-gradient">Habilidades</h3>
      
      <div className={styles.skillsList}>
        <Tag scale={1.5}>React</Tag>
        <Tag scale={1.5}>NodeJS</Tag>
        <Tag scale={1.5}>ExpressJS</Tag>
        <Tag scale={1.5}>Mongoose</Tag>
        <Tag scale={1.5}>SASS</Tag>
        <Tag scale={1.5}>Git/Github</Tag>
      </div>
    </section>
  );
}
