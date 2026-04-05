import "./styles/portfolio.css";
import {
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
  Cloud,
  Code2,
  Database,
  Server,
} from "lucide-react";

const techGroups = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "REST APIs"],
  },
  {
    title: "Database",
    icon: Database,
    items: ["SQL"],
  },
  {
    title: "Cloud",
    icon: Cloud,
    items: ["AWS S3", "EC2", "Auto Scaling"],
  },
];

const projects = [
  {
    title: "mhgstuttgart.com",
    description: "Reale Website mit modernem Aufbau und professioneller Darstellung.",
    tags: ["React", "Deployment", "Responsive"],
    linkLabel: "Website ansehen",
    href: "https://mhgstuttgart.com",
  },
  {
    title: "AWS Projekte",
    description: "Erfahrung mit S3 Static Hosting, EC2 und Auto Scaling.",
    tags: ["AWS", "S3", "EC2"],
  },
];

const experience = [
  {
    period: "Seit 2023",
    title: "Fullstack Developer",
    text: "Web Apps mit React und APIs entwickelt.",
  },
  {
    period: "Seit 2025",
    title: "Informatik Studium · HFT Stuttgart",
    text: "3. Semester mit Fokus auf Softwareentwicklung.",
  },
];

function HeroCard() {
  return (
    <div className="hero-card">
      <div className="hero-card-top">
        <div>
          <h3>Burak Hakki Beder</h3>
          <p>Fullstack Developer · IT-Student</p>
        </div>
        <span className="status-badge">Offen für Werkstudentenstellen</span>
      </div>

      <div className="contact-list">
        <div><MapPin size={16} /> Nürtingen / Stuttgart</div>
        <div><Mail size={16} /> burak61beder61@gmail.com</div>
        <div><Phone size={16} /> 0176 83003322</div>
        <div>GitHub: BHB61</div>
      </div>

      <div className="hero-card-divider" />

      <p className="hero-card-text">
        Ich kombiniere Studium, Entwicklungspraxis und moderne Webentwicklung mit React und AWS.
      </p>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-icon">
        <ArrowUpRight size={18} />
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="tag-list">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      {project.href && (
        <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
          {project.linkLabel || "Projekt öffnen"}
        </a>
      )}
    </article>
  );
}

function TechCard({ group }) {
  const Icon = group.icon;

  return (
    <article className="tech-card">
      <div className="tech-card-head">
        <div className="tech-card-icon">
          <Icon size={18} />
        </div>
        <h3>{group.title}</h3>
      </div>

      <div className="tag-list">
        {group.items.map((item) => (
          <span key={item} className="tag tag-soft">{item}</span>
        ))}
      </div>
    </article>
  );
}

function ExperienceItem({ item }) {
  return (
    <article className="timeline-item">
      <span className="timeline-period">{item.period}</span>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </article>
  );
}

export default function App() {
  return (
    <div className="portfolio-page">
      <header className="site-header">
        <div className="container header-inner">
          <div>
            <div className="brand-name">Burak Hakki Beder</div>
            <div className="brand-subtitle">IT-Student · Fullstack Developer</div>
          </div>

          <nav className="main-nav">
            <a href="#projekte">Projekte</a>
            <a href="#stack">Stack</a>
            <a href="#about">Über mich</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="container hero-grid">
            <div>
              <div className="hero-badge">HFT Stuttgart · 3. Semester</div>
              <h1>Ich entwickle moderne Webanwendungen mit React & AWS</h1>

              <p className="hero-text">
                Fokus auf React, APIs und Cloud Deployments mit AWS wie S3, EC2 und Auto Scaling.
              </p>

              <div className="hero-actions">
                <a href="#projekte" className="button button-primary">Projekte</a>
                <a href="#kontakt" className="button button-secondary">Kontakt</a>
              </div>
            </div>

            <HeroCard />
          </div>
        </section>

        <section id="projekte" className="content-section">
          <div className="container project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section id="stack" className="content-section">
          <div className="container tech-grid">
            {techGroups.map((group) => (
              <TechCard key={group.title} group={group} />
            ))}
          </div>
        </section>

        <section id="about" className="content-section">
          <div className="container timeline">
            {experience.map((item) => (
              <ExperienceItem key={item.title} item={item} />
            ))}
          </div>
        </section>

        <section id="kontakt" className="content-section content-section-last">
          <div className="container contact-box">
            <p className="section-eyebrow">Kontakt</p>
            <h2>Interesse an einer Zusammenarbeit?</h2>
            <p className="section-text">
              Schreib mir einfach eine Mail oder schau dir meine Projekte an.
            </p>

            <div className="contact-actions">
              <a className="button button-primary" href="mailto:burak61beder61@gmail.com">
                E-Mail schreiben
              </a>
              <a
                className="button button-secondary"
                href="https://mghstuttgart.com"
                target="_blank"
                rel="noreferrer"
              >
                Projekt ansehen
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}