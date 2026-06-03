"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/buttons/Button";

const NAV_LINKS = [
  { href: "/projects", label: "Projects" },
  { href: "/about",    label: "About"    },
  { href: "/contact",  label: "Contact"  },
];

export function Navbar() {
  const pathname = usePathname();
  const isDark = pathname === "/contact";
  const { scrollY } = useScroll();

  // On light pages: fade in canvas bg on scroll. On dark pages: always dark bg.
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const bgOpacity     = useTransform(scrollY, [0, 80], [0, 0.85]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={isDark ? {
        borderBottomColor: "rgba(42, 42, 42, 1)",
        borderBottomWidth: 1,
        borderBottomStyle: "solid",
      } : {
        borderBottomColor: `rgba(232, 230, 225, ${borderOpacity.get()})`,
        borderBottomWidth: 1,
        borderBottomStyle: "solid",
      }}
    >
      {/* Blurred background */}
      {isDark ? (
        <div className="absolute inset-0 backdrop-blur-md bg-ink/90" />
      ) : (
        <motion.div
          className="absolute inset-0 backdrop-blur-md"
          style={{ opacity: bgOpacity, backgroundColor: "rgba(249,248,246,0.85)" }}
        />
      )}

      <nav className="relative max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        {/* Logo / Name */}
        <Link
          href="/"
          className={cn(
            "font-display font-semibold text-[1.05rem] tracking-tight underline-ember transition-colors duration-300",
            isDark ? "text-canvas hover:text-ember" : ""
          )}
          aria-label="Yuliia Dudareva — Home"
        >
          Yuliia Dudareva
        </Link>

        {/* Links */}
        <ul className="flex items-center gap-5 md:gap-8">
          {NAV_LINKS.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "relative text-body-sm font-medium transition-colors duration-300",
                    isDark
                      ? active ? "text-canvas" : "text-dark-text hover:text-canvas"
                      : active ? "text-ink"    : "text-stone hover:text-ink"
                  )}
                >
                  {label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-0.5 left-0 right-0 h-px bg-ember"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <Button
          href="/contact"
          variant="secondary-dark"
          size="md"
          dark={isDark}
          className="hidden md:flex items-center gap-2"
        >
          Let's talk
        </Button>
      </nav>
    </motion.header>
  );
}
