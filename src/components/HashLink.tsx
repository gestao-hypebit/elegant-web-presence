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
    navigate(
      { pathname: "/", hash: `#${id}` },
      { replace: location.pathname === "/" },
    );
    onClick?.(e);
  };

  return <Link to={to} onClick={handleClick} {...props} />;
}
