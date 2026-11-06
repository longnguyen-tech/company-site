import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "light" | "outline";
  className?: string;
};

const styles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-500 shadow-md shadow-brand-600/20",
  light: "bg-white text-navy-900 hover:bg-brand-50 shadow-md shadow-black/10",
  outline:
    "border border-white/40 text-white hover:bg-white/10 backdrop-blur-sm",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
