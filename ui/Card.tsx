import { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export default function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div className={`rounded-panel ${className}`} {...props}>
      {children}
    </div>
  );
}
