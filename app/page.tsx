export default function Home() {
  return (
    <main>
      <nav aria-label="Main navigation">
        <a className="name" href="#top">
          Alex Carter
        </a>
        <div className="navLinks">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="intro" id="top" aria-labelledby="intro-title">
        <p className="label">Hello, I&apos;m Alex.</p>
        <h1 id="intro-title">Product designer and front-end developer.</h1>
        <p className="introText">
          I design useful digital products and build clear, responsive
          websites.
        </p>
        <a className="textLink" href="#projects">
          View my projects <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section id="projects" aria-labelledby="projects-title">
        <div className="sectionHeading">
          <p className="label">01</p>
          <h2 id="projects-title">Projects</h2>
        </div>

        <div className="emptyProjects">
          <p>Projects coming soon.</p>
          <span>I&apos;ll add selected work here.</span>
        </div>
      </section>

      <section id="about" aria-labelledby="about-title">
        <div className="sectionHeading">
          <p className="label">02</p>
          <h2 id="about-title">About</h2>
        </div>
        <div className="sectionContent">
          <p>
            I enjoy turning complex ideas into simple, easy-to-use experiences.
            My work covers product design, websites, and front-end development.
          </p>
          <ul aria-label="Skills">
            <li>Product design</li>
            <li>Web design</li>
            <li>Front-end development</li>
          </ul>
        </div>
      </section>

      <section id="contact" aria-labelledby="contact-title">
        <div className="sectionHeading">
          <p className="label">03</p>
          <h2 id="contact-title">Contact</h2>
        </div>
        <div className="sectionContent">
          <p>Have a project in mind? Feel free to get in touch.</p>
          <a className="email" href="mailto:hello@alexcarter.dev">
            hello@alexcarter.dev
          </a>
        </div>
      </section>

      <footer>
        <p>© 2026 Alex Carter</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
