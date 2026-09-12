import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expeditions",
  description:
    "Conscious Diver Expeditions: small-group scuba travel and conservation trips built around sustainable diving practices.",
};

const trips = [
  {
    name: "Coral Triangle Restoration",
    location: "Raja Ampat, Indonesia",
    length: "10 days",
    group: "Max 8 divers",
    description:
      "Dive some of the richest reef systems on Earth while assisting local marine biologists with coral restoration surveys.",
    tags: ["Conservation", "Reef survey", "Advanced"],
  },
  {
    name: "Manta Ray Research Expedition",
    location: "Nusa Penida, Bali",
    length: "7 days",
    group: "Max 10 divers",
    description:
      "Join a citizen-science project tracking manta ray populations, with daily dives at cleaning stations and feeding sites.",
    tags: ["Citizen science", "Wildlife", "Open water+"],
  },
  {
    name: "Shark Sanctuary Journey",
    location: "Fakarava, French Polynesia",
    length: "8 days",
    group: "Max 8 divers",
    description:
      "Drift through the Tumakohua Pass shark wall and learn how local sanctuaries protect apex predators from overfishing.",
    tags: ["Sharks", "Marine protected area", "Advanced"],
  },
  {
    name: "Mesoamerican Reef Cleanup",
    location: "Belize Barrier Reef",
    length: "6 days",
    group: "Max 12 divers",
    description:
      "A hands-on trip combining reef dives with ghost-net removal and beach cleanups alongside local conservation groups.",
    tags: ["Cleanup", "Community", "Open water"],
  },
  {
    name: "Cold Water Kelp Forests",
    location: "Monterey Bay, California",
    length: "4 days",
    group: "Max 8 divers",
    description:
      "Explore towering kelp forests and help document sea otter and rockfish populations with regional researchers.",
    tags: ["Cold water", "Research", "Drysuit"],
  },
  {
    name: "Whale Shark Migration",
    location: "Isla Mujeres, Mexico",
    length: "5 days",
    group: "Max 10 divers",
    description:
      "Snorkel and free-dive alongside migrating whale sharks under strict, wildlife-first interaction guidelines.",
    tags: ["Snorkel", "Wildlife", "All levels"],
  },
];

const practices = [
  {
    title: "Reef-safe by default",
    body: "Every itinerary follows no-touch, neutral-buoyancy diving standards, and we vet operators for reef-safe mooring and anchoring practices.",
  },
  {
    title: "Small groups, lighter footprint",
    body: "We cap group sizes well below industry norms so dive sites — and local infrastructure — aren't overwhelmed.",
  },
  {
    title: "Conservation built in",
    body: "A portion of every trip funds the local marine protected areas and research partners we dive with.",
  },
  {
    title: "Community-led",
    body: "We partner with local dive operators and guides, keeping tourism revenue in the communities that steward these waters.",
  },
];

export default function ExpeditionsPage() {
  return (
    <div>
      <section className="bg-ocean-gradient py-20 text-white sm:py-28">
        <div className="container-page">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-seafoam-300">
            Conscious Diver Expeditions
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Scuba travel that gives back to the ocean
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ocean-100">
            Small-group expeditions to the reefs, migrations, and marine
            sanctuaries that need conscious travelers most — led by local
            guides, grounded in conservation.
          </p>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-ocean-900">
              Upcoming expeditions
            </h2>
            <p className="mt-2 max-w-2xl text-ocean-700">
              A sample of the trips on our calendar. Placeholder listings for
              now — full booking details are on the way.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trips.map((trip) => (
            <article
              key={trip.name}
              className="flex flex-col rounded-2xl border border-ocean-100 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-ocean-900">
                {trip.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-ocean-600">
                {trip.location}
              </p>
              <p className="mt-3 flex-1 text-sm text-ocean-700">
                {trip.description}
              </p>
              <dl className="mt-4 flex gap-4 text-xs text-ocean-600">
                <div>
                  <dt className="font-semibold uppercase tracking-wide text-ocean-400">
                    Length
                  </dt>
                  <dd>{trip.length}</dd>
                </div>
                <div>
                  <dt className="font-semibold uppercase tracking-wide text-ocean-400">
                    Group size
                  </dt>
                  <dd>{trip.group}</dd>
                </div>
              </dl>
              <div className="mt-4 flex flex-wrap gap-2">
                {trip.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-seafoam-50 px-3 py-1 text-xs font-medium text-seafoam-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ocean-100/60 py-16 sm:py-20">
        <div className="container-page">
          <h2 className="text-3xl font-bold tracking-tight text-ocean-900">
            Sustainable diving practices
          </h2>
          <p className="mt-3 max-w-2xl text-ocean-700">
            Every expedition is built around the same principles, whatever
            the destination.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {practices.map((practice) => (
              <div
                key={practice.title}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-ocean-900">
                  {practice.title}
                </h3>
                <p className="mt-2 text-sm text-ocean-700">{practice.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 text-center sm:py-20">
        <h2 className="text-3xl font-bold tracking-tight text-ocean-900">
          Have a destination in mind?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-ocean-700">
          We&apos;re adding new expeditions regularly. Get in touch and
          we&apos;ll help you find the right trip.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-ocean-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ocean-700"
        >
          Contact our trip planners
        </Link>
      </section>
    </div>
  );
}
