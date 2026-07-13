import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Rola para o topo a cada navegação entre páginas.
// Se a URL tiver um hash (ex: /#contact vindo do Header), não mexe no
// scroll aqui — quem cuida disso é o efeito de scroll da própria Home.
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
