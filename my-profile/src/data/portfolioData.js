import { Cloud, Code2, Database, Server } from "lucide-react";

export const techGroups = [
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

export const projects = [
  {
    title: "mghstuttgart.com",
    description: "Reale Website mit modernem Aufbau und professioneller Darstellung.",
    tags: ["React", "Deployment", "Responsive"],
    linkLabel: "Website ansehen",
    href: "https://mghstuttgart.com",
  },
  {
    title: "AWS Projekte",
    description: "Erfahrung mit S3 Static Hosting, EC2 und Auto Scaling.",
    tags: ["AWS", "S3", "EC2"],
  },
];

export const experience = [
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