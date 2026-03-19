import { ElementType, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

export default function Container({
  children,
  className = "",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={`px-[5vw] sm:px-[10.27vw] w-full mx-auto ${className}`}>
      {children}
    </Tag>
  );
}
