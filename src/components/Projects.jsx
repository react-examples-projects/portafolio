import styles from "../styles/projects.module.scss";
import projects from "../projects.json";
import Project from "./Project";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation(["projects"]);
  return (
    <section className={styles.projects}>
      <h3 className="text-gradient">{t("title")}</h3>
      <p>{t("subtitle")}</p>

      <div className={styles.projectList}>
        {projects.map((props) => (
          <Project {...props} key={props._id} />
        ))}
      </div>
    </section>
  );
}
