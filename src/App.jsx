import "./styles/main.css";

export default function App() {
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
          aka Pheonix, a full-stack developer and student 👨‍💻 from India 🇮🇳.
          working remotely since 2021 🚀
        </h2>
      </section>
      <section className="skills">
        <h2>My Skills:</h2>
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
      </section>
      <section className="about">
        <h2>About Me:</h2>
        <br />
        
          <h5>Who i am?</h5>
          <p>
            • I'm Soumyajit, a young web developer with a zeal for innovation
            and problem-solving through technology. My coding journey began in
            childhood, leading me to the vibrant realm of web development.
          </p>
          <br />
          <h5>History:</h5>
          <p>
            • I dove into programming via Discord, crafting bots with
            discord.js, which sparked my interest in JavaScript. After
            developing bots like Trollbot and PowerGuardian, I shifted to web
            development, mastering the MERN stack and creating interactive
            websites.
          </p>
          <br />
          <h5>Experience:</h5>
          <p>
            • At 16 years old, currently pursuing my 10th-grade education, I may
            not have corporate experience, but I have ventured into application
            development, creating solutions like Phoenix Share.
          </p>
        
      </section>
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
            <i class="bi bi-github"></i> GitHub
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
            <i class="bi bi-github"></i> GitHub
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
            <i class="bi bi-github"></i> GitHub
          </a>
        </div>
      </section>
      <section className="social">
        <h2>Let's Connect:</h2>
        <br />
        <a
          className="btn btn-light btn-sm mx-2"
          href="https://github.com/Pheonix14"
        >
          <i class="bi bi-github"></i> GitHub
        </a>
        <a
          className="btn btn-info btn-sm"
          href="https://discord.com/users/674145228063768587"
        >
          <i class="bi bi-discord"></i> Discord
        </a>
        <br />
        <br />
        <a
          className="btn btn-primary btn-sm mx-2"
          href="https://x.com/Pheonix1416?s=09"
        >
          <i class="bi bi-twitter"></i> Twitter
        </a>
        <a className="btn btn-warning btn-sm" href="mailto:soumyajitdas07@outlook.com">
          <i class="bi bi-envelope-at-fill"></i> Email
        </a>
        <br />
        <br />
        <a
          className="btn btn-danger btn-sm"
          href="https://www.instagram.com/_impheonix_?igsh=ajdqcTIwb3Zrd2w3"
        >
          <i class="bi bi-instagram"></i> Instagram
        </a>
      </section>
      <footer className="footer">
        <p>© 2024 Pheonix. All rights reserved.</p>
      </footer>
    </>
  );
}
