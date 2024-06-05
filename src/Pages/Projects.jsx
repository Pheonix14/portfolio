import { useNavigate } from "react-router-dom";
import './../Styles/Main.css';

export default function Skills() {
  const navigate = useNavigate();

  const HomeRedirect = () => {
    navigate("/");
  }
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
          <img src="/phoenix-share.png" alt="Logo" className="Logo" />
          <h2>Phoenix Share</h2>
          <p>
            Share your files like never before with Phoenix Share. Phoenix Share
            is an open source file sharing platform that combines the simplicity
            of Express.js with the speed and security of a phoenix.
          </p>
          <img
            alt="GitHub Repo stars"
            className="mx-2"
            src="https://img.shields.io/github/stars/Pheonix14/Phoenix-Share"
          />
          <img
            alt="GitHub forks"
            src="https://img.shields.io/github/forks/Pheonix14/Phoenix-Share"
          />
          <br />
          <a
            className="btn btn-light btn-sm mx-2"
            href="https://github.com/Pheonix14/Phoenix-Share"
          >
            <i className="bi bi-github"></i> GitHub
          </a>
        </div>
        <div className="projects-card">
          <img src="/ip-lookup.png" alt="Logo" className="Logo" />
          <h2>IP Lookup</h2>
          <p>
            Command-line tool provides detailed information about a specific IP
            address.
          </p>
          <img
            alt="GitHub Repo stars"
            className="mx-2"
            src="https://img.shields.io/github/stars/Pheonix14/IP-Lookup"
          />
          <img
            alt="GitHub forks"
            src="https://img.shields.io/github/forks/Pheonix14/IP-Lookup"
          />
          <br />
          <a
            className="btn btn-light btn-sm mx-2"
            href="https://github.com/Pheonix14/IP-Lookup"
          >
            <i className="bi bi-github"></i> GitHub
          </a>
        </div>
        <div className="projects-card">
          <img src="/pyroquanta.png" alt="Logo" className="Logo" />
          <h2>PyroQuanta</h2>
          <p>
            PyroQuanta is an AI-based open source discord bot powered by
            Google's Gemini Pro model.
          </p>
          <img
            alt="GitHub Repo stars"
            className="mx-2"
            src="https://img.shields.io/github/stars/Pheonix14/PyroQuanta"
          />
          <img
            alt="GitHub forks"
            src="https://img.shields.io/github/forks/Pheonix14/PyroQuanta"
          />
          <br />
          <a
            className="btn btn-light btn-sm mx-2"
            href="https://github.com/Pheonix14/PyroQuanta"
          >
            <i className="bi bi-github"></i> GitHub
          </a>
        </div>
  <br/>
  <br/>
<button className="btn btn-light btn-sm" onClick={HomeRedirect}><i className="bi bi-door-open-fill"></i> Go Back</button>
      </section>
      </>
    );
  
}