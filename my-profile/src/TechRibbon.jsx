import { useState } from "react";
import { Pause, Play } from "lucide-react";
const technologies = [
  "Docker",
  "Terraform",
  "Microsoft Azure",
  "GitLab CI/CD",
  "React",
  "KI-Systeme",
];
export default function TechRibbon() {
  const [paused, setPaused] = useState(false);
  return (
    <div className={`stack-strip motion-ribbon ${paused ? "is-paused" : ""}`}>
      <div className="container ribbon-layout">
        <span className="ribbon-label">AKTUELL IM FOKUS</span>
        <div className="ribbon-window">
          <div className="ribbon-track">
            {[0, 1].map((copy) => (
              <div
                className="ribbon-set"
                key={copy}
                aria-hidden={copy === 1 ? true : undefined}
              >
                {technologies.map((t) => (
                  <span key={t}>
                    <i aria-hidden="true">✦</i>
                    {t}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <button
          className="ribbon-toggle"
          type="button"
          onClick={() => setPaused(!paused)}
          aria-label={
            paused
              ? "Technologie-Animation starten"
              : "Technologie-Animation pausieren"
          }
        >
          {paused ? <Play size={15} /> : <Pause size={15} />}
        </button>
      </div>
    </div>
  );
}
