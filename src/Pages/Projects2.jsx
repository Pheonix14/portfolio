import { useNavigate } from "react-router-dom";
import "./../Styles/Main.css";

export default function Skills() {
  const navigate = useNavigate();

  const HomeRedirect = () => {
    navigate("/");
  };
  const PreviousRedirect = () => {
    navigate("/projects");
  };

  return (
    <>
      <nav className="nav">
        <h5 className="navbar-text">Pheonix</h5>
      </nav>
      <br />
      <br />
      <br />
      <section className="projects">
        <h2>Projects:</h2>
        <br />
        <div className="projects-card">
          <img src="/phoenix-xshare.png" alt="Logo" className="Logo" />
          <h2>Phoenix XShare</h2>
          <p>
            Phoenix XShare is a private upload server of Phoenix Share, a web
            application that allows users to upload and share files easily and
            securely.
          </p>
          <img
            alt="GitHub Repo stars"
            className="mx-2"
            src="https://img.shields.io/github/stars/Pheonix14/Phoenix-XShare"
          />
          <img
            alt="GitHub forks"
            src="https://img.shields.io/github/forks/Pheonix14/Phoenix-XShare"
          />
          <br />
          <a
            className="btn btn-light btn-sm mx-2"
            href="https://github.com/Pheonix14/Phoenix-XShare"
          >
            <i className="bi bi-github"></i> GitHub
          </a>
        </div>
        <div className="projects-card">
          <img src="/Trollbot.png" alt="Logo" className="Logo" />
          <h2>TrollBot</h2>
          <p>A Discord Economy Game Bot.</p>
          <img
            alt="GitHub Repo stars"
            className="mx-2"
            src="https://img.shields.io/github/stars/Pheonix14/TrollBot"
          />
          <img
            alt="GitHub forks"
            src="https://img.shields.io/github/forks/Pheonix14/TrollBot"
          />
          <br />
          <a
            className="btn btn-light btn-sm mx-2"
            href="https://github.com/Pheonix14/TrollBot"
          >
            <i className="bi bi-github"></i> GitHub
          </a>
        </div>
        <br />
        <br />
        <button className="btn btn-light btn-sm" onClick={HomeRedirect}>
          <i className="bi bi-door-open-fill"></i> Go Back
        </button>
        <br />
        <button className="btn btn-light btn-sm" onClick={PreviousRedirect}>
          <i className="bi bi-arrow-bar-left"></i>Previous
        </button>
      </section>
    </>
  );
}
