import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Zap,
  Layers,
  AccessibilityIcon,
  Gauge,
  PaintBucket,
  Code2,
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Design Systems",
    description:
      "Scalable, token-based design systems that unify brand, accessibility, and development velocity.",
  },
  {
    icon: Zap,
    title: "Performance Engineering",
    description:
      "Core Web Vitals mastery — zero-layout-shift interfaces, optimal rendering strategies, and bundle precision.",
  },
  {
    icon: AccessibilityIcon,
    title: "Accessibility First",
    description:
      "WCAG 2.1 AA compliance, semantic HTML, keyboard navigation, and screen reader optimized interfaces.",
  },
  {
    icon: Gauge,
    title: "Production-Grade Code",
    description:
      "TypeScript, rigorous code boundaries, testable component APIs, and CI-enforced quality gates.",
  },
  {
    icon: PaintBucket,
    title: "Avant-Garde UI",
    description:
      "Intentional minimalism — strong hierarchy, deliberate whitespace, refined type, and restrained motion.",
  },
  {
    icon: Code2,
    title: "Full-Stack Awareness",
    description:
      "Deep understanding of API contracts, data flow, and server/client rendering boundaries in modern React.",
  },
];

export function FeaturesSection() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <p className="mb-3 font-mono text-xs tracking-widest text-foreground/35 uppercase">
            Capabilities
          </p>
          <h2 className="max-w-md text-3xl font-semibold tracking-tight leading-snug">
            Engineering craft meets design precision.
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="group hover:border-foreground/14 hover:bg-foreground/5 transition-all duration-200"
              >
                <CardHeader>
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-foreground/6 group-hover:bg-foreground/10 transition-colors">
                    <Icon className="h-4 w-4 text-foreground/60" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription className="mt-2">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
