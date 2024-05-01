import { ReactNode } from "react";
import "./Card.css";

interface CardProps {
  className: string;
  children: ReactNode | string;
}

export function Card({ className = "", children }: CardProps) {
  return (
    <div data-testid="cardContainer" className={`card-component ${className}`}>
      {children}
    </div>
  );
}
