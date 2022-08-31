import { Button } from "@geist-ui/core";
import { FiMoon, FiSun, FiMenu } from "react-icons/fi";
import styles from "../styles/navbar.module.scss";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <h1 className={styles.headerTitle}>Libardo</h1>

        <div className={styles.headerMenu}>
          <Button
            type="abort"
            iconRight={<FiSun />}
            title="Cambiar a modo oscuro"
            aria-label="Cambiar a modo oscuro"
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
