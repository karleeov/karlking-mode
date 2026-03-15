import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-foreground/8 bg-foreground/3 p-10 sm:p-14">
          <p className="mb-4 font-mono text-xs tracking-widest text-foreground/35 uppercase">
            Let&apos;s build something
          </p>
          <h2 className="mb-6 max-w-xl text-3xl font-semibold tracking-tight leading-snug sm:text-4xl">
            Have a project that demands precision?
          </h2>
          <p className="mb-10 max-w-lg text-base leading-relaxed text-foreground/55">
            I take on select collaborations — design systems, performance
            overhauls, and complex UI builds that require deep craft. Let&apos;s
            talk.
          </p>
          <Button size="lg" asChild>
            <a href="mailto:hello@karlking.dev">
              Send a message
              <ArrowRight className="ml-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
