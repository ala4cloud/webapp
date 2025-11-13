import "./project.css";
export default function Project() {
  return (
    <section className="project-card">
      <h1>The Project</h1>

      <h2>Overview</h2>
      <p>
        This project (alalaribi.cloud) is a cloud-native demo project designed
        to demonstrate end-to-end deployment and automation practices across
        Azure using modern DevOps principles. It integrates
        <strong>.NET APIs</strong>, <strong>React frontend</strong>,
        <strong>Terraform-based infrastructure provisioning</strong>, and
        <strong>CI/CD pipelines</strong> powered by
        <strong>GitHub Actions</strong>. <br />
        Code Source available on :{" "}
        <a
          href="https://github.com/orgs/ala4cloud/repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>

      <h2>🌐 Architecture Summary</h2>

      <h3>Infrastructure as Code (Terraform)</h3>
      <ul>
        <li>
          All Azure resources provisioned and managed using Terraform (Cosmos
          DB, Container Apps, Key Vault, Networking).
        </li>
        <li>
          Enables reproducible, version-controlled, and environment-separated
          deployments (dev/prod).
        </li>
        <li>
          Uses remote state management for team collaboration and consistency.
        </li>
      </ul>

      <h3>Backend (.NET Core API)</h3>
      <ul>
        <li>Exposes RESTful endpoints that fetch data from Azure Cosmos DB.</li>
        <li>
          Secured access using credentials and secrets stored in Azure Key
          Vault.
        </li>
        <li>
          Packaged as a Docker container and deployed to Azure Container Apps
          for scalability and efficiency.
        </li>
        <li>
          CI/CD configured through GitHub Actions for automated builds and
          deployments.
        </li>
      </ul>

      <h3>Frontend (React App)</h3>
      <ul>
        <li>A responsive React-based web interface consuming the .NET API.</li>
        <li>
          Hosted on Azure Static Web Apps for global distribution and
          performance optimization.
        </li>
        <li>
          CI/CD configured through GitHub Actions for automated builds and
          deployments.
        </li>
      </ul>

      <h2>⚙️ DevOps & Cloud Practices Demonstrated</h2>
      <ul>
        <li>
          <strong>Infrastructure as Code (IaC):</strong> Full Azure environment
          automated via Terraform.
        </li>
        <li>
          <strong>Containerization:</strong> API deployed as a container image
          for consistency.
        </li>
        <li>
          <strong>CI/CD Automation:</strong> GitHub Actions pipelines for
          backend and frontend.
        </li>
        <li>
          <strong>Cloud Security:</strong> Azure Key Vault for secrets and
          credentials.
        </li>
        <li>
          <strong>Scalability & Maintainability:</strong> Modular design for
          flexibility and reliability.
        </li>
      </ul>
      <p>
        <br />
        <a
          href="https://github.com/orgs/ala4cloud/repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          GitHub source code
        </a>
      </p>
    </section>
  );
}
