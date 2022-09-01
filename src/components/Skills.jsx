import { Tag } from "@geist-ui/core";
import styles from "../styles/skills.module.scss";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation(["skills"]);

  return (
    <section className={styles.skills}>
      <h3 className="text-gradient">{t("title")}</h3>

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
