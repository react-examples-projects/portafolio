import styles from "../styles/projects.module.scss";
import useProjects from "../hooks/useProjects";
import Project from "./Project";
import { Select } from "@geist-ui/core";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation(["projects"]);
  const { projects, filter, onFilter } = useProjects();

  return (
    <section className={styles.projects}>
      <div className={styles.content}>
        <div>
          <h3 className="text-gradient">{t("title")}</h3>
          <p className={styles.subtitle}>{t("subtitle")}</p>
        </div>

        <div className={styles.filter}>
          <label htmlFor="filter" className={styles.label}>
            {t("filter")}
          </label>

          <Select
            placeholder={t("filter")}
            value={filter}
            id="filter"
            onChange={onFilter}
          >
            <Select.Option value="all">{t("alls")}</Select.Option>
            <Select.Option value="importants">{t("importants")}</Select.Option>
            <Select.Option value="casuals">{t("casuals")}</Select.Option>
            <Select.Option value="practice">{t("practices")}</Select.Option>
          </Select>
        </div>
      </div>

      <div className={styles.projectList}>
        {projects.map((props) => (
          <Project {...props} key={props._id} />
        ))}
      </div>
    </section>
  );
}
