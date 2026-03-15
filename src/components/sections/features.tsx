import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Layers,
  Accessibility,
  Gauge,
  Palette,
  Code2,
  Moon,
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Composable primitives",
    description:
      "Every component is built on accessible Radix UI primitives, fully composable and override-ready.",
    badge: "Foundation",
  },
  {
    icon: Accessibility,
    title: "Accessible by default",
    description:
      "ARIA attributes, keyboard navigation, and focus management handled at the primitive level — nothing bolted on.",
    badge: "A11y",
  },
  {
    icon: Gauge,
    title: "Performance-first",
    description:
      "No runtime CSS-in-JS. Tailwind utility classes compile to a minimal static stylesheet — zero render-blocking.",
    badge: "Speed",
  },
  {
    icon: Palette,
    title: "Design tokens",
    description:
      "CSS custom properties drive every colour, radius, and spacing decision — swap a theme without touching components.",
    badge: "Tokens",
  },
  {
    icon: Code2,
    title: "TypeScript native",
    description:
      "Full type safety across every component API. No `any` escape hatches, no ambiguous props.",
    badge: "Types",
  },
  {
    icon: Moon,
    title: "Dark mode",
    description:
      "Class-based dark mode via next-themes. Persists across sessions, respects OS preference on first load.",
    badge: "Themes",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto max-w-6xl space-y-16">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Capabilities
          </p>
          <h2 className="text-balance text-4xl font-semibold tracking-tight">
            Everything you need. Nothing you don&apos;t.
          </h2>
          <p className="text-balance text-muted-foreground">
            A focused set of primitives engineered for real products — not
            demos.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="group relative overflow-hidden border-border/60 transition-shadow hover:shadow-md"
              >
                <CardHeader className="pb-2">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border/60 bg-muted/40">
                      <Icon className="h-5 w-5 text-foreground/70" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-base">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
