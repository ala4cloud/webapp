import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav>
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        About
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Projects
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Contact
      </NavLink>
    </nav>
  );
}
