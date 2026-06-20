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
    "group inline-flex items-center gap-1 text-ink underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-1 focus-visible:outline-ink",
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
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className={classes}>
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
