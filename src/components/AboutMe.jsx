import { Image, Button, Link } from "@geist-ui/core";
import { RiGithubLine, RiLinkedinFill, RiLink, RiFileList2Line } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import Atropos from "./Atropos";
import Profile from "../resources/profile.jpg";
import CV_ES from "../resources/cv_es.pdf";
import CV_EN from "../resources/cv_en.pdf";
import styles from "../styles/aboutme.module.scss";

const IMG_SIZE = 245;

export default function AboutMe() {
  const { t, i18n } = useTranslation(["aboutme"]);
  const cv_href = i18n.language === "es" ? CV_ES : CV_EN;

  return (
    <section className={styles.aboutMe}>
      <div className={styles.aboutContent}>
        <div className={styles.aboutBio}>
          <h2 className="title">Libardo Rengifo</h2>
          <p>{t("bio")}</p>

          <div className={styles.aboutSocial}>
            <Link href={cv_href} target="_blank" rel="noreferrer noopener">
              <button className={styles.default} >
                {t("cv")}
                <RiFileList2Line style={{marginLeft:6}}/>
              </button>
            </Link>
            <Link href="https://github.com/znareak" target="_blank" rel="noreferrer noopener">
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
              href="https://www.linkedin.com/in/libardorengifo/"
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

            <Link href="https://arc.dev/@libardo" target="_blank" rel="noreferrer noopener">
              <Button type="secondary" ghost iconRight={<RiLink />} className={styles.button} auto>
                Arc dev
              </Button>
            </Link>
          </div>
        </div>

        <Atropos className={styles.atroposProfileImage}>
          <Image
            width={IMG_SIZE + "px"}
            height={IMG_SIZE + "px"}
            alt={t("profile")}
            title={t("profile")}
            className={styles.profileImage}
            src={Profile}
          />
        </Atropos>
      </div>
    </section>
  );
}
