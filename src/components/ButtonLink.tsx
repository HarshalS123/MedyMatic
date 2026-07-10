import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  const styles = {
    primary: "bg-brand-red text-white hover:bg-red-700",
    secondary: "bg-brand-dark text-white hover:bg-black",
    ghost: "border border-brand-line bg-white text-brand-ink hover:border-brand-red hover:text-brand-red",
  };

  return (
    <Link
      to={href}
      className={`focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-3xl px-5 py-3 text-sm font-bold transition ${styles[variant]}`}
    >
      {children}
      <ArrowRight aria-hidden="true" size={17} />
    </Link>
  );
}
