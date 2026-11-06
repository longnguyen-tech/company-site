import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { services } from "@/content/site";

export default function Services() {
  return (
    <section id="services" className="bg-mist-100 py-16 sm:py-24">
      <Container>
        <Reveal>
          <h2 className="text-center text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            {services.title}
          </h2>
        </Reveal>
        <div className="mt-12 flex flex-col gap-8">
          {services.items.map((item, i) => (
            <Reveal
              key={item.title}
              as="article"
              delay={i * 80}
              className="overflow-hidden rounded-2xl bg-white shadow-lg shadow-navy-900/5 ring-1 ring-mist-200 md:grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]"
            >
              <div className="relative aspect-[16/9] md:aspect-auto md:min-h-[260px]">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-7 sm:p-9">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">
                  {item.title}
                </h3>
                <p className="mt-4 leading-relaxed text-ink-700">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
