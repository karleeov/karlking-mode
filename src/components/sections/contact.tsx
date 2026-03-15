import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-3xl space-y-8 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Contact
        </p>
        <h2 className="text-balance text-4xl font-semibold tracking-tight">
          Ready to build something great?
        </h2>
        <p className="text-balance text-muted-foreground">
          Whether you have a project in mind or just want to explore what&apos;s
          possible — reach out and let&apos;s start the conversation.
        </p>
        <Button size="lg" className="group gap-2">
          Start a project
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
}
