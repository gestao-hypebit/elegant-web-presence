import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Na home, rola até o elemento cujo id corresponde ao hash da URL.
 * Necessário porque o React Router não aciona o scroll nativo do navegador em `/#secao`.
 */
export function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (pathname !== "/" || !hash) return;
    const raw = hash.slice(1);
    if (!raw) return;
    const id = decodeURIComponent(raw);

    const scroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    scroll();
    const t = window.setTimeout(scroll, 100);
    return () => window.clearTimeout(t);
  }, [pathname, hash]);

  return null;
}
