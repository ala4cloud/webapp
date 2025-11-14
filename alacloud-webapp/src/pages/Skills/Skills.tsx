import { useEffect, useState } from "react";
import "./skills.css";
export default function Skills() {
  type skills = { skillsName: string; field: string };

  const [users, setUsers] = useState<skills[]>([]);

  useEffect(() => {
    fetch(
      "https://alacloud-container-api-dev.salmonriver-ae2db3d5.francecentral.azurecontainerapps.io/"
    )
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <section className="skillsSections">
      <h1>Skills</h1>
      <div className="skillsSectionsContent">
        <div>
          <h2>Cloud</h2>
          <ul>
            {users
              .filter((user) => user.field === "cloud")
              .map((user, index) => (
                <li key={index}>{user.skillsName}</li>
              ))}
          </ul>
        </div>
        <div>
          <h2>Software</h2>
          <ul>
            {users
              .filter((user) => user.field === "software")
              .map((user, index) => (
                <li key={index}>{user.skillsName}</li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
