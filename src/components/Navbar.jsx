import { Button } from "@geist-ui/core";
import { FiMoon, FiSun, FiMenu } from "react-icons/fi";
import styles from "../styles/navbar.module.scss";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <h1 className={styles.headerTitle}>Libardo</h1>

        <div className={styles.headerMenu}>
          <Button type="abort" iconRight={<FiSun />} auto />
          <Button type="abort" iconRight={<FiMenu />} auto />
        </div>
      </div>
    </header>
  );
}
