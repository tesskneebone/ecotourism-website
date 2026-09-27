"use client";

import { useState, type FormEvent } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzezawao";

type Status = "idle" | "submitting" | "success" | "error";

export default function SignupForm({ id }: { id?: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        id={id}
        className="rounded-2xl border border-seafoam-200 bg-seafoam-50 p-6 text-center sm:p-8"
      >
        <p className="text-lg font-semibold text-seafoam-800">
          You&apos;re on the list! 🌊
        </p>
        <p className="mt-2 text-sm text-seafoam-700">
          We&apos;ll follow up with next steps and payment details shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className="rounded-2xl border border-ocean-100 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label
            htmlFor="signup-name"
            className="block text-sm font-medium text-ocean-800"
          >
            Name
          </label>
          <input
            id="signup-name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-lg border border-ocean-200 px-3 py-2 text-sm text-ocean-950 focus:border-ocean-500 focus:outline-none focus:ring-1 focus:ring-ocean-500"
          />
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="signup-email"
            className="block text-sm font-medium text-ocean-800"
          >
            Email
          </label>
          <input
            id="signup-email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-lg border border-ocean-200 px-3 py-2 text-sm text-ocean-950 focus:border-ocean-500 focus:outline-none focus:ring-1 focus:ring-ocean-500"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="signup-tier"
            className="block text-sm font-medium text-ocean-800"
          >
            Which trip are you interested in?
          </label>
          <select
            id="signup-tier"
            name="tier"
            defaultValue="Full expedition — $2,200"
            className="mt-1 w-full rounded-lg border border-ocean-200 bg-white px-3 py-2 text-sm text-ocean-950 focus:border-ocean-500 focus:outline-none focus:ring-1 focus:ring-ocean-500"
          >
            <option>Full expedition — $2,200</option>
            <option>Conservation week only — $1,400</option>
            <option>Not sure yet</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="signup-message"
            className="block text-sm font-medium text-ocean-800"
          >
            Questions or anything we should know? (optional)
          </label>
          <textarea
            id="signup-message"
            name="message"
            rows={3}
            className="mt-1 w-full rounded-lg border border-ocean-200 px-3 py-2 text-sm text-ocean-950 focus:border-ocean-500 focus:outline-none focus:ring-1 focus:ring-ocean-500"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full rounded-full bg-ocean-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ocean-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Reserve my spot"}
      </button>

      {status === "error" && (
        <p className="mt-3 text-sm text-red-600">
          Something went wrong sending that — please try again, or email us
          directly.
        </p>
      )}

      <p className="mt-4 text-xs text-ocean-500">
        Don&apos;t forget step 1: send your $600 nonrefundable deposit to
        @tess-kneebone on Venmo before (or right after) submitting this
        form. Two more payments follow: $600 two months before departure,
        then the remaining balance one month before departure.
      </p>
    </form>
  );
}
