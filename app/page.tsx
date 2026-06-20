import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ToolCard } from "@/components/tools/ToolCard";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { cn } from "@/lib/cn";
import { heroCopy } from "@/content/hero";
import { tools } from "@/lib/tools";

function HeroCta({
  href,
  label,
  primary,
}: {
  href: string;
  label: string;
  primary?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-1.5 rounded border px-4 py-2 text-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-1 focus-visible:outline-ink",
        primary
          ? "border-ink bg-ink text-ink-inverse hover:bg-paper hover:text-ink"
          : "border-line text-ink hover:border-ink",
      )}
    >
      {label}
      <ArrowUpRight
        strokeWidth={1.5}
        className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}

export default function HomePage() {
  const featured = tools.filter((tool) => tool.featured);
  const rest = tools.filter((tool) => !tool.featured);
  const showcase = [...featured, ...rest].slice(0, 3);

  return (
    <main>
      <Container className="space-y-24 py-20 md:space-y-32 md:py-28">
        <section className="space-y-8">
          <h1 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-tight text-ink md:text-7xl">
            {heroCopy.h1}
          </h1>
          <p className="max-w-prose text-base leading-relaxed text-ink-muted">
            {heroCopy.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <HeroCta
              href={heroCopy.primaryCta.href}
              label={heroCopy.primaryCta.label}
              primary
            />
            <HeroCta
              href={heroCopy.secondaryCta.href}
              label={heroCopy.secondaryCta.label}
            />
          </div>
        </section>

        <Section eyebrow={heroCopy.approachEyebrow} title="How I work">
          <p className="max-w-prose text-base leading-relaxed text-ink-muted">
            {heroCopy.approachBody}
          </p>
        </Section>

        <Section eyebrow="Work" title="Selected tools">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {showcase.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
          <p className="pt-2 text-sm">
            <ArrowLink href="/tools">See all tools</ArrowLink>
          </p>
        </Section>

        <section className="border-t border-line pt-10">
          <p className="max-w-prose text-xl font-medium tracking-tight text-ink md:text-2xl">
            {heroCopy.closingLine}
          </p>
        </section>
      </Container>
    </main>
  );
}
