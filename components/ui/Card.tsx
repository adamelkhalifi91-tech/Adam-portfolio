import { cn } from "@/lib/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  padding?: "default" | "lg";
};

export function Card({
  children,
  className,
  interactive = false,
  padding = "default",
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-line bg-paper",
        padding === "lg" ? "p-10" : "p-8",
        interactive &&
          "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft-hover",
        className,
      )}
    >
      {children}
    </div>
  );
}
