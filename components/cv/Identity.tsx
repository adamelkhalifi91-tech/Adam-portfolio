import { ArrowLink } from "@/components/ui/ArrowLink";
import { cvData } from "@/lib/cv-data";

export function Identity() {
  const { identity } = cvData;

  return (
    <header className="space-y-6">
      <div className="space-y-3">
        <p className="font-mono text-xs uppercase tracking-widest text-ink-subtle">
          {identity.headline}
        </p>
        <h1 className="text-4xl font-medium leading-[0.95] tracking-tight text-ink md:text-6xl">
          {identity.name}
        </h1>
      </div>
      <p className="max-w-prose text-base leading-relaxed text-ink-muted">
        {identity.subhead}
      </p>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
        <span className="text-ink-muted">{identity.location}</span>
        <ArrowLink href={`mailto:${identity.email}`} external>
          {identity.email}
        </ArrowLink>
        {identity.linkedin && (
          <ArrowLink href={identity.linkedin} external>
            LinkedIn
          </ArrowLink>
        )}
        {identity.github && (
          <ArrowLink href={identity.github} external>
            GitHub
          </ArrowLink>
        )}
      </div>
    </header>
  );
}
