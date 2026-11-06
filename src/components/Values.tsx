import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { values } from "@/content/site";

export default function Values() {
  return (
    <section id="values" className="bg-mist-100 py-16 sm:py-24">
      <Container>
        <Reveal>
          <h2 className="text-center text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            {values.title}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.items.map((item, i) => (
            <Reveal
              key={item.title}
              as="article"
              delay={(i % 3) * 100}
              className="rounded-2xl bg-white p-7 shadow-lg shadow-navy-900/5 ring-1 ring-mist-200"
            >
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">
                {item.title}
              </h3>
              <p className="mt-4 leading-relaxed text-ink-700">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
