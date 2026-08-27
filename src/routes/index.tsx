import { createFileRoute } from "@tanstack/react-router";

import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tall – Tjänster inom fastighet och hållbarhet" },
      {
        name: "description",
        content:
          "Tall erbjuder tjänster inom projektledning, affärs- och projektutveckling, hållbarhetsexpertis och kommunikation – strategisk rådgivning och operativt genomförande i fastighetsutveckling.",
      },
      { property: "og:title", content: "Tall – Tjänster inom fastighet och hållbarhet" },
      {
        property: "og:description",
        content:
          "Projektledning, affärs- och projektutveckling, hållbarhetsexpertis och kommunikation. Strategisk rådgivning och operativt genomförande.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;800&family=JetBrains+Mono:wght@400&family=Playfair+Display:ital,wght@1,600&display=swap",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    nr: "01",
    title: "Projektledning & affärs- och projektutveckling",
    text: "Vi identifierar mark, driver detaljplanearbete och markförädling, och utvecklar befintliga fastigheter. Projektledning genom hela processen – från idé och kalkyl till upphandling och färdigt resultat.",
  },
  {
    nr: "02",
    title: "Hållbarhetsexpert",
    text: "Vi kliver in som hållbarhetschef, manager eller interim. Strategisk rådgivning och operativt genomförande av hållbarhetsmål – från målbild och policy till valbara åtgärder och uppföljning.",
  },
  {
    nr: "03",
    title: "Kommunikation",
    text: "Vi upprättar strategier och stöttar implementeringen. Strategisk rådgivning och förankring som gör att mål och budskap når ända ut i organisationen och till intressenter.",
  },
];

const process = [
  {
    nr: "01 / Förståelse",
    title: "Förstå behovet",
    text: "Vi börjar i varje uppdrag med att förstå din situation, dina mål och dina utmaningar – och identifiera vad som faktiskt behöver göras.",
  },
  {
    nr: "02 / Plan",
    title: "Skapa en plan",
    text: "Utifrån behovet tar vi fram en tydlig plan för vad som behöver göras – avgränsat, prioriterat och med rätt resurser och tidslinje.",
  },
  {
    nr: "03 / Förankring",
    title: "Planera och förankra",
    text: "Vi planerar genomförandet och förankrar planen hos beslutstagare och medarbetare så att alla drar åt samma håll.",
  },
  {
    nr: "04 / Genomförande",
    title: "Genomföra och följa upp",
    text: "Vi genomför tillsammans med er, följer upp mot uppsatta mål och säkerställer att resultatet består efter uppdragets slut.",
  },
];

function Index() {
  return (
    <div className="bg-background text-foreground font-sans">
      <nav className="fixed top-0 left-0 z-50 flex w-full items-baseline justify-between px-6 py-8 mix-blend-difference text-background">
        <span className="text-2xl font-extrabold tracking-tighter">TALL.</span>
        <div className="hidden gap-8 font-mono text-[10px] uppercase tracking-widest md:flex">
          <a href="#filosofi" className="transition-colors hover:text-accent">
            Filosofi
          </a>
          <a href="#tjanster" className="transition-colors hover:text-accent">
            Tjänster
          </a>
          <a href="#process" className="transition-colors hover:text-accent">
            Process
          </a>
          <a href="#kontakt" className="transition-colors hover:text-accent">
            Kontakt
          </a>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="relative flex h-screen flex-col justify-end overflow-hidden p-6 md:p-12">
          <img
            src={heroImg}
            alt="Nordisk arkitektur i mjukt ljus"
            width={1920}
            height={1088}
            className="absolute inset-0 -z-10 h-full w-full scale-105 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-foreground/20" />
          <div className="animate-reveal max-w-4xl text-background">
            <h1 className="mb-8 text-6xl font-extrabold leading-[0.85] tracking-tighter md:text-[110px]">
              STRATEGISK
              <br />
              RÅDGIVNING.
            </h1>
            <p className="max-w-md text-balance font-mono text-[12px] uppercase tracking-widest">
              Tjänster inom fastighet och hållbarhet. Projektledning, hållbarhetsexpertis och
              kommunikation – från insikt till genomfört resultat.
            </p>
          </div>
        </section>

        {/* Filosofi */}
        <section id="filosofi" className="grid grid-cols-1 gap-12 px-6 py-32 md:grid-cols-12 md:px-12">
          <div className="pt-4 font-mono text-[10px] uppercase tracking-widest md:col-span-2">
            (01) Filosofi
          </div>
          <div className="md:col-span-8">
            <h2 className="mb-12 text-pretty text-4xl font-extrabold tracking-tight md:text-6xl">
              Tall hjälper fastighetsägare, byggherrar och organisationer att{" "}
              <span className="font-serif italic font-normal text-accent">realisera</span> projekt
              och hållbarhetsmål – med tydlig process och genomförande som består.
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Vi kombinerar projektledning, affärs- och projektutveckling, hållbarhetsexpertis och
              kommunikation. Oavsett uppdrag börjar vi i behovet, skapar en plan, förankrar och
              genomför – och följer upp så att resultatet lever kvar.
            </p>
          </div>
        </section>

        {/* Tjänster */}
        <section id="tjanster" className="border-t border-border bg-secondary px-6 py-32 md:px-12">
          <div className="mb-16 flex items-end justify-between border-b border-border pb-8">
            <h2 className="text-4xl font-extrabold uppercase tracking-tighter md:text-5xl">
              Tjänster
            </h2>
            <span className="pb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              (02) Tjänster
            </span>
          </div>

          <div className="grid grid-cols-1 gap-x-16 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article key={s.nr} className="border-t border-border pt-6">
                <div className="mb-6 font-mono text-xs text-accent">{s.nr}</div>
                <h3 className="mb-4 text-2xl font-extrabold tracking-tight">{s.title}</h3>
                <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Process */}
        <section id="process" className="bg-secondary px-6 py-32 md:px-12">
          <div className="mb-16 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            (03) Process
          </div>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.nr}>
                <div className="mb-6 font-mono text-xs text-accent">{p.nr}</div>
                <h3 className="mb-4 text-xl font-extrabold">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Kontakt */}
      <footer id="kontakt" className="border-t border-border px-6 pb-12 pt-32 md:px-12">
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-end">
          <div>
            <p className="mb-8 max-w-md text-2xl font-extrabold tracking-tight md:text-3xl">
              Har du ett projekt, en fråga eller en utmaning som söker rätt samarbetspartner?
            </p>
            <span className="mb-6 block text-6xl font-extrabold tracking-tighter md:text-7xl">
              TALL.
            </span>
            <address className="space-y-2 font-mono text-[10px] uppercase not-italic tracking-widest">
              <p>Olympiavägen 94</p>
              <p>112 40 Enskede</p>
              <p className="mt-4 text-accent">
                <a href="mailto:johan@tallfast.se">johan@tallfast.se</a>
              </p>
            </address>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} Tall Fastighetsutveckling AB
          </p>
        </div>
      </footer>
    </div>
  );
}
