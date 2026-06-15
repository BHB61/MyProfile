import "./styles/portfolio.css";
import {
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
  Globe,
  FileText,
  Award,
} from "lucide-react";
import {
  techGroups,
  projects,
  experience,
  certificates,
} from "./data/portfolioData";

function HeroCard() {
  return (
    <div className="hero-card">
      <div className="hero-card-top">
        <div>
          <h3>Burak Hakki Beder</h3>
          <p>IT-Student · Cloud & DevOps Enthusiast</p>
        </div>
        <span className="status-badge">Offen für Werkstudentenstellen</span>
      </div>

      <div className="contact-list">
        <div>
          <MapPin size={16} />
          <span>Nufringen / Stuttgart</span>
        </div>
        <div>
          <Mail size={16} />
          <a href="mailto:burakbeder1453@gmail.com">burakbeder1453@gmail.com</a>
        </div>
        <div>
          <Phone size={16} />
          <a href="tel:+4917683003322">0176 83003322</a>
        </div>
        <div>
          <Globe size={16} />
          <span>GitHub / GitLab: BHB61</span>
        </div>
      </div>

      <div className="hero-card-divider" />

      <p className="hero-card-text">
        Ich interessiere mich besonders für Cloud-Technologien, DevOps und die
        Automatisierung von Entwicklungs- und Deployment-Prozessen. Aktuell
        vertiefe ich mein Wissen in Docker, GitLab CI/CD, Terraform und
        Microsoft Azure durch eigene Praxisprojekte.
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
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      {project.href && (
        <a
          className="project-link"
          href={project.href}
          target="_blank"
          rel="noreferrer"
        >
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
        <div>
          <h3>{group.title}</h3>
          {group.description && (
            <p className="tech-description">{group.description}</p>
          )}
        </div>
      </div>

      <div className="tag-list">
        {group.items.map((item) => (
          <span key={item} className="tag tag-soft">
            {item}
          </span>
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

function CertificateCard({ certificate }) {
  const Icon = certificate.icon || Award;

  return (
    <article className="certificate-card">
      <div className="certificate-head">
        <div className="certificate-icon">
          <Icon size={18} />
        </div>
        <div>
          <span className="timeline-period">{certificate.date}</span>
          <h3>{certificate.title}</h3>
          <p className="certificate-issuer">{certificate.issuer}</p>
        </div>
      </div>

      <p>{certificate.description}</p>

      <div className="tag-list">
        {certificate.tags.map((tag) => (
          <span key={tag} className="tag tag-soft">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

function SectionIntro({ eyebrow, title, text }) {
  return (
    <div className="section-intro">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-text">{text}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="portfolio-page">
      <header className="site-header">
        <div className="container header-inner">
          <div>
            <div className="brand-name">Burak Hakki Beder</div>
            <div className="brand-subtitle">
              IT-Student · Cloud & DevOps Enthusiast
            </div>
          </div>

          <nav className="main-nav">
            <a href="#projekte">Projekte</a>
            <a href="#stack">Skills</a>
            <a href="#zertifikate">Zertifikate</a>
            <a href="#about">Über mich</a>
            <a href="#kontakt">Kontakt</a>
            <a href="#impressum">Impressum</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="container hero-grid">
            <div>
              <div className="hero-badge">
                HFT Stuttgart · Cloud · DevOps · Automatisierung
              </div>

              <h1>
                Cloud, DevOps und Infrastrukturautomatisierung mit Docker,
                Terraform und Azure
              </h1>

              <p className="hero-text">
                Ich beschäftige mich mit Cloud-Plattformen, Infrastructure as
                Code, Containerisierung und CI/CD-Pipelines. Mein Ziel ist es,
                moderne Entwicklungs- und Deployment-Prozesse zu verstehen und
                praktisch umzusetzen.
              </p>

              <div className="hero-actions">
                <a href="#projekte" className="button button-primary">
                  Projekte ansehen
                </a>
                <a href="#kontakt" className="button button-secondary">
                  Kontakt
                </a>
              </div>
            </div>

            <HeroCard />
          </div>
        </section>

        <section id="projekte" className="content-section">
          <div className="container">
            <SectionIntro
              eyebrow="Projekte"
              title="Praxisprojekte mit Cloud-, DevOps- und Web-Technologien"
              text="Ausgewählte Projekte, mit denen ich moderne Entwicklungsprozesse, Automatisierung, Containerisierung und Cloud-Grundlagen praktisch umgesetzt habe."
            />

            <div className="project-grid">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className="content-section">
          <div className="container">
            <SectionIntro
              eyebrow="Skills"
              title="Technologien, Tools und Systeme"
              text="Mein Schwerpunkt liegt aktuell auf Cloud- und DevOps-Technologien. Dazu gehören Docker, GitLab CI/CD, Terraform, Azure sowie die Automatisierung von Build-, Test- und Deployment-Prozessen."
            />

            <div className="tech-grid">
              {techGroups.map((group) => (
                <TechCard key={group.title} group={group} />
              ))}
            </div>
          </div>
        </section>

        <section id="zertifikate" className="content-section">
          <div className="container">
            <SectionIntro
              eyebrow="Zertifikate"
              title="Weiterbildungen und Nachweise"
              text="Ausgewählte Zertifikate und Weiterbildungen aus den Bereichen Business English, Artificial Intelligence, Cloud Computing und DevOps."
            />

            <div className="certificate-grid">
              {certificates.map((certificate) => (
                <CertificateCard
                  key={certificate.title}
                  certificate={certificate}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="content-section">
          <div className="container">
            <SectionIntro
              eyebrow="Über mich"
              title="Studium, Entwicklungspraxis und DevOps-Interesse"
              text="Ich entwickle mein Profil gezielt im Bereich Cloud Computing, DevOps und Infrastrukturautomatisierung weiter. Besonders spannend finde ich die Verbindung von Softwareentwicklung, Containerisierung, CI/CD und Cloud-Plattformen."
            />

            <div className="timeline">
              {experience.map((item) => (
                <ExperienceItem key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section id="kontakt" className="content-section">
          <div className="container">
            <div className="contact-box">
              <p className="section-eyebrow">Kontakt</p>
              <h2>Interesse an einer Zusammenarbeit?</h2>
              <p className="section-text">
                Ich freue mich über Kontakt zu Werkstudentenstellen und Projekten
                im Bereich Cloud, DevOps, Infrastrukturautomatisierung und
                Softwareentwicklung.
              </p>

              <div className="contact-actions">
                <a
                  className="button button-primary"
                  href="mailto:burakbeder1453@gmail.com"
                >
                  E-Mail schreiben
                </a>
                <a
                  className="button button-secondary"
                  href="https://mhgstuttgart.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Projekt ansehen
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="impressum" className="content-section content-section-last">
          <div className="container">
            <div className="legal-box">
              <div className="legal-head">
                <FileText size={18} />
                <h2>Impressum</h2>
              </div>

              <p className="legal-text">Angaben gemäß § 5 TMG</p>

              <div className="legal-grid">
                <div className="legal-card">
                  <h3>Verantwortlich für den Inhalt</h3>
                  <p>
                    Burak Hakki Beder
                    <br />
                    Bahnhofstraße 12
                    <br />
                    71154 Nufringen
                  </p>
                </div>

                <div className="legal-card">
                  <h3>Kontakt</h3>
                  <p>
                    E-Mail:{" "}
                    <a href="mailto:burakbeder1453@gmail.com">
                      burakbeder1453@gmail.com
                    </a>
                    <br />
                    Telefon: <a href="tel:+4917683003322">0176 83003322</a>
                  </p>
                </div>
              </div>

              <p className="legal-note">
                Dies ist eine persönliche Portfolio- und Lebenslauf-Seite zur
                Darstellung meiner Qualifikationen, Projekte und beruflichen
                Interessen im Bereich Softwareentwicklung, Cloud und DevOps.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Burak Hakki Beder</span>
          <div className="footer-links">
            <a href="#kontakt">Kontakt</a>
            <a href="#impressum">Impressum</a>
          </div>
        </div>
      </footer>
    </div>
  );
}