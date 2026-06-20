import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { ToolMeta } from "@/components/tools/ToolMeta";
import { tools } from "@/lib/tools";

export function Projects() {
  const featured = tools.find((tool) => tool.featured);
  const suite = tools.filter((tool) => !tool.featured);

  return (
    <Section eyebrow="Projects" title="Selected work">
      <div className="space-y-4">
        {featured && (
          <Card padding="lg" className="space-y-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="space-y-2">
                <h3 className="text-2xl font-medium tracking-tight text-ink">
                  {featured.name}
                </h3>
                <p className="text-ink">{featured.oneLiner}</p>
              </div>
              <Badge variant="featured">FEATURED</Badge>
            </div>
            <p className="max-w-prose text-sm leading-relaxed text-ink-muted">
              {featured.description}
            </p>
            <ToolMeta stack={featured.stack} />
            {(featured.demoUrl || featured.repoUrl) && (
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                {featured.demoUrl && (
                  <ArrowLink href={featured.demoUrl} external>
                    Live demo
                  </ArrowLink>
                )}
                {featured.repoUrl && (
                  <ArrowLink href={featured.repoUrl} external>
                    Source
                  </ArrowLink>
                )}
              </div>
            )}
          </Card>
        )}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {suite.map((tool) => (
            <Card key={tool.slug} className="flex h-full flex-col gap-3">
              <div className="flex items-start justify-between gap-3">
                <h4 className="text-base font-medium text-ink">{tool.name}</h4>
                <Badge variant="in_progress">IN PROGRESS</Badge>
              </div>
              <p className="text-sm leading-relaxed text-ink-muted">
                {tool.oneLiner}
              </p>
              <div className="mt-auto pt-2">
                <ToolMeta stack={tool.stack} />
              </div>
            </Card>
          ))}
        </div>

        <p className="pt-2 text-sm">
          <ArrowLink href="/tools">See all tools</ArrowLink>
        </p>
      </div>
    </Section>
  );
}
