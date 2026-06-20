import { Section } from "@/components/layout/Section";
import { cvData } from "@/lib/cv-data";

export function Languages() {
  return (
    <Section eyebrow="Languages" title="Languages">
      <dl className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-3">
        {cvData.languages.map((language) => (
          <div key={language.name} className="bg-paper p-6">
            <dt className="text-base font-medium text-ink">{language.name}</dt>
            <dd className="mt-1 font-mono text-xs uppercase tracking-widest text-ink-subtle">
              {language.level}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
