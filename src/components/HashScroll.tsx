import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function HashScroll() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    let attempts = 0;
    let timer = 0;

    const scroll = () => {
      if (!hash) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const target = document.getElementById(hash.slice(1));
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
        return;
      }

      attempts += 1;
      if (attempts < 10) timer = window.setTimeout(scroll, 50);
    };

    timer = window.setTimeout(scroll, 0);

    return () => window.clearTimeout(timer);
  }, [hash, pathname]);

  return null;
}
