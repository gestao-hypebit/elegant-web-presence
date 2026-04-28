import { Link, useNavigate, useLocation } from "react-router-dom";
import type { LinkProps } from "react-router-dom";

type HashLinkProps = LinkProps & { to: string };

/**
 * Links para `/#secao` na home: usa navigate com hash para o ScrollToHash rolar corretamente.
 */
export function HashLink({ to, onClick, ...props }: HashLinkProps) {
  const navigate = useNavigate();
  const location = useLocation();

  if (!to.startsWith("/#")) {
    return (
      <Link to={to} onClick={onClick} {...props} />
    );
  }

  const id = to.slice(2);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Se já está na home com o mesmo hash, faz scroll diretamente
    // (navigate com replace não re-dispara o efeito quando o hash não muda)
    if (location.pathname === "/" && location.hash === `#${id}`) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      onClick?.(e);
      return;
    }

    navigate(
      { pathname: "/", hash: `#${id}` },
      { replace: location.pathname === "/" },
    );
    onClick?.(e);
  };

  return <Link to={to} onClick={handleClick} {...props} />;
}
