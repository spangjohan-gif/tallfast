# Från sida till publicerad hemsida på tall.se

Sidan är klar som enkelsidig presentation. För publicering återstår tre saker: verkligt innehåll, en kontaktväg och själva publiceringen med er domän.

## 1. Innehåll före publicering

- Byt ut de tre platshållarprojekten (Kv. Snickaren, Villa Tallbacken, Kv. Tegelbruket) mot era riktiga projekt med namn, ort, år och status.
- Ersätt de AI-genererade bilderna med era egna projektfoton (hero + ett foto per projekt).
- Kontrolluppgifter i sidfoten: besöksadress, e-post, telefon, org.nr och ev. certifieringsnummer för kontrollansvarig (PBL).
- Kort "Om oss"-text med namn och roller på nyckelpersoner – viktigt för trovärdighet mot banker och byggherrar.

## 2. Kontaktväg

Val mellan två nivåer:
- Enkelt: bara e-postlänk och telefon (som idag) – inget backend behövs.
- Kontaktformulär: namn, e-post, typ av uppdrag, meddelande – sparas i databas och skickar mejlnotis till info@tall.se. Kräver att Lovable Cloud aktiveras.

## 3. Publicering och domän

1. Publicera först till Lovable-adressen (skapar en tall.lovable.app-adress).
2. Koppla www.tall.se i Project settings > Domains; DNS-posterna visas där och läggs in hos er nuvarande domänleverantör.
3. Om www.tall.se redan pekar mot en befintlig sida behöver DNS bytas vid ett planerat tillfälle.

## 4. Teknisk finputs inför lansering

- Egen favicon/logotyp i stället för standardikonen.
- `src/routes/__root.tsx` har fortfarande standardtitel "Lovable App" och beskrivningen "Lovable Generated Project" – ersätts med Tall-text som fallback.
- Lägg till en absolut og:image (delningsbild) när riktig hero-bild finns.
- Sitemap.xml samt JSON-LD (Organization/LocalBusiness) för bättre synlighet i Google.
- Kontroll av mobilvy och laddtider innan skarp lansering.

## Frågor att besvara

- Har ni riktiga projektbilder och projektnamn som kan användas nu?
- Vill ni ha kontaktformulär eller räcker e-post?
- Var ligger domänen tall.se idag (Loopia, One.com, GoDaddy…)?
