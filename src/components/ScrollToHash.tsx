import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Na home, rola até o elemento cujo id corresponde ao hash da URL.
 * Necessário porque o React Router não aciona o scroll nativo do navegador em `/#secao`.
 */
export function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname !== "/" || !hash) return;
    const id = decodeURIComponent(hash.slice(1));
    if (!id) return;

    const scroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    // Aguarda o browser terminar o paint e qualquer reset de scroll do router
    const t = window.setTimeout(scroll, 80);
    return () => window.clearTimeout(t);
  }, [pathname, hash]);

  return null;
}
