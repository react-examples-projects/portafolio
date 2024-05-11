import { useTranslation } from "react-i18next";
import { Link } from "@geist-ui/core";
import styles from "../styles/contact.module.scss"
export default function Contact() {
  const { t } = useTranslation(["contact"]);

  return (
    <section>
      <h3 className="text-gradient">{t("title")}</h3>
      <p>{t("subtitle")}</p>

      <code className={styles.contact}>
        <Link href="mailto:libardojesusrengifo129@gmail.com">libardojesusrengifo129@gmail.com</Link>
      </code>
    </section>
  );
}
