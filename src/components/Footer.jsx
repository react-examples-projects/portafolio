import { DiGithubBadge } from "react-icons/di";
import { Link } from "@geist-ui/core";
import Heart from "../resources/heart.png";
import styles from "../styles/footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <small className={styles.copyright}>
        Hecho con
        <img
          src={Heart}
          alt="Hecho con amor"
          className={styles.icon}
          width={15}
          height={15}
        />
        por
        <Link
          href="https://github.com/znareak"
          rel="noopener noreferrer"
          style={{ margin: "0 0 0 5px" }}
          target="_blank"
          color
        >
          @Libardo
        </Link>
      </small>

      <small className={styles.copyright}>
        <Link
          href="https://github.com/react-examples-projects/portafolio"
          rel="noopener noreferrer"
          className={styles.copyright}
          target="_blank"
          color
        >
          <DiGithubBadge className={styles.icon} style={{ fontSize: "1rem" }} />
          Repositorio
        </Link>
      </small>
    </footer>
  );
}