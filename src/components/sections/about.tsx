import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Text column */}
          <div className="space-y-6">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              About
            </p>
            <h2 className="text-balance text-4xl font-semibold tracking-tight">
              Designed for builders who care.
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                karlking·mode is a design system built on the principle that
                every visual decision should serve the user. No decorative
                noise, no gratuitous animation, no colour for colour&apos;s
                sake.
              </p>
              <p>
                Strong typographic hierarchy, deliberate whitespace, and
                restrained micro-interactions create interfaces that feel
                effortless to use and immediate to understand.
              </p>
            </div>
            <Button variant="outline" className="group gap-2" asChild>
              <a href="#contact">
                Get in touch
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* Stats column */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "100%", label: "TypeScript" },
              { value: "0", label: "Runtime CSS-in-JS" },
              { value: "WCAG AA", label: "Accessibility" },
              { value: "∞", label: "Composability" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-1 rounded-lg border border-border/60 p-6"
              >
                <span className="text-3xl font-semibold tracking-tight">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
