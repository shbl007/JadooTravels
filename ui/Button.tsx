import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost" | "coral";
  className?: string;
};

const variants = {
  primary: "bg-gold text-white shadow-[0_20px_35px_rgba(241,165,1,0.25)] hover:brightness-105",
  outline: "border border-ink/35 bg-white text-ink hover:bg-ink hover:text-white",
  ghost: "bg-transparent text-slate hover:text-ink",
  coral: "bg-[#FF7D68] text-white shadow-[0_20px_35px_rgba(255,125,104,0.25)] hover:brightness-105",
};

export default function Button({
  children,
  className = "",
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-2xl px-7 py-4 text-lg font-medium transition duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
