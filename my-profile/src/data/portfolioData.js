import {
  Cloud,
  Code2,
  Database,
  Server,
  Monitor,
  FileSpreadsheet,
  Award,
  Sparkles,
} from "lucide-react";

export const techGroups = [
  {
    title: "KI-Systeme",
    icon: Sparkles,
    description:
      "Mein Interesse: intelligente Assistenten, generative KI und automatisierte Workflows.",
    items: ["AI Literacy", "LLMs", "Prompt Engineering", "KI-Workflows"],
  },
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
    description:
      "Arbeit mit relationalen Datenbanken und strukturierten Daten.",
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
    description:
      "Sicherer Umgang mit typischen Office- und Produktivitätswerkzeugen.",
    items: ["MS Office", "Word", "Excel", "PowerPoint"],
  },
];

export const projects = [
  {
    title: "mhgstuttgart.com",
    paragraphs: [
      "Bei mhgstuttgart.com habe ich an einer realen Website gearbeitet und meine Kenntnisse in React und responsiver Webentwicklung praktisch eingesetzt. Im Mittelpunkt stand ein moderner, übersichtlicher Auftritt, der Inhalte verständlich vermittelt und auf unterschiedlichen Bildschirmgrößen funktioniert. Damit verbindet das Projekt die Gestaltung einer Oberfläche mit der technischen Umsetzung und der anschließenden Veröffentlichung.",
      "Durch die Arbeit an diesem Projekt habe ich Erfahrung darin gesammelt, eine Website als zusammenhängendes Ganzes zu betrachten. Einzelne Bereiche müssen nicht nur für sich gut aussehen, sondern auch in ihrer Struktur, ihren Abständen und ihrer Bedienung zusammenpassen. React bildet dabei die Grundlage der Oberfläche; HTML, CSS und JavaScript greifen ineinander, um Inhalte darzustellen und Interaktionen umzusetzen. Besonders wichtig ist mir die Verbindung zwischen einer klaren Gestaltung und einer nachvollziehbaren technischen Struktur.",
      "Ein weiterer Schwerpunkt war das responsive Layout. Auf einem Smartphone steht deutlich weniger Platz zur Verfügung als auf einem großen Bildschirm. Deshalb geht es bei einer responsiven Website nicht nur darum, Elemente kleiner darzustellen, sondern Inhalte sinnvoll anzuordnen und gut lesbar zu halten. In diesem Projekt konnte ich meine praktische Erfahrung mit unterschiedlichen Ansichten und der Aufbereitung einer Oberfläche für verschiedene Geräte erweitern.",
      "Das Deployment ergänzt die Entwicklung um einen wichtigen praktischen Schritt: Aus dem lokal entwickelten Projekt wird eine öffentlich erreichbare Website. Für mich verbindet mhgstuttgart.com deshalb mehrere Themen, die ich weiter vertiefen möchte – React, Benutzeroberflächen, responsive Gestaltung und die Bereitstellung einer Anwendung. Der direkte Link ermöglicht einen Einblick in das veröffentlichte Ergebnis.",
    ],
    description:
      "Reale Website mit modernem Aufbau, responsivem Layout und professioneller Darstellung.",
    tags: ["React", "Deployment", "Responsive", "UI"],
    linkLabel: "Website ansehen",
    href: "https://mhgstuttgart.com",
  },
  {
    title: "AWS Projekte",
    paragraphs: [
      "Meine AWS-Praxisprojekte dienen dazu, Cloud-Grundlagen außerhalb rein theoretischer Beispiele kennenzulernen. Dabei beschäftige ich mich mit S3 Static Hosting, EC2 und Auto Scaling. Diese Themen zeigen unterschiedliche Seiten einer Cloud-Umgebung: das Bereitstellen statischer Inhalte, den Einsatz virtueller Server und die Anpassung von Rechenkapazität. Die Projekte sind Teil meines Lernwegs im Bereich Cloud und DevOps.",
      "Mit S3 Static Hosting habe ich praktische Erfahrung in der Bereitstellung statischer Webinhalte gesammelt. Mich interessiert dabei besonders der Zusammenhang zwischen den Dateien einer Website und der Infrastruktur, über die diese Inhalte erreichbar werden. Das erweitert meinen Blick auf Webentwicklung: Neben der Oberfläche gehört auch die Frage dazu, auf welchem Weg eine Anwendung oder Website bereitgestellt wird.",
      "Die Beschäftigung mit EC2 ergänzt diesen Ansatz um virtuelle Server. Dadurch kann ich Cloud-Infrastruktur mit meinen Erfahrungen aus der Arbeit mit Betriebssystemen verbinden. Auto Scaling eröffnet eine weitere Perspektive: Hier steht die Frage im Mittelpunkt, wie sich die verfügbare Kapazität an einen veränderten Bedarf anpassen lässt. Diese Grundlagen helfen mir dabei, die einzelnen Dienste nicht isoliert, sondern in ihrem Zusammenspiel zu betrachten.",
      "Die Erfahrungen aus diesen Übungen bilden eine Grundlage für meine weitere Beschäftigung mit Infrastrukturautomatisierung. Aktuell vertiefe ich unter anderem Docker, Terraform, Azure und CI/CD. Dabei möchte ich besser verstehen, wie sich Entwicklungs- und Bereitstellungsprozesse nachvollziehbar und wiederholbar gestalten lassen. Die AWS-Projekte beschreiben meinen bisherigen praktischen Einstieg und geben die Richtung vor, in der ich mein Wissen weiter ausbauen möchte.",
    ],
    description:
      "Praktische Erfahrung mit S3 Static Hosting, EC2 und Auto Scaling im Cloud-Umfeld.",
    tags: ["AWS", "S3", "EC2", "Auto Scaling"],
  },
  {
    title: "System- und Laptop-Konfigurationen",
    paragraphs: [
      "Neben der Webentwicklung habe ich praktische Erfahrung mit Windows-Laptops, Gerätekonfigurationen und Linux-Systemen gesammelt. Bei diesen Arbeiten steht das technische Umfeld im Vordergrund, in dem Software tatsächlich genutzt wird. Mich interessiert, wie Betriebssystem, Einstellungen und Anwendungen zusammenwirken und wie sich ein Gerät sinnvoll für seinen jeweiligen Einsatz vorbereiten lässt.",
      "Die Arbeit mit Windows-Konfigurationen und Laptop-Setups hat meinen Blick auf die praktische Seite von IT erweitert. Eine Konfiguration ist nicht nur eine Sammlung einzelner Einstellungen: Die Anpassungen müssen zum Gerät und zur gewünschten Nutzung passen. Systemtests gehören für mich deshalb zu diesem Themenbereich ebenso dazu wie das eigentliche Einrichten. Sie helfen dabei, das Verhalten eines Systems besser nachzuvollziehen.",
      "Durch die zusätzliche Arbeit mit Linux konnte ich Erfahrungen mit einem weiteren Betriebssystem sammeln. Das ist für mein Interesse an Cloud und DevOps besonders relevant, weil sich Fragen zur Ausführungsumgebung auch bei Servern und bei der Bereitstellung von Anwendungen stellen. Die Beschäftigung mit unterschiedlichen Systemen ergänzt damit meine Perspektive als Entwickler.",
      "Für meinen weiteren Lernweg möchte ich diese praktische Systemerfahrung stärker mit Automatisierung verbinden. Mich beschäftigt dabei, welche wiederkehrenden Einrichtungsschritte sich nachvollziehbar beschreiben lassen und wie technische Änderungen verständlich bleiben. Der Bereich steht in meinem Portfolio für praktische Tests, Konfigurationen und den Aufbau eines breiteren Systemverständnisses.",
    ],
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
    record: "english",
    issuer: "Hochschule für Technik Stuttgart",
    date: "Wintersemester 2025/26 · 13.02.2026",
    description:
      "Pflichtfach erfolgreich abgeschlossen mit Note 2,0. Umfang: 2 ECTS.",
    tags: ["C1 English", "Business English", "2 ECTS"],
    icon: Award,
  },
  {
    title: "Artificial Intelligence Literacy and Content Creation Course",
    record: "ai",
    issuer: "TechPro Education",
    date: "Issued: 24.01.2025",
    description:
      "5-day Professional Development Program mit Inhalten zu LLMs, NLP, Prompt Engineering sowie AI-Tools für Text, Bild, Video und Audio.",
    tags: ["AI Literacy", "Prompt Engineering", "NLP", "15 Hours"],
    icon: Award,
  },
  {
    title: "AWS & DevOps Engineering Program",
    record: "devops",
    issuer: "TechPro Education",
    date: "Issued: 11.06.2025",
    description:
      "7-month Program mit Python, Linux, Git/GitHub, SQL, Network, Windows Server, AWS, Docker, Terraform, Ansible, Jenkins, Kubernetes und Prometheus/Grafana.",
    tags: ["AWS", "DevOps", "Linux", "Docker", "Kubernetes"],
    icon: Award,
  },
];
