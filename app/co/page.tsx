import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Conscious Diver Co.",
  description:
    "The Conscious Diver Co.: sustainable eco-apparel and dive gear made for the water and built to last.",
};

const products = [
  {
    name: "Recycled Nylon Wetsuit",
    category: "Wetsuits",
    price: "$289",
    description:
      "3mm wetsuit made from regenerated ocean-plastic nylon, with a limestone-based neoprene alternative.",
  },
  {
    name: "Reef-Safe Rash Guard",
    category: "Apparel",
    price: "$58",
    description:
      "UPF 50+ sun protection in recycled polyester, cut for full range of motion underwater.",
  },
  {
    name: "Organic Cotton Dive Tee",
    category: "Apparel",
    price: "$34",
    description:
      "GOTS-certified organic cotton, printed with water-based inks and a low-impact dye process.",
  },
  {
    name: "Bamboo Fin Straps",
    category: "Gear",
    price: "$22",
    description:
      "Durable, corrosion-resistant fin strap replacements made from sustainably harvested bamboo composite.",
  },
  {
    name: "Ocean Plastic Mesh Bag",
    category: "Gear",
    price: "$45",
    description:
      "Rugged gear bag woven from reclaimed fishing nets collected through coastal cleanup partners.",
  },
  {
    name: "Reef-Safe Sunscreen Duo",
    category: "Essentials",
    price: "$26",
    description:
      "Mineral SPF 30 sunscreen, free of oxybenzone and octinoxate, in a refillable tin.",
  },
  {
    name: "Insulated Travel Bottle",
    category: "Essentials",
    price: "$32",
    description:
      "Double-walled stainless steel bottle that keeps dive-day water cold for 24 hours, plastic-free.",
  },
  {
    name: "Recycled Dive Log Journal",
    category: "Accessories",
    price: "$19",
    description:
      "Waterproof, tear-resistant pages made from stone paper, bound in recycled leather alternative.",
  },
];

export default function CoPage() {
  return (
    <div>
      <section className="bg-ocean-gradient py-20 text-white sm:py-28">
        <div className="container-page">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-seafoam-300">
            The Conscious Diver Co.
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Eco-apparel and gear built for the water
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ocean-100">
            Thoughtfully made wetsuits, apparel, and dive essentials using
            recycled and responsibly sourced materials — designed to
            outlast trends, not the planet.
          </p>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-ocean-900">
              Shop the collection
            </h2>
            <p className="mt-2 max-w-2xl text-ocean-700">
              A preview of what&apos;s coming to the store. Placeholder
              products for now — checkout is on the way.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.name}
              className="flex flex-col rounded-2xl border border-seafoam-100 bg-white p-5 shadow-sm"
            >
              <div
                aria-hidden="true"
                className="flex h-32 items-center justify-center rounded-xl bg-seafoam-50 text-3xl"
              >
                🩴
              </div>
              <span className="mt-4 text-xs font-semibold uppercase tracking-wide text-seafoam-600">
                {product.category}
              </span>
              <h3 className="mt-1 text-base font-semibold text-ocean-900">
                {product.name}
              </h3>
              <p className="mt-2 flex-1 text-sm text-ocean-700">
                {product.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-ocean-900">
                  {product.price}
                </span>
                <span className="rounded-full bg-ocean-100 px-3 py-1 text-xs font-medium text-ocean-700">
                  Coming soon
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-seafoam-50 py-16 sm:py-20">
        <div className="container-page grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-ocean-900">
              Recycled &amp; regenerated materials
            </h3>
            <p className="mt-2 text-sm text-ocean-700">
              From ocean-plastic nylon to limestone neoprene, we prioritize
              materials that reduce what&apos;s pulled from the earth.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-ocean-900">
              Small-batch production
            </h3>
            <p className="mt-2 text-sm text-ocean-700">
              We produce in limited runs to avoid overproduction and reduce
              excess inventory waste.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-ocean-900">
              Built to be repaired
            </h3>
            <p className="mt-2 text-sm text-ocean-700">
              Durable construction and a future repair program mean your
              gear stays out of landfills longer.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-16 text-center sm:py-20">
        <h2 className="text-3xl font-bold tracking-tight text-ocean-900">
          Want to know when we launch?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-ocean-700">
          The store is in the works. Reach out to be the first to hear when
          products go live.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-seafoam-500 px-6 py-3 text-sm font-semibold text-ocean-950 transition-colors hover:bg-seafoam-400"
        >
          Get notified
        </Link>
      </section>
    </div>
  );
}
