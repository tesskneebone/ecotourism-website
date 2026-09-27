import type { Metadata } from "next";
import SignupForm from "@/components/SignupForm";
import {
  stats,
  itinerary,
  activities,
  included,
  addOns,
  notIncluded,
  paymentSchedule,
} from "@/lib/belize-trip";

export const metadata: Metadata = {
  title: "Belize Reef Expedition — Reserve Your Spot",
  description:
    "A 10-day, small-group dive trip to Belize: the Great Blue Hole out of San Pedro, a week of hands-on marine conservation work with ReefCI in Placencia, and PADI certifications along the way. Only 12 spots per departure.",
};

export default function HomePage() {
  return (
    <div>
      <section className="bg-ocean-gradient py-20 text-white sm:py-28">
        <div className="container-page">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-seafoam-300">
            Conscious Diver Expeditions
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Belize Reef Expedition
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ocean-100">
            A 10-day small-group trip built around the Great Blue Hole out
            of San Pedro and a week of hands-on reef conservation work with
            ReefCI in Placencia, closing with a night back in San Pedro
            before you fly home.
          </p>
          <p className="mt-3 max-w-xl text-sm font-medium text-seafoam-200">
            All are welcome — this is a friendly, kind, educational
            environment for every background and experience level.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#signup"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-ocean-900 transition-transform hover:scale-105"
            >
              Reserve my spot
            </a>
            <a
              href="#pricing"
              className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              See pricing
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur"
              >
                <dt className="text-xs font-semibold uppercase tracking-wide text-seafoam-300">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-xl font-bold">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="pricing" className="container-page py-16 sm:py-20">
        <h2 className="text-3xl font-bold tracking-tight text-ocean-900">
          Pricing
        </h2>
        <p className="mt-2 max-w-2xl text-ocean-700">
          Choose the tier that fits your schedule and certification level.
          Only 12 spots per departure.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border-2 border-ocean-400 bg-white p-8 shadow-sm">
            <span className="inline-flex items-center rounded-full bg-ocean-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ocean-700">
              Full expedition
            </span>
            <h3 className="mt-4 text-xl font-bold text-ocean-900">
              Days 1–10
            </h3>
            <p className="mt-2 text-4xl font-bold text-ocean-900">
              $2,225
              <span className="text-base font-medium text-ocean-600">
                {" "}
                / person
              </span>
            </p>
            <p className="mt-3 text-sm text-ocean-700">
              San Pedro arrival, two days of diving including the Blue Hole
              (3 dives), the water taxi down to Placencia, the full
              conservation week, and a night back in San Pedro before you
              fly home.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-ocean-500">
              17+ dives total
            </p>
          </div>

          <div className="rounded-3xl border border-ocean-100 bg-white p-8 shadow-sm">
            <span className="inline-flex items-center rounded-full bg-seafoam-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-seafoam-700">
              Conservation week only
            </span>
            <h3 className="mt-4 text-xl font-bold text-ocean-900">
              Join Sunday night
            </h3>
            <p className="mt-2 text-4xl font-bold text-ocean-900">
              $1,550
              <span className="text-base font-medium text-ocean-600">
                {" "}
                / person
              </span>
            </p>
            <p className="mt-3 text-sm text-ocean-700">
              Skip San Pedro and the Blue Hole — fly directly into Placencia
              and join Sunday night in time for Monday&apos;s 9:30am boat,
              then travel back through San Pedro with the group for the
              return night before flying home.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-ocean-500">
              12–13 dives total
            </p>
            <p className="mt-4 border-t border-ocean-100 pt-3 text-xs text-ocean-500">
              Working toward Open Water certification? This tier is
              recommended — landing Sunday puts you right on schedule for
              Monday&apos;s certification dives.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-ocean-100 bg-white shadow-sm">
          <div className="border-b border-ocean-100 p-6">
            <h3 className="font-semibold text-ocean-900">Payment schedule</h3>
            <p className="mt-1 text-sm text-ocean-700">
              Paid via Venmo to{" "}
              <span className="font-mono font-semibold text-ocean-900">
                @tess-kneebone
              </span>
              . Include your name in the memo for each payment.
            </p>
          </div>
          <div className="flex flex-col divide-y divide-ocean-100">
            {paymentSchedule.map((payment) => (
              <div
                key={payment.label}
                className="grid gap-1 p-6 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6"
              >
                <div>
                  <p className="font-medium text-ocean-900">
                    {payment.label}
                  </p>
                  <p className="text-sm text-ocean-600">{payment.due}</p>
                </div>
                <p className="whitespace-nowrap font-mono text-sm font-semibold text-ocean-900">
                  {payment.amount}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-sm text-ocean-700">
          Refunds are granted for whatever is possible depending on when
          they&apos;re requested — we recommend picking up travel insurance
          to cover the rest.
        </p>
      </section>

      <section id="signup" className="bg-ocean-100/60 py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-ocean-900">
              Reserve your spot
            </h2>
            <p className="mt-3 text-ocean-700">
              Only 12 spots per departure. Two steps to lock yours in.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-xl">
            <div className="rounded-2xl border-2 border-seafoam-300 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-seafoam-500 text-sm font-bold text-white">
                  1
                </span>
                <div>
                  <h3 className="font-semibold text-ocean-900">
                    Send your $600 nonrefundable deposit on Venmo
                  </h3>
                  <p className="mt-1 text-sm text-ocean-700">
                    Send{" "}
                    <span className="font-mono font-semibold text-ocean-900">
                      $600
                    </span>{" "}
                    to{" "}
                    <span className="font-mono font-semibold text-ocean-900">
                      @tess-kneebone
                    </span>{" "}
                    on Venmo. Include your full name in the memo so we can
                    match it to your reservation. This is the first of three
                    payments — see the full schedule above.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-4 border-t border-ocean-100 pt-6">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-seafoam-500 text-sm font-bold text-white">
                  2
                </span>
                <div>
                  <h3 className="font-semibold text-ocean-900">
                    Fill out the form below
                  </h3>
                  <p className="mt-1 text-sm text-ocean-700">
                    So we know it&apos;s you and can confirm your spot and
                    trip details.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <SignupForm />
            </div>

            <p className="mt-6 text-center text-sm text-ocean-700">
              Please feel free to reach out to Tess via text or email at{" "}
              <a
                href="tel:+17818795405"
                className="font-medium text-ocean-900 underline underline-offset-2 hover:text-ocean-600"
              >
                (781) 879-5405
              </a>{" "}
              or{" "}
              <a
                href="mailto:tesskneebone@gmail.com"
                className="font-medium text-ocean-900 underline underline-offset-2 hover:text-ocean-600"
              >
                tesskneebone@gmail.com
              </a>{" "}
              with any questions.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <h2 className="text-3xl font-bold tracking-tight text-ocean-900">
          Itinerary
        </h2>
        <div className="mt-10 flex flex-col divide-y divide-ocean-200 rounded-3xl border border-ocean-100 bg-white shadow-sm">
          {itinerary.map((stop) => (
            <div
              key={stop.day}
              className="grid gap-2 p-6 sm:grid-cols-[100px_1fr] sm:gap-6"
            >
              <span className="font-mono text-sm font-semibold text-ocean-500">
                {stop.day}
              </span>
              <div>
                <h3 className="font-semibold text-ocean-900">{stop.title}</h3>
                <p className="mt-1 text-sm text-ocean-700">{stop.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ocean-100/60 py-16 sm:py-20">
        <div className="container-page">
          <h2 className="text-3xl font-bold tracking-tight text-ocean-900">
            What we&apos;ll be doing
          </h2>
          <p className="mt-2 max-w-2xl text-ocean-700">
            The conservation week is ReefCI&apos;s all-inclusive marine
            conservation program on a private island on the Belize Barrier
            Reef. Your week will include most, though maybe not all, of the
            following.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity) => (
              <div
                key={activity.title}
                className="rounded-2xl border border-ocean-100 bg-white p-6 shadow-sm"
              >
                <h3 className="font-semibold text-ocean-900">
                  {activity.title}
                </h3>
                <p className="mt-2 text-sm text-ocean-700">{activity.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <h2 className="text-3xl font-bold tracking-tight text-ocean-900">
          What&apos;s included &amp; what&apos;s not
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border-2 border-seafoam-300 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-ocean-900">
              In the base price
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-ocean-700">
              {included.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true" className="text-seafoam-600">
                    &#10003;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-ocean-100 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-ocean-900">Optional add-ons</h3>
            <ul className="mt-4 space-y-3 text-sm text-ocean-700">
              {addOns.map((item) => (
                <li key={item.name} className="flex justify-between gap-3">
                  <span>{item.name}</span>
                  <span className="whitespace-nowrap font-mono text-ocean-500">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 border-t border-ocean-100 pt-3 text-xs text-ocean-500">
              PADI eLearning ($125–$250, paid directly to PADI) is required
              in advance for most certifications and isn&apos;t included
              above.
            </p>
          </div>

          <div className="rounded-2xl border border-ocean-100 bg-ocean-50 p-6">
            <h3 className="font-semibold text-ocean-900">Not included</h3>
            <ul className="mt-4 space-y-2 text-sm text-ocean-700">
              {notIncluded.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true" className="text-ocean-400">
                    &#8211;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-ocean-100/60 py-16 sm:py-20">
        <div className="container-page">
          <h2 className="text-3xl font-bold tracking-tight text-ocean-900">
            Good to know
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-ocean-100 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-ocean-900">Logistics</h3>
              <ul className="mt-4 space-y-2 text-sm text-ocean-700">
                <li>Ages 13–80 welcome</li>
                <li>
                  Fly into San Pedro (SPR) for the Full Expedition, or
                  Placencia (PLJ) for Conservation Week Only — both tiers
                  fly out of San Pedro (SPR) at the end
                </li>
                <li>
                  Meet the boat: Hokey Pokey dock, Placencia, 9:30am Mon
                </li>
                <li>
                  No certification required to join the conservation
                  week — but San Pedro diving (Days 2–3) requires an
                  existing Open Water certification or higher
                </li>
                <li>
                  Open Water certification or higher required for the
                  Blue Hole trip; recent diving experience recommended
                </li>
                <li>
                  The Blue Hole trip needs a minimum of 10 divers to run —
                  we coordinate with other travelers to help meet that
                </li>
                <li>
                  Our group of up to 12 travels together, but the island
                  hosts up to 25 guests a week — you may share it with other
                  travelers
                </li>
                <li>
                  All backgrounds & experience levels welcome — a friendly,
                  kind, educational environment
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-ocean-100 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-ocean-900">
                Safety on the island
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-ocean-700">
                <li>PADI instructors & divemasters on staff</li>
                <li>Emergency oxygen & AED on site</li>
                <li>
                  Starlink internet, two boats & radio contact with Belize
                  Coast Guard
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ocean-gradient py-16 text-center text-white sm:py-20">
        <div className="container-page">
          <h2 className="text-3xl font-bold tracking-tight">
            Diving led by women, built around community, in service of the
            reef.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ocean-100">
            Every guest on this trip dives alongside a small, close group
            instead of a crowded boat. The week&apos;s work goes straight
            into reef surveys used by the conservation program you&apos;re
            certifying through — you leave with a certification card and a
            real stake in the water you dove in.
          </p>
          <a
            href="#signup"
            className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-ocean-900 transition-transform hover:scale-105"
          >
            Reserve my spot
          </a>
        </div>
      </section>
    </div>
  );
}
