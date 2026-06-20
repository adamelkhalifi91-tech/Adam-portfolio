import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ToolCard } from "@/components/tools/ToolCard";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Tech-Bio suite — scientific tools built by Adam El Khalifi, including Biomatch, Sequence Analyzer, Primer Designer and an MS/MS Spectrum Viewer.",
};

export default function ToolsPage() {
  return (
    <main>
      <Container className="space-y-12 py-20 md:py-28">
        <header className="space-y-4">
          <p className="font-mono text-xs uppercase tracking-widest text-ink-subtle">
            Tools
          </p>
          <h1 className="text-4xl font-medium leading-[0.95] tracking-tight text-ink md:text-6xl">
            The Tech-Bio suite
          </h1>
          <p className="max-w-prose text-base leading-relaxed text-ink-muted">
            Independent tools that combine molecular science with software —
            from a scientific credibility platform to lightweight, privacy-first
            instruments that run entirely in the browser.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </Container>
    </main>
  );
}
