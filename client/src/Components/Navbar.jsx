import { memo, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiGithub,
  FiFacebook,
  FiLinkedin,
  FiChevronsLeft,
  FiAlignJustify,
} from "react-icons/fi";

import css from "../Styles/App.module.scss";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const toggleNav = () => setOpen((c) => !c);

  return (
    <>
      <FiAlignJustify className="nav-icon nav-bars" onClick={toggleNav} />
      <nav
        role="navigation"
        className={`${css.nav}${!isOpen ? " nav-closed" : ""}`}
      >
        <FiChevronsLeft className="nav-icon nav-close" onClick={toggleNav} />

        <NavLink to="/" activeClassName="active-link">
          Sobre mí
        </NavLink>

        <NavLink to="/#" activeClassName="active-link">
          Proyectos
        </NavLink>

        <NavLink to="/#" activeClassName="active-link">
          Habilidades
        </NavLink>

        <NavLink to="/contacto" activeClassName="active-link">
          Contacto
        </NavLink>

        <NavLink to="/login" activeClassName="active-link">
          Login
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
    </>
  );
}

export default memo(Navbar);
