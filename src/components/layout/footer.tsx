export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-12 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {year} karlking·mode. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">
          Built with intentional minimalism.
        </p>
      </div>
    </footer>
  );
}
