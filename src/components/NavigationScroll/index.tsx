import { useEffect, useState } from "react";

import { List, X } from "phosphor-react";
import { HoverEffect } from "../HoverEffect";

import {
  NavigationButton,
  Navigation,
  NavigationContent,
  NavigationTitle,
  NavigationSocials,
  NavigationLinks,
} from "./styles";

import { useLocation } from "react-router-dom";

export function NavigationScroll() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
      <HoverEffect
        as={NavigationButton}
        onClick={toggleModal}
        className={
          isVisible && isModalOpen
            ? "visible active"
            : isVisible
            ? "visible"
            : ""
        }
      >
        {isModalOpen ? <X size={24} /> : <List size={24} />}
      </HoverEffect>

      <Navigation className={isModalOpen ? "visible" : ""}>
        <NavigationContent>
          <NavigationTitle>
            <p>NAVEGAÇÃO</p>
            <hr />
          </NavigationTitle>
          <NavigationLinks>
            <HoverEffect
              href="/"
              className={location.pathname === "/" ? "active" : ""}
            >
              Início
            </HoverEffect>
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
              Sobre
            </HoverEffect>
            <HoverEffect
              href="/contato"
              className={location.pathname === "/contato" ? "active" : ""}
            >
              Contato
            </HoverEffect>
          </NavigationLinks>
          <NavigationSocials>
            <p>REDES SOCIAIS</p>
            <div>
              <HoverEffect
                href="https://github.com/GustavoeDev/"
                target="_blank"
              >
                Github
              </HoverEffect>
              <HoverEffect
                href="https://www.linkedin.com/in/gustavo-emanuel-52bb29344/"
                target="_blank"
              >
                Linkedin
              </HoverEffect>
              <HoverEffect
                href="https://www.instagram.com/gustavox8_/"
                target="_blank"
              >
                Instagram
              </HoverEffect>
            </div>
          </NavigationSocials>
        </NavigationContent>
      </Navigation>
    </>
  );
}
