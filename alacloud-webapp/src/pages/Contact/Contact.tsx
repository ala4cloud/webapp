import "./contact.css";
export default function Contact() {
  return (
    <section className="contactSections">
      <h1>Contact</h1>
      <ul>
        <li>
          LinkedIn :{" "}
          <a
            href="https://www.linkedin.com/in/ala-laribi-baa76144/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/ala-laribi
          </a>
        </li>
        <li>
          GitHub :{" "}
          <a
            href="https://github.com/orgs/ala4cloud/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/orgs/ala4cloud/
          </a>
        </li>

        <li>e-Mail : alaalaaribi@gmail.com</li>
      </ul>
      <p>
        <a href="mailto:alaalaaribi@gmail.com" className="button">
          Get In Touch
        </a>
      </p>
    </section>
  );
}
