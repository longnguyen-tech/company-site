import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { expect } from "@/content/site";

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 shrink-0 text-brand-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m8.5 12.5 2.5 2.5 4.5-5" />
    </svg>
  );
}

export default function Expect() {
  return (
    <section className="bg-mist-100 py-16 sm:py-24">
      <Container className="grid items-center gap-12 md:grid-cols-2">
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl shadow-navy-900/15">
            <Image
              src={expect.image}
              alt={expect.imageAlt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={150}>
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            {expect.title}
          </h2>
          <ul className="mt-8 space-y-5">
            {expect.items.map((item) => (
              <li key={item} className="flex items-center gap-4 text-lg text-ink-700">
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
