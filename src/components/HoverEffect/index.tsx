import React, { useState } from "react";
import { ComponentHover } from "./styles";

interface HoverEffectProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  factor?: number;
  href?: string;
  children: React.ReactNode;
  target?: string;
}

export function HoverEffect({
  as = "a",
  factor = 0.3,
  children,
  href,
  target,
  ...props
}: HoverEffectProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();

    const x = (clientX - left - width / 2) * factor;
    const y = (clientY - top - height / 2) * factor;

    setOffset({ x, y });
  };

  const resetOffset = () => setOffset({ x: 0, y: 0 });

  return (
    <ComponentHover
      as={as}
      x={offset.x}
      y={offset.y}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetOffset}
      {...(as === "a" && href ? { href } : {})}
      {...(as === "a" && target ? { target } : {})}
      {...props}
    >
      {children}
    </ComponentHover>
  );
}
