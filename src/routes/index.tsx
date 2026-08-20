import { createFileRoute } from "@tanstack/react-router";

import heroImg from "@/assets/hero.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tall – Fastighetsutveckling & projektutveckling" },
      {
        name: "description",
        content:
          "Tall utvecklar arkitektoniskt tilltalande och kvalitativa bostäder, samt erbjuder projektutveckling, markförädling, projektledning, byggbedömning och kontrollansvar.",
      },
      { property: "og:title", content: "Tall – Fastighetsutveckling & projektutveckling" },
      {
        property: "og:description",
        content:
          "Bostadsutveckling med arkitektonisk höjd – och konsulttjänster inom markförädling, projektledning, byggbedömning och kontrollansvar.",
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

const projects = [
  {
    year: "2023—24",
    name: "Kv. Snickaren",
    meta: "Stockholm / Under konstruktion",
    img: project1,
  },
  { year: "2022", name: "Villa Tallbacken", meta: "Nacka / Färdigställt", img: project2 },
  { year: "2021", name: "Kv. Tegelbruket", meta: "Vasastan / Färdigställt", img: project3 },
];

const services = [
  {
    nr: "01",
    title: "Projektutveckling",
    text: "Vi tar rollen som utvecklare åt fastighetsägare och byggherrar – från idé och volymstudie till kalkyl, upphandling och färdig bostad.",
  },
  {
    nr: "02",
    title: "Markförädling",
    text: "Vi driver detaljplaneprocessen: planbesked, dialog med kommun och myndigheter, utredningar, samråd och granskning fram till lagakraftvunnen plan.",
  },
  {
    nr: "03",
    title: "Projektledning",
    text: "Ledning av byggprojekt i alla skeden – tid, ekonomi, kvalitet och upphandling – med tydlig styrning och rapportering till beställaren.",
  },
  {
    nr: "04",
    title: "Byggbedömare",
    text: "Oberoende bedömning av produktion, ekonomi och tekniskt utförande åt banker, investerare och styrelser inför och under byggnation.",
  },
  {
    nr: "05",
    title: "Kontrollansvarig",
    text: "Certifierad kontrollansvarig enligt PBL: kontrollplan, tekniskt samråd, arbetsplatsbesök, slutsamråd och stöd genom hela myndighetsprocessen.",
  },
];

const process = [
  {
    nr: "01 / Analys",
    title: "Platsens själ",
    text: "Varje uppdrag börjar med en djupanalys av topografi, ljusinsläpp, planförutsättningar och historisk kontext.",
  },
  {
    nr: "02 / Materialitet",
    title: "Ärliga val",
    text: "Vi väljer material som tål tidens tand. Massivt trä, sten, tegel och rå betong.",
  },
  {
    nr: "03 / Realisering",
    title: "Hantverk",
    text: "Tillsammans med ledande arkitekter förverkligar vi visionen med precision i varje detalj.",
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
          <a href="#projekt" className="transition-colors hover:text-accent">
            Projekt
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
            alt="Nordisk bostadsarkitektur i betong och furu i mjukt morgonljus"
            width={1920}
            height={1088}
            className="absolute inset-0 -z-10 h-full w-full scale-105 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-foreground/20" />
          <div className="animate-reveal max-w-4xl text-background">
            <h1 className="mb-8 text-6xl font-extrabold leading-[0.85] tracking-tighter md:text-[110px]">
              ARKITEKTUR
              <br />
              SOM DRÖJER KVAR.
            </h1>
            <p className="max-w-md text-balance font-mono text-[12px] uppercase tracking-widest">
              Fastighetsutveckling och projektutveckling med fokus på bestående kvalitet, ärliga
              material och nordiskt ljus.
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
              Vi tror på det långsamma byggandet. En balans mellan{" "}
              <span className="font-serif italic font-normal text-accent">rå betong</span> och
              ljust furu.
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Tall grundades ur en frustration över det generiska. Vi skapar bostäder som inte bara
              fungerar som maskiner för boende, utan som estetiska upplevelser som åldras med
              värdighet. Samma kompetens erbjuder vi som konsult åt fastighetsägare, byggherrar och
              investerare.
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
              (02) Konsultuppdrag
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

        {/* Projekt */}
        <section id="projekt" className="bg-foreground py-20 text-background">
          <div className="px-6 md:px-12">
            <div className="mb-8 flex items-end justify-between border-b border-background/20 pb-8">
              <h2 className="text-4xl font-extrabold uppercase tracking-tighter md:text-5xl">
                Valda projekt
              </h2>
              <span className="pb-2 font-mono text-[10px] uppercase tracking-widest">
                (03) Portfolio
              </span>
            </div>

            {projects.map((p) => (
              <div
                key={p.name}
                className="group flex flex-col items-start gap-8 border-b border-background/10 py-12 md:flex-row md:items-center"
              >
                <div className="w-24 font-mono text-[12px] opacity-50">{p.year}</div>
                <div className="flex-1">
                  <h3 className="text-3xl font-extrabold tracking-tight transition-all duration-500 group-hover:pl-4 md:text-5xl">
                    {p.name}
                  </h3>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-widest opacity-50">
                    {p.meta}
                  </p>
                </div>
                <div className="aspect-video w-full overflow-hidden md:w-64">
                  <img
                    src={p.img}
                    alt={`${p.name}, ${p.meta}`}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section id="process" className="bg-secondary px-6 py-32 md:px-12">
          <div className="mb-16 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            (04) Process
          </div>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
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
              Har du en fastighet, en markanvisning eller ett projekt som söker rätt utvecklare?
            </p>
            <span className="mb-6 block text-6xl font-extrabold tracking-tighter md:text-7xl">
              TALL.
            </span>
            <address className="space-y-2 font-mono text-[10px] uppercase not-italic tracking-widest">
              <p>Skeppsbron 12</p>
              <p>111 30 Stockholm</p>
              <p className="mt-4 text-accent">
                <a href="mailto:info@tall.se">info@tall.se</a>
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
