import { Tag } from "@geist-ui/core";
import { useTranslation } from "react-i18next";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiSass,
  SiMongodb,
  SiGithub,
} from "react-icons/si";
import styles from "../styles/skills.module.scss";

export default function Skills() {
  const { t } = useTranslation(["skills"]);
  const css = {
    tag: { display: "flex", alignItems: "center" },
    icon: { marginRight: "0.5rem" },
  };
  
  return (
    <section className={styles.skills}>
      <h3 className="text-gradient">{t("title")}</h3>

      <div className={styles.skillsList}>
        <Tag scale={1.5} style={css.tag}>
          <SiReact style={css.icon} />
          React
        </Tag>
        <Tag scale={1.5} style={css.tag}>
          <SiNodedotjs style={css.icon} />
          NodeJS
        </Tag>
        <Tag scale={1.5} style={css.tag}>
          <SiExpress style={css.icon} />
          ExpressJS
        </Tag>
        <Tag scale={1.5} style={css.tag}>
          <SiMongodb style={css.icon} />
          Mongoose
        </Tag>
        <Tag scale={1.5} style={css.tag}>
          <SiSass style={css.icon} />
          SASS
        </Tag>
        <Tag scale={1.5} style={css.tag}>
          <SiGithub style={css.icon} />
          Git/Github
        </Tag>
      </div>
    </section>
  );
}
