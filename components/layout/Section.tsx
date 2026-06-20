type SectionProps = {
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  id?: string;
};

export function Section({ eyebrow, title, children, id }: SectionProps) {
  return (
    <section id={id}>
      {(eyebrow || title) && (
        <header className="mb-12">
          {eyebrow && (
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-ink-subtle">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-5xl">
              {title}
            </h2>
          )}
        </header>
      )}
      {children}
    </section>
  );
}
