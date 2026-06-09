"use client";

import Link from "next/link";

interface ButtonProps {
  href: string;
  children?: React.ReactNode;
  variant?: "primary" | "primary-accent" | "secondary" | "secondary-accent" | "secondary-dark" | "link" | "icon";
  size?: "sm" | "md" | "lg";
  arrow?: boolean;
  iconOnly?: boolean;
  arrowUpRight?: boolean;
  dark?: boolean;
  className?: string;
  target?: string;
  rel?: string;
}

export function Button({ 
  href, 
  children, 
  variant = "primary", 
  size = "md",
  arrow = false,
  iconOnly = false,
  arrowUpRight = false,
  dark = false,
  className = "",
  target,
  rel
}: ButtonProps) {
  const baseClasses = "group inline-flex items-center font-medium rounded-full transition-all duration-300";
  
  const variantClasses = {
    primary: "bg-ink text-canvas hover:bg-ember",
    "primary-accent": "bg-ember text-canvas hover:bg-canvas hover:text-ink transition-all duration-300",
    secondary: "bg-transparent text-stone border border-mist hover:text-ink hover:border-ink",
    "secondary-accent": iconOnly
      ? "flex-shrink-0 w-10 h-10 rounded-full border border-canvas/30 group-hover:border-ember group-hover:bg-ember/10 flex items-center justify-center transition-all duration-300"
      : "border border-dark-border text-canvas hover:border-ember hover:text-ember",
    "secondary-dark": iconOnly
      ? "flex-shrink-0 w-10 h-10 rounded-full border border-mist group-hover:bg-ink group-hover:border-ink flex items-center justify-center transition-all duration-300"
      : dark 
        ? "border border-dark-border text-canvas hover:border-ember hover:text-ember" 
        : "border border-ink hover:bg-ink hover:text-canvas",
    link: "bg-transparent text-stone underline-ember hover:text-ink transition-colors duration-300",
    icon: "flex-shrink-0 w-10 h-10 rounded-full border border-canvas/30 group-hover:border-ember group-hover:bg-ember/10 flex items-center justify-center transition-all duration-300"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2.5 text-body-sm",
    md: "px-5 py-2.5 text-body-sm",
    lg: "px-6 py-3.5 text-body-sm"
  };

  // Link variant doesn't need size classes
  const linkClasses = "text-body-sm font-medium text-stone underline-ember hover:text-ink transition-colors duration-300";

  // Icon-only variant
  if (iconOnly) {
    const iconVariantClass = variantClasses[variant as keyof typeof variantClasses] || variantClasses.icon;
    // Determine icon color based on variant
    const iconColorClass = variant === "secondary-dark" 
      ? "text-ink group-hover:text-canvas" 
      : "text-canvas group-hover:text-ember";
    return (
      <Link href={href} className={iconVariantClass} target={target} rel={rel}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className={`${iconColorClass} transition-colors duration-300 ${arrowUpRight ? "-rotate-45" : ""}`}
        >
          <path
            d="M2 7h10M7 2l5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    );
  }

  if (variant === "link") {
    return (
      <Link href={href} className={linkClasses} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      target={target}
      rel={rel}
    >
      {children}
      {arrow && (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          <path
            d="M2 7h10M7 2l5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </Link>
  );
}