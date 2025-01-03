import { useLocation } from "react-router-dom";
import { HoverEffect } from "../HoverEffect";
import { HeaderContainer, HeaderNavigation } from "./styles";

export function Header() {
  const location = useLocation();

  return (
    <HeaderContainer>
      <HoverEffect href="/">&#169; Feito por Gustavo</HoverEffect>
      <HeaderNavigation>
        <HoverEffect
          href="/projetos"
          className={location.pathname === "/projetos" ? "active" : ""}
        >
          Projetos
        </HoverEffect>
        <HoverEffect
          href="/sobre"
          className={location.pathname === "/sobre" ? "active" : ""}
        >
          Sobre mim
        </HoverEffect>
        <HoverEffect
          href="/contato"
          className={location.pathname === "/contato" ? "active" : ""}
        >
          Contato
        </HoverEffect>
      </HeaderNavigation>
    </HeaderContainer>
  );
}
