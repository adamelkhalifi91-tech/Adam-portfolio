import Link from "next/link";
import { cn } from "@/lib/cn";

type PrimaryButtonProps = {
  href: string;
  children: React.ReactNode;
  size?: "default" | "sm";
  external?: boolean;
  className?: string;
};

export function PrimaryButton({
  href,
  children,
  size = "default",
  external,
  className,
}: PrimaryButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full bg-ink font-medium text-ink-inverse transition-colors duration-200 hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2",
    size === "sm" ? "px-4 py-2 text-sm" : "px-6 py-3 text-base",
    className,
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
