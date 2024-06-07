import { useNavigate } from "react-router-dom";
import "./../Styles/Main.css";

export default function Skills() {
  const navigate = useNavigate();

  const HomeRedirect = () => {
    navigate("/");
  };

  return (
    <>
      <nav className="nav">
        <h5 className="navbar-text">Pheonix</h5>
      </nav>
      <br />
      <br />
      <br />
      <section className="skills">
        <div className="skills-section">
          <h2>Technical Skills:</h2>
          <br />
          <div className="skill-category">
            <h5>Applications:</h5>
            <ul className="skill-list">
              <li>• Microsoft Office Suite (Word, Excel, PowerPoint).</li>
              <li>• Google Workspace for collaborative projects.</li>
              <li>• Version control using GitHub.</li>
              <li>• Design and multimedia creation with Canva.</li>
              <li>• Online coding and collaboration through Replit.</li>
            </ul>
          </div>
          <div className="skill-category">
            <h5>Programming Languages & Frameworks:</h5>
            <ul className="skill-list">
              <li>
                • Front-end development: HTML, CSS, JavaScript, TypeScript,
                Bootstrap.
              </li>
              <li>• Back-end development: Node.js, Express.js.</li>
              <li>• Database management: MongoDB</li>
              <li>• Web application development with React.</li>
              <li>• Building efficient development environments with Vite.</li>
              <li>• Creating bots and automation tools using Discord.js.</li>
            </ul>
          </div>
        </div>
        <br />
        <img
          src="https://skillicons.dev/icons?i=html,css,js,ts,bootstrap&theme=dark&perline=5"
          alt="My Skills"
        />
        <br />
        <br />
        <img
          src="https://skillicons.dev/icons?i=mongodb,express,react,nodejs&theme=dark&perline=5"
          alt="My Skills"
        />
        <br />
        <br />
        <img
          src="https://skillicons.dev/icons?i=vite,discordjs&theme=dark&perline=5"
          alt="My Skills"
        />
        <br />
        <br />
        <button className="btn btn-light btn-sm" onClick={HomeRedirect}>
          <i className="bi bi-door-open-fill"></i> Go Back
        </button>
      </section>
    </>
  );
}
