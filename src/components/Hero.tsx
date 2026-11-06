import Image from "next/image";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { hero, site } from "@/content/site";

export default function Hero() {
  return (
    <section id="top" className="bg-white py-16 sm:py-24">
      <Container className="grid items-center gap-12 md:grid-cols-2">
        <Reveal>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-navy-900 sm:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-700">{hero.body}</p>
          <div className="mt-8">
            <Button href={site.ctaHref}>{site.ctaLabel}</Button>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl shadow-navy-900/15">
            <Image
              src={hero.image}
              alt={hero.imageAlt}
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
