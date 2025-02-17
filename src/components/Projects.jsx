import styles from "../styles/projects.module.scss";
import useProjects from "../hooks/useProjects";
import Project from "./Project";
import { Button, Select, Grid } from "@geist-ui/core";
import { useTranslation } from "react-i18next";
import usePagination from "../hooks/usePagination";
import styles2 from "../styles/aboutme.module.scss";

export default function Projects() {
  const { t } = useTranslation(["projects"]);
  const { projects, filter, onFilter } = useProjects();
  const { nextPage, previousPage, data, pages, currentPage, ITEMS_PER_PAGE } =
    usePagination(projects);

  return (
    <section className={styles.projects}>
      <div className={styles.content}>
        <p className={styles.subtitle}>{t("subtitle")}</p>

        <div className={styles.filter}>
          

          <div style={{ display: "flex", alignItems: "center", gap: "10px"}}>
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
            {projects.length > ITEMS_PER_PAGE && (
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
                  disabled={currentPage === 1}
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
                  disabled={currentPage === pages}
                  ghost
                  auto
                >
                  &rarr;
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Grid.Container gap={1.5}>
        {data.map((props) => (
          <Grid xs={24} sm={24} md={12} lg={12} xl={12} key={props._id}>
            <Project {...props} />
          </Grid>
        ))}
      </Grid.Container>

      {/* <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}>
        <Masonry gutter="12px" columnsCount={2} className={styles.column}>
          {data.map((props) => (
            <Project {...props} key={props._id} />
          ))}
        </Masonry>
      </ResponsiveMasonry> */}
    </section>
  );
}
