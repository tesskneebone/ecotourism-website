export default function Footer() {
  return (
    <footer className="border-t border-ocean-100 bg-ocean-950 text-ocean-100">
      <div className="container-page flex flex-col items-start gap-4 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="flex items-center gap-2 text-lg font-semibold text-white">
            <span aria-hidden="true">🌊</span>
            The Conscious Diver
          </p>
          <p className="mt-2 max-w-sm text-sm text-ocean-200">
            Questions about the trip? Send a note through the form above, or
            reach out on Instagram.
          </p>
        </div>

        <a
          href="#signup"
          className="inline-block rounded-full bg-seafoam-500 px-4 py-2 text-sm font-medium text-ocean-950 transition-colors hover:bg-seafoam-400"
        >
          Reserve my spot
        </a>
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
