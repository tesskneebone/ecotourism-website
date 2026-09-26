import Link from "next/link";

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

        <a
          href="#signup"
          className="rounded-full bg-ocean-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-ocean-700"
        >
          Reserve my spot
        </a>
      </nav>
    </header>
  );
}
