import { Section } from "@/components/layout/Section";
import { cvData } from "@/lib/cv-data";

function SkillList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="space-y-4">
      <h3 className="font-mono text-xs uppercase tracking-widest text-ink-subtle">
        {title}
      </h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-md border border-line px-3 py-1 text-sm text-ink-muted"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  const { skills } = cvData;

  return (
    <Section eyebrow="Skills" title="Skills">
      <div className="space-y-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <SkillList title="Laboratory & Analytical" items={skills.laboratory} />
          <SkillList
            title="Computational & Software"
            items={skills.computational}
          />
        </div>
        <SkillList title="Business & Strategy" items={skills.business} />
      </div>
    </Section>
  );
}
