"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const active = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "text-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-1 focus-visible:outline-ink",
        active
          ? "border-b border-ink text-ink"
          : "text-ink-muted hover:text-ink",
      )}
    >
      {children}
    </Link>
  );
}
