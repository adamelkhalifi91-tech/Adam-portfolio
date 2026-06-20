import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ToolCard } from "@/components/tools/ToolCard";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Tech-Bio suite by Adam El Khalifi: Biomatch, Sequence Analyzer, Primer Designer and an MS/MS Spectrum Viewer.",
};

export default function ToolsPage() {
  const featured = tools.find((tool) => tool.featured);
  const rest = tools.filter((tool) => !tool.featured);

  return (
    <main>
      <Container className="py-20 md:py-28">
        <header className="mb-12">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-ink-subtle">
            Tools
          </p>
          <h1 className="text-4xl font-semibold leading-[0.95] tracking-tight text-ink md:text-6xl">
            Open-source Tech-Bio tools and one platform.
          </h1>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-ink-muted md:text-lg">
            Independent tools that combine molecular science with software, from
            a scientific credibility platform to lightweight, privacy-first
            instruments that run entirely in the browser.
          </p>
        </header>

        <div className="space-y-6 md:space-y-8">
          {featured && <ToolCard tool={featured} />}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {rest.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </div>

        <section className="mt-24 border-t border-line/60 pt-12 md:mt-32">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-ink-subtle">
            Status
          </p>
          <p className="max-w-prose text-base leading-relaxed text-ink-muted">
            The suite is in active development. Each tool links to its live demo
            and source repository as soon as it is deployed. Until then, the
            cards describe what each one does and the stack behind it.
          </p>
        </section>
      </Container>
    </main>
  );
}
