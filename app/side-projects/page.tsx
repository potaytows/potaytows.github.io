import type { Metadata } from "next";

const sideProjects = [
  {
    title: "Fisch Server Uptime Calculator",
    description:
      "A shared real-time tracker for in-game server uptime, with Google sign-in, shareable server codes, roles, and saved data.",
    tech: "Next.js · TypeScript · MongoDB",
    href: "https://github.com/potaytows/fisch-server-event-calculator",
  },
  {
    title: "Jonggy",
    description:
      "A multi-application system with separate client, owner, admin, and API repositories.",
    tech: "React Native · Node.js · JavaScript",
    href: "https://github.com/potaytows/jonggyClientside",
  },
  {
    title: "Reddit for Education",
    description:
      "A classroom community app for finding and connecting with people in the same class.",
    tech: "Node.js · Express · EJS",
    href: "https://github.com/potaytows/redditbutforeducation",
  },
  {
    title: "Termgame",
    description:
      "A Laravel-based web application for browsing and purchasing game top-ups.",
    tech: "Laravel · PHP · Vite",
    href: "https://github.com/potaytows/termgame",
  },
];

export const metadata: Metadata = {
  title: "Side Projects — Takachi Yakinuma",
  description: "Independent experiments and open-source projects.",
};

export default function SideProjects() {
  return (
    <main>
      <nav aria-label="Main navigation">
        <a className="name" href="/">
          Takachi Yakinuma
        </a>
        <div className="navLinks">
          <a href="/#projects">Projects</a>
          <a href="/side-projects">Side projects</a>
          <a href="/#contact">Contact</a>
        </div>
      </nav>

      <header className="sidePageHeader">
        <p className="label">Independent work</p>
        <h1>Side projects.</h1>
        <p>
          Smaller tools, experiments, and applications I&apos;ve built while
          learning and exploring new ideas.
        </p>
      </header>

      <div className="sideProjectGrid sideProjectPageGrid">
        {sideProjects.map((project) => (
          <a
            className="sideProjectCard"
            href={project.href}
            key={project.title}
            rel="noreferrer"
            target="_blank"
          >
            <div>
              <h2>{project.title}</h2>
              <span aria-hidden="true">↗</span>
            </div>
            <p>{project.description}</p>
            <small>{project.tech}</small>
          </a>
        ))}
      </div>

      <a
        className="githubLink"
        href="https://github.com/potaytows?tab=repositories"
        rel="noreferrer"
        target="_blank"
      >
        View all repositories on GitHub ↗
      </a>

      <footer>
        <p>© 2026 Takachi Yakinuma</p>
        <a href="/">Back to portfolio</a>
      </footer>
    </main>
  );
}
