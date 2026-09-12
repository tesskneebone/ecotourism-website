import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ocean-100 bg-ocean-950 text-ocean-100">
      <div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="flex items-center gap-2 text-lg font-semibold text-white">
            <span aria-hidden="true">🌊</span>
            The Conscious Diver
          </p>
          <p className="mt-3 max-w-xs text-sm text-ocean-200">
            Diving lightly, exploring deeply. One parent brand, two ways to
            live it: expeditions that protect the ocean, and gear made to
            last.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ocean-300">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/expeditions" className="hover:text-white">
                Expeditions
              </Link>
            </li>
            <li>
              <Link href="/co" className="hover:text-white">
                The Conscious Diver Co.
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ocean-300">
            Our brands
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-ocean-200">
            <li>Conscious Diver Expeditions — scuba travel &amp; conservation</li>
            <li>The Conscious Diver Co. — eco-apparel &amp; gear</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ocean-300">
            Stay in touch
          </h3>
          <p className="mt-4 text-sm text-ocean-200">
            Questions about a trip or an order? Reach out any time.
          </p>
          <Link
            href="/contact"
            className="mt-3 inline-block rounded-full bg-seafoam-500 px-4 py-2 text-sm font-medium text-ocean-950 transition-colors hover:bg-seafoam-400"
          >
            Contact us
          </Link>
        </div>
      </div>

      <div className="border-t border-ocean-800/60">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-ocean-300 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} The Conscious Diver. All rights reserved.</p>
          <p>Made for the ocean, one dive at a time.</p>
        </div>
      </div>
    </footer>
  );
}
