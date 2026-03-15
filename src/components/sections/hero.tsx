import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Twitter } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[92vh] flex-col justify-end pb-24 pt-32">
      {/* Subtle geometric accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 h-[480px] w-[480px] rounded-full bg-gradient-to-bl from-amber-400/6 via-transparent to-transparent blur-3xl"
      />

      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-3xl">
          <Badge variant="accent" className="mb-8">
            Available for select projects
          </Badge>

          <h1 className="mb-8 text-5xl font-semibold leading-[1.12] tracking-[-0.03em] text-foreground sm:text-6xl lg:text-7xl">
            Senior Frontend
            <br />
            <span className="text-foreground/35">Architect &amp;</span>
            <br />
            UI Designer
          </h1>

          <p className="mb-12 max-w-xl text-lg leading-relaxed text-foreground/55">
            15+ years building production UI systems, design systems, and
            performance-focused frontend engineering. Precision in every
            pixel.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button size="lg" asChild>
              <Link href="#work">
                View work
                <ArrowRight className="ml-1" />
              </Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link href="#contact">Start a project</Link>
            </Button>

            <div className="ml-2 flex items-center gap-2">
              <Button variant="ghost" size="icon" aria-label="GitHub" asChild>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </a>
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter" asChild>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Stat row */}
        <div className="mt-20 grid grid-cols-3 gap-8 border-t border-foreground/8 pt-10 sm:grid-cols-3 md:max-w-xl">
          {[
            { value: "15+", label: "Years experience" },
            { value: "80+", label: "Production systems" },
            { value: "∞", label: "Design tokens iterated" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-semibold tracking-tight">
                {stat.value}
              </p>
              <p className="mt-0.5 text-xs text-foreground/40">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
