import Image from "next/image";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { banner, site } from "@/content/site";

export default function CtaBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900 py-16 text-white sm:py-20">
      <Image
        src={banner.image}
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover opacity-25"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-900/90 to-navy-800/80" />
      <Container>
        <Reveal className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {banner.title}
            </h2>
            <p className="mt-2 text-base text-white/80">{banner.body}</p>
          </div>
          <Button href={site.ctaHref} variant="light" className="shrink-0">
            {site.ctaLabel}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
