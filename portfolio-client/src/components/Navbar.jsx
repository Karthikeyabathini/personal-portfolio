import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Skills", "/skills"],
  ["Projects", "/projects"],
  ["Resume", "/resume"],
  ["Contact", "/contact"]
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="navbar">
      <Link className="logo" to="/" onClick={() => setOpen(false)}>
        K<span>.</span>
      </Link>
      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map(([label, path]) => (
          <NavLink key={path} to={path} onClick={() => setOpen(false)}>
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="nav-actions">
        <button className="icon-button" type="button" onClick={toggleTheme} aria-label="Toggle dark mode">
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
        <button className="icon-button mobile-only" type="button" onClick={() => setOpen((value) => !value)} aria-label="Menu">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
