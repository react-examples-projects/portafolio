import { memo, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiGithub,
  FiLinkedin,
  FiLink,
  FiChevronsLeft,
  FiAlignJustify,
} from "react-icons/fi";
import navlinks from "../Config/navlinks";
import css from "../Styles/App.module.scss";
import { useUserContext } from "../Context/UserContext";
import SocialLink from "./SocialLink";
import cs from "classnames";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const toggleNav = () => setOpen((c) => !c);
  const { deleteSession, user } = useUserContext();
  const ariaLabelToggleMenu = `${isOpen ? "Cerrar" : "Abrir"} menú`;

  return (
    <>
      <FiAlignJustify
        className="nav-icon nav-bars"
        onClick={toggleNav}
        aria-label={ariaLabelToggleMenu}
        role="button"
      />
      <nav
        role="menu"
        className={cs(css.nav, { "nav-closed": !isOpen })}
        aria-expanded={isOpen}
      >
        <FiChevronsLeft
          className="nav-icon nav-close"
          onClick={toggleNav}
          role="button"
          aria-label="Cerrar menú"
        />
        {navlinks.map(({ path, text }) => (
          <NavLink
            to={path}
            activeClassName={css.activeLink}
            key={path}
            role="menuitem"
            exact
          >
            {text}
          </NavLink>
        ))}

        {user._id && (
          <NavLink to="/" onClick={deleteSession} role="menuitem">
            Salir
          </NavLink>
        )}

        <div className={css.socials}>
          <SocialLink
            href="https://github.com/znareak"
            text={<FiGithub />}
            title="Mi perfil de github"
            aria-label="Mi perfil de github"
          />
          <SocialLink
            href="https://www.workana.com/freelancer/2e2ca9c851455cf42d2902131d07f967"
            text={<FiLink />}
            title="Mi perfil de workana"
            aria-label="Mi perfil de workana"
          />
          <SocialLink
            href="https://www.linkedin.com/in/libardo-rengifo-561a04187/"
            text={<FiLinkedin />}
            title="Mi perfil de linkedin"
            aria-label="Mi perfil de linkedin"
          />
        </div>
      </nav>
    </>
  );
}

export default memo(Navbar);
