import { memo } from "react";
import { NavLink } from "react-router-dom";
import { FiGithub, FiFacebook, FiLinkedin } from "react-icons/fi";

import css from "../App.module.css";

function Navbar() {
  return (
    <nav role="navigation" className={css.nav}>
      <NavLink to="/" activeClassName="active-link">
        Sobre mí
      </NavLink>

      <NavLink to="/#" activeClassName="active-link">
        Proyectos
      </NavLink>

      <NavLink to="/#" activeClassName="active-link">
        Habilidades
      </NavLink>

      <NavLink to="/#" activeClassName="active-link">
        Contacto
      </NavLink>

      <div className={css.socials}>
        <a href="https://github.com/znareak" target="_blank" rel="noreferrer">
          <FiGithub />
        </a>

        <a href="https://facebook.com/" target="_blank" rel="noreferrer">
          <FiFacebook />
        </a>

        <a href="https://ve.linkedin.com/" target="_blank" rel="noreferrer">
          <FiLinkedin />
        </a>
      </div>
    </nav>
  );
}

export default memo(Navbar);
