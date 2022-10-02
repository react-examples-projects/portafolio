import { Image, Button, Link } from "@geist-ui/core";
import {
  RiGithubLine,
  RiLinkedinFill,
  RiLink,
  RiFileList2Line,
} from "react-icons/ri";
import { useTranslation } from "react-i18next";
import Profile from "../resources/profile.webp";
import CV from "../resources/cv.pdf";
import styles from "../styles/aboutme.module.scss";

export default function AboutMe() {
  const { t } = useTranslation(["aboutme"]);

  return (
    <section className={styles.aboutMe}>
      <div className={styles.aboutContent}>
        <div className={styles.aboutBio}>
          <h2 className="text-gradient">{t("greeting")}</h2>
          <p>{t("bio")}</p>
        </div>

        <Image
          width="200px"
          height="200px"
          alt={t("profile")}
          title={t("profile")}
          className={styles.profileImage}
          src={Profile}
        />
      </div>

      <div className={styles.aboutSocial}>
        <Link href={CV} target="_blank" rel="noreferrer noopener">
          <Button iconRight={<RiFileList2Line />} type="success-light" auto>
            {t("cv")}
          </Button>
        </Link>
        <Link
          href="https://github.com/znareak"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Button
            type="secondary"
            ghost
            iconRight={<RiGithubLine />}
            className={styles.button}
            auto
          >
            Github
          </Button>
        </Link>

        <Link
          href="https://www.linkedin.com/in/libardo-rengifo-561a04187/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Button
            type="secondary"
            ghost
            iconRight={<RiLinkedinFill />}
            className={styles.button}
            auto
          >
            Linkedin
          </Button>
        </Link>

        <Link
          href="https://arc.dev/@libardo"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Button
            type="secondary"
            ghost
            iconRight={<RiLink />}
            className={styles.button}
            auto
          >
            Arc dev
          </Button>
        </Link>
      </div>
    </section>
  );
}
