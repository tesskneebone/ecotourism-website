# The Conscious Diver

Marketing website for **The Conscious Diver**, the parent brand covering two
child brands:

- **Conscious Diver Expeditions** — scuba travel & conservation. Guided,
  small-group dive trips built around sustainable diving practices and
  conservation partnerships. See `/expeditions`.
- **The Conscious Diver Co.** — eco-apparel & gear retail. Sustainably made
  dive and travel apparel and gear. See `/co` (`/shop` redirects here).

This is an initial, content-placeholder build meant to be iterated on — it is
a marketing site, not an e-commerce or booking backend.

## Site map

| Route          | Purpose                                                        |
| -------------- | ---------------------------------------------------------------- |
| `/`            | Homepage introducing the parent brand and both child brands      |
| `/expeditions` | Conscious Diver Expeditions — sample trips, conservation focus   |
| `/co`          | The Conscious Diver Co. — sample product grid                    |
| `/shop`        | Redirects to `/co`                                                |
| `/contact`     | Contact page with a placeholder (non-functional) contact form    |

Navigation and footer (`components/Navbar.tsx`, `components/Footer.tsx`) are
shared across every page via `app/layout.tsx`.

## Stack

- [Next.js](https://nextjs.org/) 14 — App Router, TypeScript
- [Tailwind CSS](https://tailwindcss.com/) for styling
- ESLint (`eslint-config-next`) for linting

No backend, database, or CMS is wired up yet. The contact form and product
listings are static placeholders.

## Getting started

Requires Node.js 18.18+ (Node 20+ recommended).

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # lint the project
```

## Design notes

- Palette is ocean/nature-inspired: deep navy/teal ("ocean") and green
  ("seafoam") scales defined in `tailwind.config.ts`.
- Copy across `/expeditions`, `/co`, and `/contact` is placeholder,
  on-brand text meant to be replaced with real trips, products, and contact
  details before launch.
