import { Section } from "@/components/layout/Section";
import { cvData } from "@/lib/cv-data";

export function Research() {
  return (
    <Section eyebrow="Research" title="Research experience">
      <div className="space-y-px border border-line bg-line">
        {cvData.research.map((entry) => (
          <article key={entry.title} className="space-y-4 bg-paper p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="space-y-1">
                <h3 className="text-xl font-medium text-ink">{entry.title}</h3>
                <p className="text-sm text-ink-muted">
                  {entry.institution} · {entry.location}
                </p>
              </div>
              <span className="shrink-0 font-mono text-xs uppercase tracking-widest text-ink-subtle">
                {entry.period}
              </span>
            </div>
            <ul className="space-y-2">
              {entry.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-3 text-sm leading-relaxed text-ink-muted"
                >
                  <span
                    aria-hidden
                    className="mt-2 size-1 shrink-0 rounded-full bg-ink-subtle"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
