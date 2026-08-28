# Dölj sidan under underhåll – utan att radera den

## Bakgrund
Du försökte dirigera besökare mot `/underhall` via en omdirigering på ditt webbhotell, men det fungerar inte. Orsaken är att www.tall.se ännu inte är ansluten som egen domän till Lovable-projektet, och webbhotellets redirect når inte appen på ett tillförlitligt sätt. Lösningen är att låta själva Lovable-appen styra omdirigeringen – då fungerar den oavsett hur besökaren kommer in.

## Vad som byggs

En underhållsbrytare i appen: när den är på, skickas alla besökare från startsidan (`/`) till underhållssidan `/underhall`. Hela den riktiga hemsidan bevaras oförändrad i koden; bara en flagga slår om.

### Tekniskt

1. Lägg till en konstant i en liten konfigurationsfil (t.ex. `src/lib/maintenance.ts`):
   ```ts
   export const MAINTENANCE_MODE = true; // sätt till false för att visa sidan igen
   ```
2. I `src/routes/index.tsx`, lägg till en `beforeLoad` på route-objektet som kastar en redirect till `/underhall` när `MAINTENANCE_MODE` är `true`:
   ```ts
   import { redirect } from "@tanstack/react-router";
   // ...
   beforeLoad: () => {
     if (MAINTENANCE_MODE) throw redirect({ to: "/underhall" });
   },
   ```
3. När underhållet är klart: ändra `MAINTENANCE_MODE = false` (eller `false`) och publicera igen – startsidan visas som vanligt.

Innehållet i `index.tsx` röras inte, så ingenting försvinner.

## Fördelar jämfört med webbhotellets redirect
- Fungerar på `tallfast.lovable.app` direkt, och på `www.tall.se` så fort domänen ansluts.
- Ingen DNS eller webbhotellskonfiguration behövs för själva döljandet.
- Enkelt att slå av/på – en rad kod + publicera.

## Alternativ (kan kombineras)
- **Gör sajten privat:** Sätt publicerings-synligheten till "private" så den publicerade URL:en kräver inloggning. Allmänheten ser ingenting, men sajten finns kvar. Kan läggas ovanpå underhållsredirecten för maximal döljning.
- **Anslut www.tall.se som egen domän** i Projektinställningar > Domains när du är redo – då pekar domänen direkt mot Lovable-appen och redirects på app-nivå gäller även där.

## Inte med i planen
- Ingen ändring av webbhotellets inställningar (kan lämnas som den är).
- Ingen radering av startsidans innehåll.
