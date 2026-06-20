type SectionProps = {
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  id?: string;
};

export function Section({ eyebrow, title, children, id }: SectionProps) {
  return (
    <section id={id} className="space-y-8">
      {(eyebrow || title) && (
        <header className="space-y-3">
          {eyebrow && (
            <p className="font-mono text-xs uppercase tracking-widest text-ink-subtle">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-3xl font-medium tracking-tight text-ink md:text-4xl">
              {title}
            </h2>
          )}
        </header>
      )}
      {children}
    </section>
  );
}
