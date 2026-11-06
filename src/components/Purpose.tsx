import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { purpose } from "@/content/site";

export default function Purpose() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            {purpose.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-700">{purpose.body}</p>
        </Reveal>
      </Container>
    </section>
  );
}
