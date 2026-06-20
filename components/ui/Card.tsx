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
        "border border-line bg-paper shadow-card",
        padding === "lg" ? "p-8" : "p-6",
        interactive && "transition-shadow duration-200 hover:shadow-card-hover",
        className,
      )}
    >
      {children}
    </div>
  );
}
