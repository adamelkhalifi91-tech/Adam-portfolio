import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
};

export function ArrowLink({ href, children, external, className }: ArrowLinkProps) {
  const classes = cn(
    "group inline-flex items-center gap-1 font-medium text-ink transition-colors duration-200 hover:text-ink/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2",
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      <ArrowUpRight
        strokeWidth={1.5}
        className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </>
  );

  if (external) {
    // Only open a new tab for web URLs; mailto/tel should hand off to the
    // device's app without leaving an empty blank tab behind.
    const isWebUrl = /^https?:/i.test(href);
    return (
      <a
        href={href}
        target={isWebUrl ? "_blank" : undefined}
        rel={isWebUrl ? "noreferrer noopener" : undefined}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
