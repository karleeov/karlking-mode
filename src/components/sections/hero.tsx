import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 pt-16">
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"
      />

      <div className="mx-auto max-w-3xl space-y-8 text-center animate-fade-in">
        <Badge variant="outline" className="gap-1.5 px-3 py-1 text-xs font-medium">
          <Zap className="h-3 w-3" />
          Avant-garde design system
        </Badge>

        <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
          Build with{" "}
          <span className="text-muted-foreground">intentional</span>{" "}
          precision.
        </h1>

        <p className="mx-auto max-w-xl text-balance text-lg text-muted-foreground">
          A minimal design system that prioritises hierarchy, whitespace, and
          purposeful motion — every pixel earns its place.
        </p>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button size="lg" className="group gap-2" asChild>
            <a href="#features">
              Get started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#about">Learn more</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 flex flex-col items-center gap-1.5 text-xs text-muted-foreground/60"
      >
        <span>scroll</span>
        <span className="block h-8 w-px bg-border" />
      </div>
    </section>
  );
}
