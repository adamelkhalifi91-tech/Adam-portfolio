import { ArrowLink } from "@/components/ui/ArrowLink";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { cvData } from "@/lib/cv-data";

export function Identity() {
  const { identity } = cvData;

  return (
    <header className="space-y-6">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="space-y-3">
          <p className="font-mono text-xs uppercase tracking-widest text-ink-subtle">
            {identity.headline}
          </p>
          <h1 className="text-4xl font-semibold leading-[0.95] tracking-tight text-ink md:text-6xl">
            {identity.name}
          </h1>
        </div>
        {/* TODO: drop a real cv.pdf into /public to make this download work */}
        <PrimaryButton href="/cv.pdf" external size="sm" className="shrink-0">
          Download PDF
        </PrimaryButton>
      </div>
      <p className="max-w-prose text-base leading-relaxed text-ink-muted">
        {identity.subhead}
      </p>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
        <span className="text-ink-muted">{identity.location}</span>
        <ArrowLink href={`mailto:${identity.email}`} external className="text-sm">
          {identity.email}
        </ArrowLink>
        {identity.linkedin && (
          <ArrowLink href={identity.linkedin} external className="text-sm">
            LinkedIn
          </ArrowLink>
        )}
        {identity.github && (
          <ArrowLink href={identity.github} external className="text-sm">
            GitHub
          </ArrowLink>
        )}
      </div>
    </header>
  );
}
