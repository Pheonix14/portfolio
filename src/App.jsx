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
        <dl>
          <dt>Who i am?</dt>
          <dd>
• I'm Soumyajit, a young web developer with a zeal for innovation and problem-solving through technology. My coding journey began in childhood, leading me to the vibrant realm of web development.
          </dd>
          <br />
          <dt>History:</dt>
          <dd>
            • I dove into programming via Discord, crafting bots with discord.js, which sparked my interest in JavaScript. After developing bots like Trollbot and PowerGuardian, I shifted to web development, mastering the MERN stack and creating interactive websites.
          </dd>
          <br />
          <dt>Experience:</dt>
          <dd>
            • At 16 years old, currently pursuing my 10th-grade education, I may
            not have corporate experience, but I have ventured into application
            development, creating solutions like Phoenix Share.
          </dd>
        </dl>
      </section>
    </>
  );
}
