import Link from "next/link";
import { Container } from "./Container";
import { NavLink } from "@/components/ui/NavLink";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/80 backdrop-blur">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <Link
            href="/"
            className="font-medium text-ink focus-visible:outline focus-visible:outline-1 focus-visible:outline-ink"
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
