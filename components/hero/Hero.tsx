import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { heroCopy } from "@/content/hero";

export function Hero() {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center py-16 md:py-24">
      <p className="font-mono text-xs uppercase tracking-widest text-ink-subtle">
        {heroCopy.eyebrow}
      </p>
      <p className="mt-8 text-2xl font-medium tracking-tight text-ink md:text-3xl">
        {heroCopy.nameLead}
      </p>
      <h1 className="mt-2 max-w-5xl text-6xl font-semibold leading-[0.95] tracking-tight text-ink md:text-8xl">
        {heroCopy.h1}
      </h1>
      <p className="mt-8 max-w-3xl text-xl font-normal leading-snug text-ink-muted md:text-2xl">
        {heroCopy.subtitle}
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-6">
        <PrimaryButton href={heroCopy.primaryCta.href}>
          {heroCopy.primaryCta.label}
        </PrimaryButton>
        <ArrowLink href={heroCopy.secondaryCta.href} className="text-base">
          {heroCopy.secondaryCta.label}
        </ArrowLink>
      </div>
    </section>
  );
}
