import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { ToolMeta } from "./ToolMeta";
import { cn } from "@/lib/cn";
import type { Tool } from "@/lib/tools";

type ToolCardProps = {
  tool: Tool;
  className?: string;
};

export function ToolCard({ tool, className }: ToolCardProps) {
  const badgeVariant = tool.featured
    ? "featured"
    : tool.status === "live"
      ? "live"
      : "in_progress";

  const badgeLabel = tool.featured
    ? "FEATURED"
    : tool.status === "live"
      ? "LIVE"
      : "IN PROGRESS";

  return (
    <Card interactive className={cn("flex h-full flex-col gap-5", className)}>
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-medium text-ink">{tool.name}</h3>
        <Badge variant={badgeVariant}>{badgeLabel}</Badge>
      </div>

      <div className="space-y-3">
        <p className="text-ink">{tool.oneLiner}</p>
        <p className="text-sm leading-relaxed text-ink-muted">
          {tool.description}
        </p>
      </div>

      <div className="mt-auto space-y-5 pt-2">
        <ToolMeta stack={tool.stack} />
        {(tool.demoUrl || tool.repoUrl) && (
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {tool.demoUrl && (
              <ArrowLink href={tool.demoUrl} external>
                Live demo
              </ArrowLink>
            )}
            {tool.repoUrl && (
              <ArrowLink href={tool.repoUrl} external>
                Source
              </ArrowLink>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}
