const stackGroups = [
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    label: "Design Systems",
    items: [
      "Radix UI",
      "Shadcn UI",
      "Storybook",
      "Figma",
      "Tokens Studio",
    ],
  },
  {
    label: "Performance",
    items: [
      "Lighthouse CI",
      "Web Vitals",
      "Bundle Analyzer",
      "Edge Functions",
      "RSC",
    ],
  },
  {
    label: "Tooling",
    items: [
      "Vitest",
      "Playwright",
      "GitHub Actions",
      "Turbo",
      "pnpm",
    ],
  },
];

export function StackSection() {
  return (
    <section id="stack" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <p className="mb-3 font-mono text-xs tracking-widest text-foreground/35 uppercase">
            Technology
          </p>
          <h2 className="max-w-md text-3xl font-semibold tracking-tight leading-snug">
            Carefully chosen tools, no excess.
          </h2>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stackGroups.map((group) => (
            <div key={group.label}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-foreground/35">
                {group.label}
              </p>
              <ul className="space-y-2" aria-label={`${group.label} tools`}>
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-foreground/65"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
