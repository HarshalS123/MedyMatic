import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const revealClass = "scroll-reveal";
const visibleClass = "scroll-reveal-visible";

export function ScrollReveal() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main section:not([data-no-scroll-reveal])",
      ),
    );

    if (sections.length === 0) return;

    sections.forEach((section) => section.classList.add(revealClass));

    if (!("IntersectionObserver" in window)) {
      sections.forEach((section) => section.classList.add(visibleClass));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add(visibleClass);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
