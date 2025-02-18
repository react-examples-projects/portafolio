import styles from "../styles/projects.module.scss";
import useProjects from "../hooks/useProjects";
import Project from "./Project";
import { Button, Select, Grid } from "@geist-ui/core";
import { useTranslation } from "react-i18next";
import usePagination from "../hooks/usePagination";
import styles2 from "../styles/aboutme.module.scss";

const FILTER_OPTIONS = [
  { label: "All", value: "all", translation: "alls" },
  { label: "Important", value: "importants", translation: "importants" },
  { label: "Casual", value: "casuals", translation: "casuals" },
  { label: "Practice", value: "practice", translation: "practices" },
];

export default function Projects() {
  const { t } = useTranslation(["projects"]);
  const { projects, filter, onFilter } = useProjects();
  const { nextPage, previousPage, data, pages, currentPage, ITEMS_PER_PAGE } = usePagination(projects);
  const IS_LOWEST_LENGTH_PROJECTS = projects.length < ITEMS_PER_PAGE;
  return (
    <section className={styles.projects}>
      <div className={styles.content}>
        <h3 className="text-gradient">{t("title")}</h3>
       
        <div className={styles.filter}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Select
              placeholder={t("filter")}
              value={filter}
              id="filter"
              onChange={onFilter}
              aria-label={t("filter")}
              className={styles.filterContainer}
            >
              {FILTER_OPTIONS.map((option) => (
                <Select.Option key={option.value} value={option.value}>
                  {t(option.translation)}
                  {filter === option.value && ` ( ${projects.length} ) ${currentPage}/${pages}`}
                </Select.Option>
              ))}
            </Select>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                onClick={previousPage}
                className={styles2.button}
                type="secondary"
                style={{ marginRight: "5px", lineHeight: 3 }}
                scale={0.5}
                aria-label={t("prev")}
                disabled={currentPage === 1 || IS_LOWEST_LENGTH_PROJECTS}
                ghost
                auto
              >
                &larr;
              </Button>
              <Button
                onClick={nextPage}
                className={styles2.button}
                type="secondary"
                style={{ lineHeight: 3 }}
                scale={0.5}
                aria-label={t("next")}
                disabled={currentPage === pages || IS_LOWEST_LENGTH_PROJECTS}
                ghost
                auto
              >
                &rarr;
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Grid.Container gap={2}>
        {data.map((props) => (
          <Grid xs={24} sm={24} md={12} lg={12} xl={12} key={props._id}>
            <Project {...props} />
          </Grid>
        ))}
      </Grid.Container>
    </section>
  );
}
