import { Section } from "@/components/layout/Section";
import { cvData } from "@/lib/cv-data";

export function Logistics() {
  const { logistics } = cvData;

  const items = [
    { label: "Citizenship", value: logistics.citizenship },
    { label: "Mobility", value: logistics.mobility },
    { label: "Working language", value: logistics.workingLanguage },
  ];

  return (
    <Section eyebrow="Logistics" title="Availability">
      <dl className="grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-3">
        {items.map((item) => (
          <div key={item.label} className="bg-paper p-6">
            <dt className="font-mono text-xs uppercase tracking-widest text-ink-subtle">
              {item.label}
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-ink">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
