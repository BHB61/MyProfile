import {
  DetailPopup,
  ScrollThread,
  CertificateEvidence,
} from "./PortfolioDetails";
import { courseRecords, serviceDetails } from "./data/detailData";
import "./styles/portfolio.css";
import { usePortfolioMotion } from "./usePortfolioMotion";
import {
  ArrowUpRight,
  ArrowRight,
  Code2,
  Cloud,
  Box,
  Terminal,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import {
  techGroups,
  projects,
  experience,
  certificates,
} from "./data/portfolioData";

const external = { target: "_blank", rel: "noreferrer" };
function Tags({ items }) {
  return (
    <div className="tag-list">
      {items.map((item) => (
        <span className="tag" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}
function Intro({ label, title, children }) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{label}</p>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}
export default function App() {
  usePortfolioMotion();
  return (
    <div id="top">
      <ScrollThread />
      <a className="skip-link" href="#main">
        Zum Inhalt
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top">
            <span className="monogram">b.</span>
            <span>
              Burak Hakki Beder
              <span className="brand-subtitle">CLOUD & DEVOPS ENTHUSIAST</span>
            </span>
          </a>
          <nav aria-label="Hauptnavigation">
            <a href="#projekte">Projekte</a>
            <a href="#stack">Skills</a>
            <a href="#about">Über mich</a>
            <a className="nav-contact" href="#kontakt">
              Kontakt <ArrowUpRight size={15} />
            </a>
          </nav>
        </div>
      </header>
      <main id="main">
        <section className="hero-section portrait-hero">
          <img
            className="hero-portrait"
            src="/burak-hero.jpg"
            alt="Burak Hakki Beder im dunkelblauen Anzug vor einem hellen Studiohintergrund"
            width="1536"
            height="1024"
            fetchPriority="high"
          />
          <div className="container hero-grid">
            <div>
              <h1>
                Von der Idee
                <br />
                zum Code.
                <br />
                <span>Bis in die Cloud.</span>
              </h1>
              <p className="hero-text">
                Ich bin Burak Hakki Beder. Informatikstudent an der HFT
                Stuttgart mit Begeisterung für KI-Systeme, Cloud, DevOps und
                Softwareentwicklung. Ich lerne am liebsten, indem ich Dinge
                baue.
              </p>
              <div className="actions">
                <a className="button primary" href="#projekte">
                  Projekte entdecken <ArrowUpRight size={18} />
                </a>
                <a className="button secondary" href="#kontakt">
                  Lass uns sprechen <ArrowRight size={17} />
                </a>
              </div>
              <div className="hero-meta">
                <span>
                  <MapPin size={14} /> Stuttgart & Umgebung
                </span>
                <a href="https://github.com/BHB61" {...external}>
                  <Code2 size={15} /> GitHub <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="stack-strip">
          <div className="container">
            <span>AKTUELL IM FOKUS</span>
            {[
              "Docker",
              "Terraform",
              "Microsoft Azure",
              "GitLab CI/CD",
              "React",
              "KI-Systeme",
            ].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
        <section id="projekte" className="section">
          <div className="container">
            <Intro
              label="01 / Ausgewählte Projekte"
              title="Wissen wird Praxis."
            >
              Von responsiven Websites bis zur Cloud-Infrastruktur: Projekte, an
              denen ich wachse und neue Technologien praktisch einsetze.
            </Intro>
            <div className="project-grid">
              {projects.map((p, i) => (
                <article className="project-card" key={p.title}>
                  <div className="project-top">
                    <span className="project-number">0{i + 1}</span>
                    <span>
                      {
                        ["WEB DEVELOPMENT", "CLOUD COMPUTING", "SYSTEMS & IT"][
                          i
                        ]
                      }
                    </span>
                    {
                      [
                        <Box key="web" />,
                        <Cloud key="cloud" />,
                        <Terminal key="systems" />,
                      ][i]
                    }
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <Tags items={p.tags} />
                  <DetailPopup title={p.title} label="Projektdetails">
                    <p>{p.description}</p>
                    <h3>Technologien & Lernschwerpunkte</h3>
                    <Tags items={p.tags} />
                    <p className="project-context">
                      {
                        [
                          "Bei diesem Webprojekt stehen eine responsive React-Oberfläche, eine klare Inhaltsstruktur und die Veröffentlichung einer realen Website im Mittelpunkt.",
                          "Diese Praxisprojekte dienen dazu, AWS-Grundlagen anzuwenden: statische Inhalte mit S3 bereitstellen, EC2-Instanzen kennenlernen und das Prinzip von Auto Scaling verstehen.",
                          "Hier geht es um praktische Gerätekonfigurationen und Systemtests: Windows-Laptops einrichten, Linux-Systeme kennenlernen und technische Anpassungen nachvollziehen.",
                        ][i]
                      }
                    </p>
                    {p.href && (
                      <a className="text-link" href={p.href} {...external}>
                        Website ansehen <ArrowUpRight size={16} />
                      </a>
                    )}
                  </DetailPopup>
                  {p.href ? (
                    <a className="text-link" href={p.href} {...external}>
                      {p.linkLabel} <ArrowUpRight size={16} />
                    </a>
                  ) : (
                    <span className="project-note">Praxis & Lernerfahrung</span>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="stack" className="section tinted">
          <div className="container">
            <Intro
              label="02 / Mein Werkzeugkasten"
              title="Die richtigen Tools. Neugier inklusive."
            >
              Mein aktueller Schwerpunkt: Docker, GitLab CI/CD, Terraform und
              Azure. Dazu kommt eine breite Basis in Webentwicklung und
              Systemen. Besonders interessieren mich außerdem KI-Systeme und
              intelligente Workflows.
            </Intro>
            <div className="tech-grid">
              {techGroups.map((g) => {
                const Icon = g.icon;
                return (
                  <article className="tech-card" key={g.title}>
                    <Icon className="tech-icon" size={23} />
                    <h3>{g.title}</h3>
                    <p>{g.description}</p>
                    <Tags items={g.items} />
                    <DetailPopup title={g.title}>
                      <p>{serviceDetails[g.title][0]}</p>
                      <h3>Damit beschäftige ich mich</h3>
                      <ul className="detail-list">
                        {serviceDetails[g.title][1].map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      <Tags items={g.items} />
                    </DetailPopup>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
        <section id="about" className="section">
          <div className="container about-grid">
            <Intro
              label="03 / Über mich"
              title="Technik verstehen. Dinge bewegen."
            >
              Mich begeistert die Verbindung von Softwareentwicklung,
              Containerisierung, KI-Systemen und Cloud-Plattformen. Ich
              entwickle mein Profil Schritt für Schritt weiter – mit Neugier,
              Eigeninitiative und eigenen Praxisprojekten.
            </Intro>
            <div className="timeline">
              {experience.map((e) => (
                <article key={e.title}>
                  <span className="eyebrow">{e.period}</span>
                  <h3>{e.title}</h3>
                  <p>{e.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="zertifikate" className="section certificates-section">
          <div className="container">
            <Intro
              label="04 / Weiterlernen"
              title="Neugierig bleiben. Weiterkommen."
            >
              Weiterbildungen und Nachweise auf meinem Weg zwischen Software,
              Cloud und Kommunikation.
            </Intro>
            <div className="certificates">
              {certificates.map((c) => {
                const Icon = c.icon;
                return (
                  <article className="certificate" key={c.title}>
                    <div className="certificate-icon">
                      <Icon size={23} />
                    </div>
                    <div>
                      <span className="eyebrow">{c.date}</span>
                      <h3>{c.title}</h3>
                      <span className="issuer">{c.issuer}</span>
                      <p>{c.description}</p>
                      <Tags items={c.tags} />
                      {c.record && (
                        <CertificateEvidence
                          record={courseRecords[c.record]}
                          title={c.title}
                        />
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
        <section id="kontakt" className="section">
          <div className="container contact-box">
            <p className="eyebrow">DER NÄCHSTE SCHRITT</p>
            <h2>
              Gute Ideen beginnen
              <br />
              mit einem Hallo<span>.</span>
            </h2>
            <p>
              Du suchst einen motivierten Werkstudenten oder möchtest dich über
              ein Projekt austauschen? Ich freue mich, von dir zu hören.
            </p>
            <div className="actions">
              <a
                className="button primary"
                href="mailto:burakbeder1453@gmail.com"
              >
                E-Mail schreiben <ArrowUpRight size={18} />
              </a>
              <a
                className="button secondary"
                href="https://github.com/BHB61"
                {...external}
              >
                <Code2 size={17} /> Mein GitHub
              </a>
            </div>
            <div className="contact-details">
              <a href="mailto:burakbeder1453@gmail.com">
                <Mail size={15} /> burakbeder1453@gmail.com
              </a>
              <a href="tel:+4917683003322">
                <Phone size={15} /> 0176 83003322
              </a>
            </div>
          </div>
        </section>
        <section id="impressum" className="legal container">
          <h2>Impressum</h2>
          <p>Angaben gemäß § 5 TMG</p>
          <div className="legal-grid">
            <div>
              <h3>Verantwortlich für den Inhalt</h3>
              <p>
                Burak Hakki Beder
                <br />
                Bahnhofstraße 12
                <br />
                71154 Nufringen
              </p>
            </div>
            <div>
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
          <p>
            Persönliche Portfolio- und Lebenslauf-Seite zur Darstellung meiner
            Qualifikationen, Projekte und beruflichen Interessen im Bereich
            Softwareentwicklung, Cloud und DevOps.
          </p>
        </section>
      </main>
      <footer className="container">
        <span>© {new Date().getFullYear()} Burak Hakki Beder</span>
        <div>
          <a href="#zertifikate">Zertifikate</a>
          <a href="#impressum">Impressum</a>
          <a href="#top">Nach oben ↑</a>
        </div>
      </footer>
    </div>
  );
}
