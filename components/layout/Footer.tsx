import { Container } from "./Container";
import { cvData } from "@/lib/cv-data";

export function Footer() {
  const { identity } = cvData;

  const socials = [
    identity.github ? { label: "GitHub", href: identity.github } : null,
    identity.linkedin ? { label: "LinkedIn", href: identity.linkedin } : null,
    { label: "Email", href: `mailto:${identity.email}` },
  ].filter((item): item is { label: string; href: string } => item !== null);

  return (
    <footer className="mt-24 border-t border-line py-10 md:mt-32">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="space-y-1">
            <p className="font-medium text-ink">Adam El Khalifi</p>
            <p className="text-sm text-ink-muted">
              Built and designed by Adam, 2026
            </p>
          </div>
          <nav className="flex flex-col gap-2 md:flex-row md:gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer noopener"
                className="text-sm text-ink-muted underline-offset-4 transition-colors duration-200 hover:text-ink hover:underline focus-visible:outline focus-visible:outline-1 focus-visible:outline-ink"
              >
                {social.label}
              </a>
            ))}
          </nav>
          <p className="font-mono text-xs uppercase tracking-widest text-ink-subtle">
            v1.0
          </p>
        </div>
      </Container>
    </footer>
  );
}
