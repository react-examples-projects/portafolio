import styles from "../styles/projects.module.scss";
import useProjects from "../hooks/useProjects";
import Project from "./Project";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Select } from "@geist-ui/core";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function Projects() {
  const { t } = useTranslation(["projects"]);
  const { projects, filter, onFilter } = useProjects();

  useEffect(() => {
    const parent = document.getElementById("filter");
    const select = parent.querySelector("input[type='search']");
    select.setAttribute("aria-label", t("filter"));
  }, [t]);

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
            aria-label={t("filter")}
            className={styles.filterContainer}
          >
            <Select.Option value="all">{t("alls")}</Select.Option>
            <Select.Option value="importants">{t("importants")}</Select.Option>
            <Select.Option value="casuals">{t("casuals")}</Select.Option>
            <Select.Option value="practice">{t("practices")}</Select.Option>
          </Select>
        </div>
      </div>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }} >
        <Masonry gutter="12px" columnsCount={2} className={styles.column}>
          {projects.map((props) => (
            <Project {...props} key={props._id} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </section>
  );
}
