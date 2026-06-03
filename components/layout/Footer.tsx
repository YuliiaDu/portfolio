import Link from "next/link";
import { Button } from "@/components/buttons/Button";

const LINKS = [
  { href: "/projects", label: "Projects" },
  { href: "/about",    label: "About"    },
  { href: "/contact",  label: "Contact"  },
];

const SOCIAL = [
  { href: "https://dribbble.com/Yuliia_Dudareva",         label: "Dribbble"  },
  { href: "https://www.linkedin.com/in/yuliia-dudareva/", label: "LinkedIn"  },
  { href: "https://www.behance.net/yuliia_dudareva",      label: "Behance"   },
];

export function Footer() {
  return (
    <footer className="bg-ink text-canvas border-t border-dark-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-14 pb-10 md:pt-16 md:pb-12">

        {/* Top row — brand + columns */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-16">

          {/* Brand block */}
          <div className="flex-shrink-0 max-w-[22rem]">
            <Link href="/" className="font-display font-semibold text-[1.35rem] md:text-[1.5rem] tracking-tight text-canvas hover:text-ember transition-colors duration-300">
              Yuliia Dudareva
            </Link>
            <p className="mt-2 text-body-sm text-dark-text leading-relaxed">
              UI/UX & Product Designer crafting clear,<br className="hidden sm:block" /> intentional digital experiences.
            </p>
            <Button
              href="/contact"
              variant="secondary-accent"
              size="md"
              className="mt-5"
            >
              Get in touch
            </Button>
          </div>

          {/* Nav + Social — 2-col on mobile, inline on desktop */}
          <div className="grid grid-cols-2 gap-8 sm:gap-12 md:flex md:gap-16">
            {/* Nav */}
            <div>
              <p className="text-label uppercase tracking-widest text-dark-text mb-4">Pages</p>
              <ul className="space-y-2.5">
                {LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-body-sm text-canvas/60 hover:text-canvas transition-colors duration-300"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <p className="text-label uppercase tracking-widest text-dark-text mb-4">Follow</p>
              <ul className="space-y-2.5">
                {SOCIAL.map(({ href, label }) => (
                  <li key={href}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body-sm text-canvas/60 hover:text-canvas transition-colors duration-300"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-dark-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-label text-dark-text">
            © {new Date().getFullYear()} Yuliia Dudareva. All rights reserved.
          </p>
          <p className="text-label text-dark-text">
            Designed & built with intention.
          </p>
        </div>

      </div>
    </footer>
  );
}
