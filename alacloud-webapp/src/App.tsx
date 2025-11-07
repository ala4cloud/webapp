import { useEffect, useState } from "react";

import "./App.css";

function App() {
  type skills = { skillsName: string; field: string };

  const [users, setUsers] = useState<skills[]>([]);

  useEffect(() => {
    fetch(
      "https://alacloud-container-dev.blueground-04c6e195.francecentral.azurecontainerapps.io/"
    )
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <>
      <div>
        <h2>Skills</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.skillsName}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
