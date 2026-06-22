import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Hero } from "@/components/hero/Hero";
import { ToolCard } from "@/components/tools/ToolCard";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { heroCopy } from "@/content/hero";
import { contactHref } from "@/lib/contact";
import { tools } from "@/lib/tools";

export default function HomePage() {
  const featured = tools.find((tool) => tool.featured);
  const rest = tools.filter((tool) => !tool.featured && tool.slug !== "msms-viewer");
  const showcase = featured ? [featured, ...rest].slice(0, 3) : rest.slice(0, 3);

  return (
    <main>
      <Container>
        <Hero />

        <div className="py-16 md:py-24">
          <Section
            eyebrow={heroCopy.selectedEyebrow}
            title={heroCopy.selectedTitle}
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              {showcase.map((tool) => (
                <ToolCard
                  key={tool.slug}
                  tool={tool}
                  className={tool.featured ? "md:col-span-2" : undefined}
                />
              ))}
            </div>
            <p className="mt-8 text-base">
              <ArrowLink href="/tools">See all tools</ArrowLink>
            </p>
          </Section>
        </div>

        <section className="pb-24 md:pb-32">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-ink-subtle">
            {heroCopy.approachEyebrow}
          </p>
          <p className="max-w-prose text-base leading-relaxed text-ink-muted md:text-lg">
            {heroCopy.approachBody}
          </p>
          <p className="mt-16 max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
            {heroCopy.closingTitle}
          </p>
          <p className="mt-10 text-base">
            <ArrowLink href={contactHref} external>
              {heroCopy.contactLabel}
            </ArrowLink>
          </p>
        </section>
      </Container>
    </main>
  );
}
