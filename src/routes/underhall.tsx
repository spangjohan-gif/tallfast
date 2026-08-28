import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/underhall")({
  head: () => ({
    meta: [
      { title: "Tall – Kommer snart" },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Tall – Kommer snart" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://tallfast.lovable.app/underhall" }],
  }),
  component: UnderhallPage,
});

function UnderhallPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center text-foreground">
      <h1 className="text-[22vw] font-extrabold leading-[0.85] tracking-tighter md:text-[180px]">
        TALL.
      </h1>
      <p className="mt-8 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground md:text-sm">
        Kommer snart
      </p>
    </main>
  );
}
