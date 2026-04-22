import {
  Cloud,
  Code2,
  Database,
  Server,
  Monitor,
  FileSpreadsheet,
  Award,
} from "lucide-react";

export const techGroups = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Moderne Oberflächen und responsive Webentwicklung.",
    items: ["React", "JavaScript", "HTML", "CSS", "Responsive Design"],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Grundlagen für serverseitige Logik und Schnittstellen.",
    items: ["Node.js", "REST APIs", "API-Anbindung"],
  },
  {
    title: "Database",
    icon: Database,
    description: "Arbeit mit relationalen Datenbanken und strukturierten Daten.",
    items: ["SQL", "Datenmodellierung", "Abfragen"],
  },
  {
    title: "Cloud & Systems",
    icon: Cloud,
    description:
      "Erfahrung mit AWS-Basisdiensten sowie praktischer Arbeit mit Systemen.",
    items: [
      "AWS S3",
      "AWS EC2",
      "Auto Scaling",
      "Cloud Computing Grundlagen",
      "Linux",
      "Windows",
      "Systemkonfigurationen",
    ],
  },
  {
    title: "Betriebssysteme & Geräte",
    icon: Monitor,
    description:
      "Praktische Erfahrung mit Linux sowie Windows-Konfigurationen und Laptop-Setups.",
    items: [
      "Linux gearbeitet",
      "Windows-Konfigurationen",
      "Laptop-Setups",
      "Systemtests",
      "Technische Anpassungen",
    ],
  },
  {
    title: "Office & Productivity",
    icon: FileSpreadsheet,
    description: "Sicherer Umgang mit typischen Office- und Produktivitätswerkzeugen.",
    items: ["MS Office", "Word", "Excel", "PowerPoint"],
  },
];

export const projects = [
  {
    title: "mhgstuttgart.com",
    description:
      "Reale Website mit modernem Aufbau, responsivem Layout und professioneller Darstellung.",
    tags: ["React", "Deployment", "Responsive", "UI"],
    linkLabel: "Website ansehen",
    href: "https://mhgstuttgart.com",
  },
  {
    title: "AWS Projekte",
    description:
      "Praktische Erfahrung mit S3 Static Hosting, EC2 und Auto Scaling im Cloud-Umfeld.",
    tags: ["AWS", "S3", "EC2", "Auto Scaling"],
  },
  {
    title: "System- und Laptop-Konfigurationen",
    description:
      "Praktische Tests und Konfigurationen mit Windows-Laptops sowie Arbeit mit Linux-Systemen.",
    tags: ["Windows", "Linux", "Konfiguration", "Systeme"],
  },
];

export const experience = [
  {
    period: "Seit 2023",
    title: "Fullstack Developer",
    text: "Webanwendungen mit React entwickelt und APIs eingebunden. Fokus auf saubere Oberflächen, Struktur und praktische Umsetzbarkeit.",
  },
  {
    period: "Seit 2025",
    title: "Informatik Studium · HFT Stuttgart",
    text: "3. Semester mit Fokus auf Softwareentwicklung, technische Grundlagen und praktisches IT-Verständnis.",
  },
  {
    period: "Praxisprofil",
    title: "Cloud, Systeme und produktives Arbeiten",
    text: "Zusätzliche Erfahrung mit AWS-Grundlagen, Linux-Arbeit, Windows-Konfigurationen sowie MS Office im Studien- und Projektalltag.",
  },
];

export const certificates = [
  {
    title: "Business English Skills (C1)",
    issuer: "Hochschule für Technik Stuttgart",
    date: "Wintersemester 2025/26 · 13.02.2026",
    description:
      "Pflichtfach erfolgreich abgeschlossen mit Note 2,0. Umfang: 2 ECTS.",
    tags: ["C1 English", "Business English", "2 ECTS"],
    icon: Award,
  },
  {
    title: "Artificial Intelligence Literacy and Content Creation Course",
    issuer: "TechPro Education",
    date: "Issued: 24.01.2025",
    description:
      "5-day Professional Development Program mit Inhalten zu LLMs, NLP, Prompt Engineering sowie AI-Tools für Text, Bild, Video und Audio.",
    tags: ["AI Literacy", "Prompt Engineering", "NLP", "15 Hours"],
    icon: Award,
  },
  {
    title: "AWS & DevOps Engineering Program",
    issuer: "TechPro Education",
    date: "Issued: 11.06.2025",
    description:
      "7-month Program mit Python, Linux, Git/GitHub, SQL, Network, Windows Server, AWS, Docker, Terraform, Ansible, Jenkins, Kubernetes und Prometheus/Grafana.",
    tags: ["AWS", "DevOps", "Linux", "Docker", "Kubernetes"],
    icon: Award,
  },
];