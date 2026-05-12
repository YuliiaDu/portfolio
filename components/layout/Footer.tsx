import Link from "next/link";

const LINKS = [
  { href: "/projects", label: "Projects" },
  { href: "/about",    label: "About"    },
  { href: "/contact",  label: "Contact"  },
];

const SOCIAL = [
  { href: "https://dribbble.com/Yuliia_Dudareva",  label: "Dribbble"  },
  { href: "https://www.linkedin.com/in/yuliia-dudareva/",  label: "LinkedIn"  },
  { href: "https://www.behance.net/yuliia_dudareva",   label: "Behance"   },
];

export function Footer() {
  return (
    <footer className="bg-ink text-canvas">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-display font-semibold text-display-md text-canvas mb-3">
              Yuliia Dudareva
            </p>
            <p className="text-body-sm text-dark-text max-w-[28ch]">
              UI/UX & Product Designer crafting clear, intentional experiences.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-label uppercase tracking-widest text-dark-text mb-5">Navigate</p>
            <ul className="space-y-3">
              {LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-body-sm text-canvas/70 hover:text-canvas transition-colors duration-300 underline-ember"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-label uppercase tracking-widest text-dark-text mb-5">Elsewhere</p>
            <ul className="space-y-3">
              {SOCIAL.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-sm text-canvas/70 hover:text-canvas transition-colors duration-300 underline-ember"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-dark-border">
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
