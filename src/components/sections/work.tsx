import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    year: "2024",
    title: "Apex Design System",
    category: "Design System",
    tags: ["React", "TypeScript", "Figma", "Storybook"],
    description:
      "End-to-end design system for a Series B fintech — 120+ components, full a11y audit, and a token pipeline that cut design-dev handoff by 60%.",
  },
  {
    year: "2024",
    title: "Meridian Dashboard",
    category: "SaaS",
    tags: ["Next.js", "Recharts", "Zustand"],
    description:
      "Real-time analytics dashboard handling 50k+ concurrent sessions. Optimized for LCP < 1.2s and zero CLS across all viewports.",
  },
  {
    year: "2023",
    title: "Onyx Commerce Platform",
    category: "E-Commerce",
    tags: ["Next.js", "Shopify", "Edge Functions"],
    description:
      "High-conversion storefront built on Next.js App Router with edge-personalization. Revenue uplift attributed to UX rearchitecture.",
  },
  {
    year: "2023",
    title: "Vanta Brand Refresh",
    category: "Brand UI",
    tags: ["Motion", "GSAP", "CSS"],
    description:
      "Full frontend brand refresh with custom motion design system, accessible parallax, and refined micro-interactions across marketing site.",
  },
];

export function WorkSection() {
  return (
    <section id="work" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <p className="mb-3 font-mono text-xs tracking-widest text-foreground/35 uppercase">
            Selected work
          </p>
          <h2 className="max-w-md text-3xl font-semibold tracking-tight leading-snug">
            Production systems built to last.
          </h2>
        </div>

        <div className="divide-y divide-foreground/8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col gap-4 py-8 transition-colors first:pt-0 last:pb-0 sm:flex-row sm:items-start sm:gap-12"
            >
              <div className="shrink-0 sm:w-12">
                <span className="font-mono text-xs text-foreground/30">
                  {project.year}
                </span>
              </div>

              <div className="flex-1 min-w-0">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <Badge variant="outline">{project.category}</Badge>
                </div>
                <p className="mb-4 max-w-xl text-sm leading-relaxed text-foreground/55">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-foreground/6 px-2 py-0.5 font-mono text-xs text-foreground/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="shrink-0 self-start">
                <Button
                  variant="ghost"
                  size="sm"
                  className="opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity"
                  aria-label={`View ${project.title}`}
                >
                  View
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
