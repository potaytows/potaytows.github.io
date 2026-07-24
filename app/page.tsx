const projects = [
  {
    number: "01",
    title: "Northline Finance",
    type: "Product design · Front-end",
    description:
      "A calmer way for small teams to understand cash flow, invoices, and the decisions that matter next.",
    accent: "violet",
  },
  {
    number: "02",
    title: "Field Notes",
    type: "Brand system · Web design",
    description:
      "A digital home for an independent journal, built around generous typography and focused reading.",
    accent: "orange",
  },
  {
    number: "03",
    title: "Morrow Studio",
    type: "Creative direction · Development",
    description:
      "A flexible portfolio for a small architecture practice where each project gets room to breathe.",
    accent: "blue",
  },
];

export default function Home() {
  return (
    <main id="top">
      <nav className="nav" aria-label="Main navigation">
        <a className="logo" href="#top" aria-label="Alex Carter, home">
          AC<span>.</span>
        </a>
        <div className="navLinks">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a className="navCta" href="mailto:hello@alexcarter.dev">
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>

      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow">
          <span className="statusDot" aria-hidden="true" />
          Available for select projects · 2026
        </p>
        <h1 id="hero-title">
          I design digital
          <br />
          experiences that
          <br />
          <em>feel effortless.</em>
        </h1>
        <div className="heroBottom">
          <p>
            I&apos;m Alex, an independent product designer and front-end
            developer helping thoughtful teams turn ambitious ideas into clear,
            useful products.
          </p>
          <a className="circleLink" href="#work" aria-label="View selected work">
            <span>Explore</span>
            <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="heroOrb" aria-hidden="true">
          <div className="orbCore" />
        </div>
      </section>

      <section className="work section" id="work" aria-labelledby="work-title">
        <header className="sectionHeader">
          <p className="sectionLabel">Selected work</p>
          <h2 id="work-title">A few things I&apos;ve made.</h2>
        </header>

        <div className="projectGrid">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div className={`projectVisual ${project.accent}`}>
                <span className="projectNumber">{project.number}</span>
                <div className="projectWindow" aria-hidden="true">
                  <div className="windowBar">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="windowContent">
                    <i />
                    <b />
                    <b />
                    <b />
                  </div>
                </div>
              </div>
              <div className="projectMeta">
                <div>
                  <p>{project.type}</p>
                  <h3>{project.title}</h3>
                </div>
                <span className="projectArrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <p className="projectDescription">{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="about" aria-labelledby="about-title">
        <p className="sectionLabel light">A little about me</p>
        <div className="aboutGrid">
          <h2 id="about-title">
            Good design is clear,
            <br />
            curious, and <em>human.</em>
          </h2>
          <div className="aboutCopy">
            <p>
              For the past eight years, I&apos;ve worked across product,
              identity, and code—often all three at once. I like getting close to
              the problem, finding the simplest useful idea, and shaping every
              detail until it feels inevitable.
            </p>
            <p>
              When I&apos;m not at my desk, you&apos;ll find me on a long walk
              with a camera, making coffee too slowly, or collecting books I
              promise I&apos;ll read.
            </p>
            <div className="skills" aria-label="Areas of expertise">
              <span>Product design</span>
              <span>Creative direction</span>
              <span>Front-end development</span>
              <span>Design systems</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" aria-labelledby="contact-title">
        <p className="sectionLabel">Start a conversation</p>
        <h2 id="contact-title">
          Have a good idea?
          <br />
          <em>Let&apos;s make it real.</em>
        </h2>
        <a className="emailLink" href="mailto:hello@alexcarter.dev">
          hello@alexcarter.dev <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer>
        <a className="logo footerLogo" href="#top" aria-label="Back to top">
          AC<span>.</span>
        </a>
        <p>Independent designer &amp; developer</p>
        <p>© 2026 · Built with care</p>
      </footer>
    </main>
  );
}
