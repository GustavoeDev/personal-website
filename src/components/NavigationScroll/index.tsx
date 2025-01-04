import { useEffect, useState } from "react";

import { List } from "phosphor-react";
import { HoverEffect } from "../HoverEffect";
import { NavigationButton } from "./styles";

export function NavigationScroll() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HoverEffect as={NavigationButton} className={isVisible ? "visible" : ""}>
      <List size={24} />
    </HoverEffect>
  );
}
