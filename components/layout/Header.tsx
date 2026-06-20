import Link from "next/link";
import { Container } from "./Container";
import { NavLink } from "@/components/ui/NavLink";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-paper/72 backdrop-blur-xl">
      <Container>
        <div className="flex h-12 items-center justify-between">
          <Link
            href="/"
            className="text-[13px] font-medium text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2"
          >
            Adam El Khalifi
          </Link>
          <nav className="flex items-center gap-6">
            <NavLink href="/">Work</NavLink>
            <NavLink href="/cv">CV</NavLink>
            <NavLink href="/tools">Tools</NavLink>
            <NavLink href="/about">About</NavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
}
