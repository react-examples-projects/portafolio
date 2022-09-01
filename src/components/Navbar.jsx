import { Button } from "@geist-ui/core";
import { FiMoon, FiSun, FiMenu } from "react-icons/fi";
import styles from "../styles/navbar.module.scss";
import useThemeContext from "../hooks/useThemeContext";

export default function Navbar() {
  const { currentTheme, toggle } = useThemeContext();
  const isDark = currentTheme === "dark";

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
            iconRight={<FiMenu />}
            title="Abrir menú"
            aria-label="Abrir menú"
            auto
          />
        </div>
      </div>
    </header>
  );
}
