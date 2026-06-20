import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { cvData } from "@/lib/cv-data";

export function Education() {
  return (
    <Section eyebrow="Education" title="Education">
      <div className="space-y-px border border-line bg-line">
        {cvData.education.map((entry) => (
          <article
            key={entry.degree}
            className="space-y-4 bg-paper p-6 md:p-8"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="space-y-1">
                <h3 className="text-xl font-medium text-ink">
                  {entry.degree}
                </h3>
                <p className="text-sm text-ink-muted">
                  {entry.institution} · {entry.location}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-widest text-ink-subtle">
                  {entry.period}
                </span>
                <Badge variant="in_progress">{entry.status}</Badge>
              </div>
            </div>
            <ul className="space-y-2">
              {entry.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-3 text-sm leading-relaxed text-ink-muted"
                >
                  <span aria-hidden className="select-none text-ink-subtle">
                    —
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
