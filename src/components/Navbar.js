import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar({ darkMode, setDarkMode, links = [], extraButtons = null }) {
  const navigate = useNavigate();

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: darkMode ? "#1e293b" : "#ffffff" }}
    >
      <style>{`
        .navbar-nav .nav-link { color: ${darkMode ? "#e2e8f0" : "#373737"}; }
        .navbar-nav .nav-link:hover { color: ${darkMode ? "#ffffff" : "black"}; font-weight: 700; }
      `}</style>
      <div className="container-fluid px-4">
        <Logo />
        <ul className="navbar-nav ms-auto gap-4 align-items-center">
          {links.map((link) => (
            <li className="nav-item" key={link.label}>
              <span
                className="nav-link"
                onClick={() => link.path && navigate(link.path)}
                style={{ cursor: link.path ? "pointer" : "default" }}
              >
                {link.label}
              </span>
            </li>
          ))}
          {extraButtons}
          <li className="nav-item">
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </li>
        </ul>
      </div>
    </nav>
  );
}