import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { contact, site } from "@/content/site";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-16 sm:py-24">
      <Container className="grid items-start gap-12 md:grid-cols-2">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            {contact.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-700">{contact.body}</p>
          <dl className="mt-8 space-y-3 text-ink-700">
            <div className="flex gap-3">
              <dt className="w-20 font-semibold text-navy-900">Email</dt>
              <dd>
                <a href={`mailto:${site.email}`} className="text-brand-600 hover:underline">
                  {site.email}
                </a>
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-20 font-semibold text-navy-900">Phone</dt>
              <dd>
                <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="hover:underline">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-20 font-semibold text-navy-900">Address</dt>
              <dd>{site.location}</dd>
            </div>
          </dl>
          <div className="relative mt-10 hidden aspect-[16/10] overflow-hidden rounded-2xl shadow-xl shadow-navy-900/15 md:block">
            <Image
              src={contact.image}
              alt={contact.imageAlt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={150}>
          <ContactForm />
        </Reveal>
      </Container>
    </section>
  );
}
