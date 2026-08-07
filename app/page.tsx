export default function Home() {
  return (
    <main>
      <nav aria-label="Main navigation">
        <a className="name" href="#top">
          Takachi Yakinuma
        </a>
        <div className="navLinks">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a className="navOptional" href="/side-projects">
            Side projects
          </a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="intro" id="top" aria-labelledby="intro-title">
        <p className="label">Hello, I&apos;m Takachi.</p>
        <h1 id="intro-title">
          Frontend developer building enterprise and AI-powered products.
        </h1>
        <p className="introText">
          I build responsive, maintainable web applications with React,
          Next.js, TypeScript, and modern full-stack technologies.
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

        <div className="projectContent">
          <div className="projectList">
            <article className="projectCard">
            <img
              src="/projects/pea-dmms-dashboard.jpg"
              alt="PEA DMMS renewable energy monitoring dashboard"
            />
            <div className="projectDetails">
              <p className="projectType">Enterprise web application</p>
              <h3>PEA DMMS</h3>
              <p>
                A bilingual digital management and monitoring system for
                Thailand&apos;s Provincial Electricity Authority. The platform
                manages renewable-energy data, user access, documents, and
                operational dashboards.
              </p>
              <ul className="projectTech" aria-label="PEA DMMS technologies">
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>PrimeReact</li>
                <li>Tailwind CSS</li>
                <li>Thai / English</li>
              </ul>
            </div>
            </article>

            <article className="projectCard">
              <div className="projectPlaceholder" aria-hidden="true">
                <strong>IDS Agent</strong>
                <span>Rust runtime → Durable sessions → Guided QA</span>
              </div>
              <div className="projectDetails">
                <p className="projectType">AI agent and QA platform</p>
                <h3>IDS Agent</h3>
                <p>
                  An AI-powered QA and coding-agent platform rebuilt around a
                  Rust-native Coco runtime. A per-user daemon supervises
                  isolated agent engines, while durable event replay keeps
                  remote sessions reliable across disconnects. Next.js,
                  SolidJS, MongoDB, and a Chrome extension provide the control
                  plane and guided QA experience.
                </p>
                <ul className="projectTech" aria-label="IDS Agent technologies">
                  <li>Rust</li>
                  <li>Axum</li>
                  <li>Tokio</li>
                  <li>SQLite</li>
                  <li>Next.js</li>
                  <li>SolidJS</li>
                  <li>MongoDB</li>
                  <li>Chrome MV3</li>
                </ul>
              </div>
            </article>
          </div>

          <a className="textLink projectMoreLink" href="/side-projects">
            View side projects <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section id="about" aria-labelledby="about-title">
        <div className="sectionHeading">
          <p className="label">02</p>
          <h2 id="about-title">About</h2>
        </div>
        <div className="sectionContent">
          <p>
            I&apos;m a frontend and full-stack developer with one year of
            professional experience building large-scale government and
            enterprise applications. I currently work on PEA DMMS and IDS Agent
            at The Island Digital Solutions.
          </p>
          <ul aria-label="Professional details">
            <li>
              <strong>Experience:</strong> The Island Digital Solutions,
              2025–Present
            </li>
            <li>
              <strong>Education:</strong> College of Computing, KKU, 2022–2025
            </li>
            <li>
              <strong>Languages:</strong> Thai (native), English (upper
              intermediate)
            </li>
          </ul>
        </div>
      </section>

      <section id="skills" aria-labelledby="skills-title">
        <div className="sectionHeading">
          <p className="label">03</p>
          <h2 id="skills-title">Skills</h2>
        </div>

        <div className="skillsContent">
          <p>
            Skills demonstrated across my professional and personal projects.
          </p>
          <div className="skillsGrid">
            <article className="skillGroup">
              <h3>Frontend &amp; UI</h3>
              <ul>
                <li>React</li>
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>React Native</li>
                <li>SolidJS</li>
                <li>Vite</li>
                <li>Tailwind CSS</li>
                <li>PrimeReact</li>
                <li>shadcn/ui</li>
                <li>SCSS</li>
                <li>Responsive design</li>
              </ul>
            </article>

            <article className="skillGroup">
              <h3>Backend, Data &amp; Systems</h3>
              <ul>
                <li>Rust</li>
                <li>Axum</li>
                <li>Tokio</li>
                <li>SQLite</li>
                <li>Node.js</li>
                <li>Bun</li>
                <li>Hono</li>
                <li>Express</li>
                <li>REST APIs</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>Java</li>
                <li>Spring Boot</li>
                <li>PocketBase</li>
                <li>Go</li>
                <li>Laravel / PHP</li>
              </ul>
            </article>

            <article className="skillGroup">
              <h3>AI &amp; Automation</h3>
              <ul>
                <li>AI agents</li>
                <li>OpenRouter</li>
                <li>MCP</li>
                <li>Browser automation</li>
                <li>Test generation</li>
                <li>Human-in-the-loop QA</li>
                <li>Chrome extensions</li>
                <li>Durable agent runtimes</li>
              </ul>
            </article>

            <article className="skillGroup">
              <h3>Enterprise &amp; Platform</h3>
              <ul>
                <li>Authentication &amp; RBAC</li>
                <li>Keycloak</li>
                <li>ThaiD</li>
                <li>OAuth / JWT</li>
                <li>Thai-English i18n</li>
                <li>Dashboards</li>
                <li>Document workflows</li>
                <li>REST API integration</li>
                <li>Axios</li>
                <li>Git &amp; GitHub</li>
                <li>Apache Superset</li>
                <li>Docker</li>
                <li>Background workers</li>
                <li>WebSockets &amp; SSE</li>
                <li>Event-driven architecture</li>
                <li>Cross-platform releases</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" aria-labelledby="contact-title">
        <div className="sectionHeading">
          <p className="label">04</p>
          <h2 id="contact-title">Contact</h2>
        </div>
        <div className="sectionContent">
          <p>I&apos;m open to frontend and full-stack opportunities.</p>
          <div className="contactLinks">
            <a className="email" href="mailto:chitakachiw@gmail.com">
              chitakachiw@gmail.com
            </a>
            <a className="email" href="tel:+66610082534">
              061-008-2534
            </a>
            <a
              className="email"
              href="https://github.com/potaytows"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Takachi Yakinuma</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
