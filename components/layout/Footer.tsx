import { Container } from "./Container";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { cvData } from "@/lib/cv-data";
import { contactHref } from "@/lib/contact";

export function Footer() {
  const { identity } = cvData;

  const links = [
    identity.github ? { label: "GitHub", href: identity.github, external: true } : null,
    identity.linkedin
      ? { label: "LinkedIn", href: identity.linkedin, external: true }
      : null,
    { label: "Email", href: contactHref, external: true },
  ].filter(
    (item): item is { label: string; href: string; external: boolean } =>
      item !== null,
  );

  return (
    <footer className="mt-24 border-t border-line/60 py-12 md:mt-32">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="space-y-1">
            <p className="font-medium text-ink">Adam El Khalifi</p>
            <p className="text-sm text-ink-subtle">
              Designed and built by Adam, 2026.
            </p>
          </div>

          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-widest text-ink-subtle">
              Links
            </p>
            <nav className="flex flex-col gap-2">
              {links.map((link) => (
                <ArrowLink
                  key={link.label}
                  href={link.href}
                  external={link.external}
                  className="text-sm"
                >
                  {link.label}
                </ArrowLink>
              ))}
            </nav>
          </div>

          <p className="font-mono text-xs uppercase tracking-widest text-ink-subtle">
            v1.0
          </p>
        </div>
      </Container>
    </footer>
  );
}
