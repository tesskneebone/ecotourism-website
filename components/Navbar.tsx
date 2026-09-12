import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/expeditions", label: "Expeditions" },
  { href: "/co", label: "Co." },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ocean-100 bg-ocean-50/90 backdrop-blur">
      <nav
        aria-label="Primary"
        className="container-page flex h-16 items-center justify-between"
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-ocean-900"
        >
          <span aria-hidden="true" className="text-xl">
            🌊
          </span>
          The Conscious Diver
        </Link>

        <ul className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-ocean-800 transition-colors hover:bg-ocean-100 hover:text-ocean-950 sm:px-4"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
