import { memo, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiGithub,
  FiFacebook,
  FiLinkedin,
  FiChevronsLeft,
  FiAlignJustify,
} from "react-icons/fi";
import navlinks from "../Config/navlinks";
import css from "../Styles/App.module.scss";
import { useUserContext } from "../Context/UserContext";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const toggleNav = () => setOpen((c) => !c);
  const { deleteSession, user } = useUserContext();
  return (
    <>
      <FiAlignJustify className="nav-icon nav-bars" onClick={toggleNav} />
      <nav
        role="navigation"
        className={`${css.nav}${!isOpen ? " nav-closed" : ""}`}
      >
        <FiChevronsLeft className="nav-icon nav-close" onClick={toggleNav} />
        {navlinks.map(({ path, text }) => (
          <NavLink to={path} activeClassName={css.activeLink} key={path} exact>
            {text}
          </NavLink>
        ))}
        
        {user._id && (
          <NavLink to="/" onClick={deleteSession}>
            Salir
          </NavLink>
        )}

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
