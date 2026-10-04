import { useEffect } from "react";

export function usePortfolioMotion() {
  useEffect(() => {
    const portrait = document.querySelector(".hero-portrait");
    const enabled = window.matchMedia(
      "(min-width: 1001px) and (prefers-reduced-motion: no-preference)",
    );
    let frame = null;
    const update = () => {
      frame = null;
      if (!portrait) return;
      const hero = portrait.parentElement;
      const distance = Math.min(
        hero.offsetHeight,
        Math.max(0, -hero.getBoundingClientRect().top),
      );
      portrait.style.setProperty(
        "--portrait-shift",
        enabled.matches ? distance * 0.035 + "px" : "0px",
      );
    };
    const schedule = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    enabled.addEventListener("change", schedule);
    update();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      enabled.removeEventListener("change", schedule);
      portrait?.style.removeProperty("--portrait-shift");
    };
  }, []);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = [
      ...document.querySelectorAll(
        ".section-intro, .project-card, .tech-card, .timeline article, .certificate, .contact-box",
      ),
    ];
    let observer;
    const reset = () => {
      observer?.disconnect();
      elements.forEach((element) => element.classList.remove("reveal-pending"));
    };
    const setup = () => {
      reset();
      if (preference.matches || !("IntersectionObserver" in window)) return;
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.remove("reveal-pending");
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.08 },
      );
      elements.forEach((element, index) => {
        if (element.getBoundingClientRect().top < window.innerHeight) return;
        element.style.setProperty("--reveal-delay", `${(index % 3) * 70}ms`);
        element.classList.add("reveal-pending");
        observer.observe(element);
      });
    };
    setup();
    preference.addEventListener("change", setup);
    return () => {
      reset();
      preference.removeEventListener("change", setup);
    };
  }, []);
}
