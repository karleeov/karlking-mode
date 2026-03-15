import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="mt-32 pb-12">
      <div className="mx-auto max-w-6xl px-6">
        <Separator className="mb-8" />
        <div className="flex flex-col items-start justify-between gap-4 text-sm text-foreground/40 sm:flex-row sm:items-center">
          <p>
            <span className="font-mono mr-1 opacity-60">♔</span>
            karlking — built with intentional minimalism
          </p>
          <p className="font-mono text-xs">© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
