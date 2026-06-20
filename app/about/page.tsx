import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { aboutCopy } from "@/content/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Adam El Khalifi Tagzouti — biotechnologist working at the seam between molecular wet-lab research and software.",
};

export default function AboutPage() {
  return (
    <main>
      <Container className="py-20 md:py-28">
        <div className="max-w-prose space-y-8">
          <header className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-widest text-ink-subtle">
              About
            </p>
            <h1 className="text-4xl font-medium leading-[0.95] tracking-tight text-ink md:text-6xl">
              At the seam between two worlds.
            </h1>
          </header>
          <div className="space-y-6">
            {aboutCopy.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-relaxed text-ink-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
