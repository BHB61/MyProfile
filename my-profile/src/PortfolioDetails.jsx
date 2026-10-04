import { useEffect, useRef } from "react";
import { ArrowUpRight, X } from "lucide-react";
export function DetailPopup({
  title,
  label = "Mehr erfahren",
  children,
  className = "detail-trigger",
}) {
  const dialog = useRef(null);
  const previousOverflow = useRef(null);
  const restore = () => {
    if (previousOverflow.current !== null) {
      document.body.style.overflow = previousOverflow.current;
      previousOverflow.current = null;
    }
  };
  useEffect(
    () => () => {
      if (previousOverflow.current !== null)
        document.body.style.overflow = previousOverflow.current;
    },
    [],
  );
  return (
    <>
      <button
        className={className}
        type="button"
        aria-haspopup="dialog"
        aria-label={`${label}: ${title}`}
        onClick={() => {
          previousOverflow.current = document.body.style.overflow;
          document.body.style.overflow = "hidden";
          dialog.current.showModal();
        }}
      >
        {label}
        <ArrowUpRight size={16} />
      </button>
      <dialog
        ref={dialog}
        className="detail-dialog"
        aria-label={title}
        onClose={restore}
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current.close();
        }}
      >
        <div className="dialog-content">
          <div className="dialog-heading">
            <h2>{title}</h2>
            <button
              autoFocus
              className="dialog-close"
              type="button"
              aria-label="Popup schließen"
              onClick={() => dialog.current.close()}
            >
              <X size={22} />
            </button>
          </div>
          {children}
        </div>
      </dialog>
    </>
  );
}
export function ScrollThread() {
  const bar = useRef(null);
  useEffect(() => {
    let frame;
    const update = () => {
      const length = document.documentElement.scrollHeight - window.innerHeight;
      bar.current?.style.setProperty(
        "--progress",
        length > 0 ? Math.min(1, Math.max(0, window.scrollY / length)) : 0,
      );
      frame = null;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const resize = new ResizeObserver(schedule);
    resize.observe(document.body);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    update();
    return () => {
      resize.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <div className="scroll-thread" ref={bar} aria-hidden="true">
      <span />
    </div>
  );
}
export function CertificateEvidence({ record, title }) {
  return (
    <div className="certificate-evidence">
      <div className="certificate-pages">
        {[1, 2].map((page) => (
          <figure key={page}>
            <img
              src={`/certificates/${record.slug}-${page}.jpg`}
              alt={`${title} – ${page === 1 ? "Urkunde" : "vollständige Kursübersicht"}`}
              width={record.width}
              height={record.height}
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              Seite {page} · {page === 1 ? "Urkunde" : "Kursübersicht"}
            </figcaption>
            <DetailPopup title={`${title} – Seite ${page}`} label="Vergrößern">
              <img
                className="certificate-enlarged"
                src={`/certificates/${record.slug}-${page}.jpg`}
                alt={`${title}, Seite ${page}`}
              />
              <a
                className="text-link"
                href={`/certificates/${record.slug}-${page}.jpg`}
                target="_blank"
                rel="noreferrer"
              >
                Bild in voller Auflösung öffnen <ArrowUpRight size={16} />
              </a>
            </DetailPopup>
          </figure>
        ))}
      </div>
      <a
        className="button secondary"
        href={`/certificates/${record.slug}.pdf`}
        target="_blank"
        rel="noreferrer"
      >
        Original-PDF öffnen <ArrowUpRight size={16} />
      </a>
      <div className="course-record">
        <h4>Alle Kursinhalte</h4>
        <p>{record.duration} · Inhalte gemäß beigefügtem Nachweis.</p>
        <div className="course-columns">
          {record.sections.map(([heading, items]) => (
            <section key={heading}>
              <h5>{heading}</h5>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
