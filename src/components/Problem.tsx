import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { problem } from "@/content/site";

export default function Problem() {
  return (
    <section className="bg-mist-100 py-16 sm:py-20">
      <Container>
        <Reveal className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            {problem.title}
          </h2>
          {problem.paragraphs.map((p, i) => (
            <p
              key={i}
              className={`mt-5 text-lg leading-relaxed text-ink-700 ${
                i === problem.paragraphs.length - 1 ? "italic" : ""
              }`}
            >
              {p}
            </p>
          ))}
          <p className="mt-6 text-lg font-semibold text-navy-900">{problem.closing}</p>
        </Reveal>
      </Container>
    </section>
  );
}
