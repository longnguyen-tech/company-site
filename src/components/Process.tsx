import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { process } from "@/content/site";

export default function Process() {
  return (
    <section id="process" className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal>
          <h2 className="text-center text-3xl font-bold uppercase tracking-[0.15em] text-navy-900 sm:text-4xl">
            {process.title}
          </h2>
        </Reveal>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, i) => (
            <Reveal
              key={step.title}
              as="li"
              delay={i * 100}
              className="relative rounded-2xl bg-mist-100 p-7 ring-1 ring-mist-200"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-5 text-xs font-bold uppercase tracking-[0.25em] text-brand-600">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-700">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
