import { Image, Button, Link } from "@geist-ui/core";
import {
  RiGithubLine,
  RiLinkedinFill,
  RiLink,
  RiFileList2Line,
} from "react-icons/ri";
import Profile from "../resources/profile.webp";
import CV from "../resources/cv.pdf";
import styles from "../styles/aboutme.module.scss";

export default function AboutMe() {
  return (
    <section className={styles.aboutMe}>
      <div className={styles.aboutContent}>
        <div className={styles.aboutBio}>
          <h2 className="text-gradient">Hola, que tal!</h2>
          <p>
            Desarrollador web junior en <strong>ReactJS</strong>,
            <strong>NodeJS</strong> y <strong>SASS</strong> en constante estudio
            y crecimiento integral en el ámbito laboral. Dispuesto a trabajar en
            ambientes grupales donde el trabajo en grupo y la comunicación es
            crucial.
          </p>
        </div>

        <Image
          width="180px"
          height="180px"
          alt="Mi foto de perfil"
          title="Mi foto de perfil"
          className={styles.profileImage}
          src={Profile}
        />
      </div>
      <div className={styles.aboutSocial}>
        <Link
          href={CV}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Button
            iconRight={<RiFileList2Line />}
            type="success-light"
            ghost
            auto
          >
            Ver curriculum
          </Button>
        </Link>
        <Link
          href="https://github.com/znareak"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Button iconRight={<RiGithubLine />} auto>
            Github
          </Button>
        </Link>

        <Link
          href="https://www.linkedin.com/in/libardo-rengifo-561a04187/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Button iconRight={<RiLinkedinFill />} auto>
            Likedin
          </Button>
        </Link>

        <Link
          href="https://arc.dev/@libardo"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Button iconRight={<RiLink />} auto>
            Arc dev
          </Button>
        </Link>
      </div>
    </section>
  );
}
