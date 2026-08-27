# Bild på startsidan – hur du gör

Startsidan har redan en hero-bild (`src/assets/hero.jpg`) i den översta sektionen. Vill du byta den mot en egen bild (t.ex. ett projektfoto) gör du så här.

## A. Använd din egen bild

1. Ladda upp bildfilen i Lovable (klicka +/upload-ikonen, dra in filen). Den hamnar i projektet som en tillgång.
2. Säg till mig vilket namn filen har, t.ex. "använd min-foto.jpg som hero-bild".
3. Jag flyttar filen till `src/assets/`, byter importen i `src/routes/index.tsx` så din bild visas i hero-sektionen, och justerar alt-text och storlek.
4. Om du vill ha bilden någon annanstans på sidan (Filosofi-, Tjänster- eller Process-sektionen) säger du var, så lägger jag in den där.

Stödda format: JPG, PNG, WebP. För en fullbredds-hero fungerar en horisontell bild bäst (t.ex. 1920×1080).

## B. Låt mig generera en ny bild

Om du inte har en egen bild kan jag generera en ny i Talls nordiska arkitektur-stil och sätta den som hero. Säg bara "generera en ny hero-bild".

## C. Lägg till bild bredvid logotypen

Separat från hero-bilden finns tallsymbolen (`src/assets/tall-mark.png`) som jag kan lägga bredvid "TALL." i menyn och sidfoten om du vill.

## Vad jag föreslår nu

1. Du laddar upp din bild (eller ber mig generera en).
2. Jag byter hero-bilden mot din bild och uppdaterar alt-text + SEO (og:image) för delning.
3. Klart – bilden visas på startsidan.
