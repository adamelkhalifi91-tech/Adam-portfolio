import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { aboutCopy } from "@/content/about";
import { cvData } from "@/lib/cv-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Adam El Khalifi Tagzouti, a biotechnologist working at the seam between molecular wet-lab research and software.",
};

export default function AboutPage() {
  return (
    <main>
      <Container className="py-20 md:py-28">
        <div className="max-w-prose">
          <header className="mb-12">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-ink-subtle">
              {aboutCopy.eyebrow}
            </p>
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-6xl">
              {aboutCopy.title}
            </h1>
          </header>
          <div className="space-y-6">
            {aboutCopy.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-relaxed text-ink-muted md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <p className="mt-12 text-base">
            <ArrowLink href={`mailto:${cvData.identity.email}`} external>
              {aboutCopy.contactLabel}
            </ArrowLink>
          </p>
        </div>
      </Container>
    </main>
  );
}
