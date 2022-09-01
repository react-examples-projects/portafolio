import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation(["contact"]);

  return (
    <section>
      <h3 className="text-gradient">{t("title")}</h3>
      <p>{t("subtitle")}</p>

      <code>libardojesusrengifo129@gmail.com</code>
    </section>
  );
}
