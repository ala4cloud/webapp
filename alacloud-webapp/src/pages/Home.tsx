import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

export default function Home() {
  return (
    <section>
      <h1>Ala Laribi</h1>
      <p>Platform Engineer & Software Developer </p>
      <a href="/projects" className="button">
        View My Work
      </a>
      <About />
      <Projects />
      <Contact />
    </section>
  );
}
