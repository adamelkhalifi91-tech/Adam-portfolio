import { cn } from "@/lib/cn";

type BadgeVariant = "live" | "in_progress" | "featured";

const variantClasses: Record<BadgeVariant, string> = {
  live: "border-line text-ink",
  in_progress: "border-line text-ink-muted",
  featured: "border-ink bg-ink text-ink-inverse",
};

const variantLabel: Record<BadgeVariant, string> = {
  live: "LIVE",
  in_progress: "IN PROGRESS",
  featured: "FEATURED",
};

type BadgeProps = {
  variant: BadgeVariant;
  children?: React.ReactNode;
  className?: string;
};

export function Badge({ variant, children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded border px-2 py-0.5 font-mono text-xs uppercase tracking-widest",
        variantClasses[variant],
        className,
      )}
    >
      {children ?? variantLabel[variant]}
    </span>
  );
}
