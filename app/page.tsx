import Image from "next/image";
import Link from "next/link";

const values = [
  {
    title: "Ocean-first",
    body: "Every trip, garment, and dollar spent is weighed against its impact on reefs, wildlife, and coastal communities.",
    icon: "🐢",
  },
  {
    title: "Small by design",
    body: "Small-group expeditions and small-batch gear runs, because lighter footprints scale better than crowds.",
    icon: "🤿",
  },
  {
    title: "Built to last",
    body: "We choose durability and repairability over disposability — on the boat and in your closet.",
    icon: "♻️",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-ocean-gradient text-white">
        <div className="container-page relative z-10 py-24 sm:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-seafoam-300">
            The Conscious Diver
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Dive with purpose. Travel and gear up for the ocean you love.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ocean-100">
            The Conscious Diver is a home for two ideas that belong together:
            travel that protects the seas we explore, and gear made to
            minimize what we take from the planet to enjoy them.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/expeditions"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-ocean-900 transition-transform hover:scale-105"
            >
              Explore Expeditions
            </Link>
            <Link
              href="/co"
              className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              Shop The Co.
            </Link>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, white 0, transparent 35%), radial-gradient(circle at 80% 60%, white 0, transparent 30%)",
          }}
        />
      </section>

      <section className="bg-ocean-900 py-16 text-white sm:py-20">
        <div className="container-page grid items-center gap-10 md:grid-cols-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="/images/reef-survey-diver.jpg"
              alt="A diver in full scuba gear runs a measuring tape along a reef transect line, collecting data for a coral health survey while a second diver looks on."
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-seafoam-300">
              Conservation in Action
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              We dive with data sheets, not just cameras
            </h2>
            <p className="mt-4 max-w-xl text-ocean-100">
              On every expedition, our divers run reef transects, log coral
              health, and track wildlife alongside local marine scientists —
              real citizen-science work that helps protect the ecosystems we
              travel to explore.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ocean-900">
            One brand, two ways in
          </h2>
          <p className="mt-4 text-ocean-700">
            Whether you&apos;re booking your next dive trip or restocking your
            gear bag, both brands share the same commitment to conservation
            and conscious craftsmanship.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Link
            href="/expeditions"
            className="group flex flex-col justify-between rounded-3xl border border-ocean-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
          >
            <div>
              <span className="inline-flex items-center rounded-full bg-ocean-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ocean-700">
                Travel &amp; Conservation
              </span>
              <h3 className="mt-4 text-2xl font-bold text-ocean-900">
                Conscious Diver Expeditions
              </h3>
              <p className="mt-3 text-ocean-700">
                Small-group scuba travel to the world&apos;s most vital reefs,
                paired with conservation projects, marine science, and local
                guides who call these waters home.
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ocean-600 group-hover:text-ocean-800">
              View expeditions
              <span aria-hidden="true">&rarr;</span>
            </span>
          </Link>

          <Link
            href="/co"
            className="group flex flex-col justify-between rounded-3xl border border-seafoam-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
          >
            <div>
              <span className="inline-flex items-center rounded-full bg-seafoam-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-seafoam-700">
                Apparel &amp; Gear
              </span>
              <h3 className="mt-4 text-2xl font-bold text-ocean-900">
                The Conscious Diver Co.
              </h3>
              <p className="mt-3 text-ocean-700">
                Sustainably made dive and travel apparel, gear, and
                accessories — designed for the water, built to outlast
                trends.
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-seafoam-600 group-hover:text-seafoam-800">
              Shop the collection
              <span aria-hidden="true">&rarr;</span>
            </span>
          </Link>
        </div>
      </section>

      <section className="bg-ocean-100/60 py-16 sm:py-20">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold tracking-tight text-ocean-900">
            What holds it together
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl bg-white p-6 text-center shadow-sm"
              >
                <div className="text-3xl" aria-hidden="true">
                  {value.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ocean-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-ocean-700">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 text-center sm:py-20">
        <h2 className="text-3xl font-bold tracking-tight text-ocean-900">
          Ready to get in the water?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-ocean-700">
          Browse upcoming expeditions, shop the latest gear, or reach out —
          we&apos;re happy to help you plan your next conscious dive.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/expeditions"
            className="rounded-full bg-ocean-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ocean-700"
          >
            Plan a trip
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-ocean-300 px-6 py-3 text-sm font-semibold text-ocean-800 transition-colors hover:bg-ocean-100"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
