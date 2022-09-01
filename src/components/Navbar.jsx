import { Button } from "@geist-ui/core";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import styles from "../styles/navbar.module.scss";
import useThemeContext from "../hooks/useThemeContext";

export default function Navbar() {
  const { currentTheme, toggle } = useThemeContext();
  const { i18n } = useTranslation();
  const isDark = currentTheme === "dark";
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
            title={`Cambiar a modo ${isDark ? "claro" : "oscuro"}`}
            aria-label={`Cambiar a modo ${isDark ? "claro" : "oscuro"}`}
            onClick={toggle}
            auto
          />
          <Button
            type="abort"
            title="Abrir menú"
            aria-label="Abrir menú"
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
