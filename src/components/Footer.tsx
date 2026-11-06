import Link from "next/link";
import Container from "@/components/Container";
import Logo from "@/components/Logo";
import { site } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950 py-12 text-white">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <Link href="#top" aria-label={`${site.shortName} home`}>
          <Logo variant="light" />
        </Link>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/80">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
      <Container className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row md:justify-between">
        <p>
          © {year} {site.legalName}. All rights reserved.
        </p>
        <p className="flex flex-col gap-1 md:items-end">
          <span>{site.location}</span>
          <span>
            <a href={`mailto:${site.email}`} className="hover:text-white">
              {site.email}
            </a>
            {" · "}
            <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="hover:text-white">
              {site.phone}
            </a>
          </span>
        </p>
      </Container>
    </footer>
  );
}
