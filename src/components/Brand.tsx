import Image from "next/image";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { brand, site } from "@/content/site";

export default function Brand() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container className="grid items-center gap-12 md:grid-cols-2">
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl shadow-navy-900/15">
            <Image
              src={brand.image}
              alt={brand.imageAlt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={150}>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-600">
            {brand.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            {brand.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-700">{brand.body}</p>
          <div className="mt-8">
            <Button href={site.ctaHref}>{site.ctaLabel}</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
