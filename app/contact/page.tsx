import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with The Conscious Diver about expeditions, gear, or partnership opportunities.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="bg-ocean-gradient py-20 text-white sm:py-28">
        <div className="container-page">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-seafoam-300">
            Contact
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s talk conservation, trips, or gear
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ocean-100">
            Whether you&apos;re planning an expedition, have a question about
            an order, or want to partner with us, we&apos;d love to hear from
            you.
          </p>
        </div>
      </section>

      <section className="container-page grid gap-12 py-16 sm:py-20 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <h2 className="text-2xl font-bold tracking-tight text-ocean-900">
            Send us a message
          </h2>
          <p className="mt-2 text-sm text-ocean-700">
            This form is a placeholder for now — submissions aren&apos;t
            connected to anything yet, but the design is ready to wire up.
          </p>

          <form className="mt-8 space-y-6" aria-label="Contact form">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-ocean-900"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="mt-2 block w-full rounded-lg border border-ocean-200 bg-white px-4 py-2.5 text-ocean-900 shadow-sm focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-300"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-ocean-900"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-2 block w-full rounded-lg border border-ocean-200 bg-white px-4 py-2.5 text-ocean-900 shadow-sm focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-300"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="topic"
                className="block text-sm font-medium text-ocean-900"
              >
                I&apos;m interested in
              </label>
              <select
                id="topic"
                name="topic"
                className="mt-2 block w-full rounded-lg border border-ocean-200 bg-white px-4 py-2.5 text-ocean-900 shadow-sm focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-300"
                defaultValue="expeditions"
              >
                <option value="expeditions">
                  Conscious Diver Expeditions
                </option>
                <option value="co">The Conscious Diver Co.</option>
                <option value="partnership">Partnership / press</option>
                <option value="other">Something else</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-ocean-900"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-2 block w-full rounded-lg border border-ocean-200 bg-white px-4 py-2.5 text-ocean-900 shadow-sm focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-300"
              />
            </div>

            <button
              type="submit"
              className="rounded-full bg-ocean-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ocean-700"
            >
              Send message
            </button>
          </form>
        </div>

        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-ocean-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-ocean-900">
              Other ways to reach us
            </h2>
            <dl className="mt-4 space-y-4 text-sm text-ocean-700">
              <div>
                <dt className="font-semibold text-ocean-900">Expeditions</dt>
                <dd>expeditions@theconsciousdiver.com</dd>
              </div>
              <div>
                <dt className="font-semibold text-ocean-900">
                  Shop &amp; orders
                </dt>
                <dd>hello@theconsciousdiverco.com</dd>
              </div>
              <div>
                <dt className="font-semibold text-ocean-900">
                  Partnerships &amp; press
                </dt>
                <dd>partners@theconsciousdiver.com</dd>
              </div>
            </dl>
            <p className="mt-6 text-xs text-ocean-500">
              Placeholder contact details — update before launch.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
