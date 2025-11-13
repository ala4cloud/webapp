import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <>
      <section className="homeSections">
        <h1>Ala Laribi</h1>
        <p className="mt-5 mb-6 text-[15px] leading-relaxed text-slate-800 dark:text-slate-200">
          I’m a .NET and React developer with over 7 years of experience
          building scalable, high-performance web applications. Over the years,
          I’ve worked across the full software lifecycle — from designing
          intuitive front-end interfaces to architecting robust backend
          services. Recently, my passion has evolved toward cloud infrastructure
          and DevOps engineering, where I focus on building reliable, automated,
          and containerized solutions that accelerate development and deployment
          cycles.
        </p>

        <NavLink
          target="_blank"
          rel="noopener noreferrer"
          to="https://www.linkedin.com/in/ala-laribi-baa76144/"
          className="button"
        >
          More
        </NavLink>
      </section>
      <section className="homeSections">
        <h1>The Project</h1>

        <p className="mt-5 mb-6 text-[15px] leading-relaxed text-slate-800 dark:text-slate-200">
          This website is a compact, cloud-native project that demonstrates
          end-to-end Azure infrastructure and DevOps automation. It includes a
          <strong>.NET API</strong> that reads from
          <strong>Azure Cosmos DB</strong>, a <strong>React</strong> frontend,
          and a modular <strong>Terraform </strong> app for Azure infrastructure
          provisioning automation. The API runs in
          <strong>Azure Container Apps</strong>, the frontend is served by
          <strong>Azure Static Web Apps</strong>, secrets are stored in
          <strong>Azure Key Vault</strong>, and deployments are automated with
          <strong>GitHub Actions</strong>. The code for all components is public
          on :{" "}
          <a
            href="https://github.com/orgs/ala4cloud/repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
        <NavLink to="/Project" className="button">
          More
        </NavLink>
      </section>
    </>
  );
}
