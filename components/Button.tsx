import Link from "next/link";
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline-primary"
  | "outline-secondary"
  | "gradient";

type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

// Jab href diya ho -> anchor/link jaisa behave karega
interface ButtonAsLink
  extends BaseButtonProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "href"> {
  href: string;
}

// Jab href na ho -> normal button jaisa behave karega
interface ButtonAsButton
  extends BaseButtonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: undefined;
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-[var(--primary-color)] text-white hover:brightness-90",
  secondary: "bg-[var(--secondary-color)] text-white hover:brightness-90",
  "outline-primary":
    "bg-transparent text-[var(--primary-color)] border-2 border-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white",
  "outline-secondary":
    "bg-transparent text-[var(--secondary-color)] border-2 border-[var(--secondary-color)] hover:bg-[var(--secondary-color)] hover:text-white",
  gradient:
    "text-white bg-[linear-gradient(120deg,var(--primary-color)_50%,var(--secondary-color)_100%)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-base",
  lg: "px-9 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full font-semibold font-[Space_Grotesk] transition-all duration-200 ease-in-out cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "href" | "children">)}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(props as Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">)}
    >
      {children}
    </button>
  );
}