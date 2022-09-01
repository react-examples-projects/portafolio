import { Button } from "@geist-ui/core";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import styles from "../styles/navbar.module.scss";
import useThemeContext from "../hooks/useThemeContext";

export default function Navbar() {
  const { currentTheme, toggle } = useThemeContext();
  const { t, i18n } = useTranslation(["navbar"]);
  const isDark = currentTheme === "dark";
  const lang = i18n.language === "es" ? "english" : "spanish"
  const themeLang = isDark
    ? i18n.language === "es"
      ? "claro"
      : "light"
    : i18n.language === "es"
    ? "oscuro"
    : "dark";

  const toggleLanguage = () => {
    if (i18n.language === "es") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("es");
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <h1 className={styles.headerTitle}>Libardo</h1>

        <div className={styles.headerMenu}>
          <Button
            type="abort"
            iconRight={isDark ? <FiMoon /> : <FiSun />}
            title={t("btnThemeTitle", { theme: themeLang })}
            aria-label={t("btnThemeTitle", { theme: themeLang })}
            onClick={toggle}
            auto
          />
          <Button
            type="abort"
            title={t("btnLanguageTitle", { lang})}
            aria-label={t("btnLanguageTitle", { lang})}
            onClick={toggleLanguage}
            auto
          >
            {i18n.language.toUpperCase()}
          </Button>
        </div>
      </div>
    </header>
  );
}
