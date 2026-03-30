import Link from "next/link";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
];

export function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-foreground/6 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight"
          aria-label="karlking-mode home"
        >
          <span className="font-mono text-xs font-bold tracking-widest uppercase opacity-40">
            ♔
          </span>
          <span>karlking</span>
          <span className="rounded-sm bg-foreground/10 px-1.5 py-0.5 text-xs font-mono tracking-wide opacity-60">
            mode
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-1.5 text-sm text-foreground/60 transition-colors hover:bg-foreground/6 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button variant="outline" size="sm" asChild>
          <Link href="#contact">Get in touch</Link>
        </Button>
      </div>
    </header>
  );
}
