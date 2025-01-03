import React, { useState } from "react";
import { ComponentHover } from "./styles";

interface HoverEffectProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  factor?: number;
  href?: string;
  children: React.ReactNode;
}

export function HoverEffect({
  as = "a",
  factor = 0.3,
  children,
  href,
  ...props
}: HoverEffectProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { clientWidth, clientHeight } = target as HTMLElement;

    const x = (offsetX - clientWidth / 2) * factor;
    const y = (offsetY - clientHeight / 2) * factor;

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
      {...props}
    >
      {children}
    </ComponentHover>
  );
}
