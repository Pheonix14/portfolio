import "./Styles/Main.css";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  const ProjectRedirect = () => {
    navigate("/projects");
  };
  const SkillsRedirect = () => {
    navigate("/skills");
  };

  return (
    <>
      <nav className="nav">
        <h5 className="navbar-text">Pheonix</h5>
      </nav>
      <br />
      <br />
      <br />
      <section className="hero">
        <h1>Hey 👋, I'm Soumyajit</h1>
        <h2>
          aka Pheonix, a full-stack developer 👨‍💻 from Kolkata, India 🇮🇳. working
          remotely since 2021 🚀
        </h2>
        <br />
        <br /> 
        <button className="btn btn-danger btn-sm mx-2" onClick={ProjectRedirect}>
          <i className="bi bi-journals"></i> My Projects
        </button>
        <button className="btn btn-success btn-sm" onClick={SkillsRedirect}>
          <i className="bi bi-tools"></i> My Skills
        </button>
      </section>
      <section className="about">
        <h2>About Me:</h2>
        <br />

        <h5>Who i am?</h5>
        <p>
          • I'm Soumyajit, a young web developer with a zeal for innovation and
          problem-solving through technology. My coding journey began in
          childhood, leading me to the vibrant realm of web development.
        </p>
        <br />
        <h5>History:</h5>
        <p>
          • I dove into programming via Discord, crafting bots with discord.js,
          which sparked my interest in JavaScript. After developing bots like
          Trollbot and PowerGuardian, I shifted to web development, mastering
          the MERN stack and creating interactive websites.
        </p>
        <br />
        <h5>Experience:</h5>
        <p>
          • At 16 years old, currently pursuing my 10th-grade education, I may
          not have corporate experience, but I have ventured into application
          development, creating solutions like Phoenix Share.
        </p>
      </section>
      <section className="social">
        <h2>Let's Connect:</h2>
        <br />
        <a
          className="btn btn-light btn-sm mx-2"
          href="https://github.com/Pheonix14"
        >
          <i className="bi bi-github"></i> GitHub
        </a>
        <a
          className="btn btn-info btn-sm"
          href="https://discord.com/users/674145228063768587"
        >
          <i className="bi bi-discord"></i> Discord
        </a>
        <br />
        <br />
        <a
          className="btn btn-primary btn-sm mx-2"
          href="https://x.com/Pheonix1416?s=09"
        >
          <i className="bi bi-twitter"></i> Twitter
        </a>
        <a
          className="btn btn-warning btn-sm"
          href="mailto:soumyajitdas07@outlook.com"
        >
          <i className="bi bi-envelope-at-fill"></i> Email
        </a>
        <br />
        <br />
        <a
          className="btn btn-danger btn-sm"
          href="https://www.instagram.com/_impheonix_?igsh=ajdqcTIwb3Zrd2w3"
        >
          <i className="bi bi-instagram"></i> Instagram
        </a>
      </section>
    </>
  );
}
