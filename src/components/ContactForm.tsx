"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/content/site";

const inputClass =
  "mt-1 w-full rounded-lg border border-mist-200 bg-white px-4 py-3 text-ink-900 placeholder:text-ink-500 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const company = String(data.get("company") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(`Discovery call request from ${name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl bg-mist-100 p-7 ring-1 ring-mist-200 sm:p-9"
      aria-label="Contact form"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-navy-900">
          Name
          <input name="name" required autoComplete="name" className={inputClass} placeholder="Jane Doe" />
        </label>
        <label className="block text-sm font-semibold text-navy-900">
          Work email
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="jane@company.com"
          />
        </label>
      </div>
      <label className="mt-5 block text-sm font-semibold text-navy-900">
        Company
        <input name="company" autoComplete="organization" className={inputClass} placeholder="Company name" />
      </label>
      <label className="mt-5 block text-sm font-semibold text-navy-900">
        How can we help?
        <textarea
          name="message"
          required
          rows={5}
          className={inputClass}
          placeholder="Tell us about your systems, your team and what you'd like to improve."
        />
      </label>
      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand-600/20 transition-colors hover:bg-brand-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
      >
        {site.ctaLabel}
      </button>
      <p className="mt-4 text-xs text-ink-500" aria-live="polite">
        {sent
          ? "Your email client should now be open with your message. If it isn't, email us directly at " +
            site.email +
            "."
          : "Submitting opens your email client with a pre-filled message to " + site.email + "."}
      </p>
    </form>
  );
}
