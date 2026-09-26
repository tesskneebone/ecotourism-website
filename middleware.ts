import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Site is currently single-page: everything except the homepage,
// static assets, and API routes redirects to "/". Remove this file to
// restore the rest of the site (expeditions list, Co., contact, etc.).
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname === "/" ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
