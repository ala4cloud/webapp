import { NavLink } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

export default function Home() {
  return (
    <section>
      <h1>Ala Laribi</h1>
      <p>Platform Engineer & Software Developer </p>
      <NavLink to="/contact" className="button">
        View My Work
      </NavLink>
      <About />
      <Projects />
      <Contact />
    </section>
  );
}
