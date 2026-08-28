# Underhållssida – "TALL. Kommer snart"

Skapa en egen, fristående route som du kan peka domänen (eller en länk/redirect) mot när huvudsidan ska döljas för underhåll.

## Vad som byggs

Ny route `src/routes/underhall.tsx` → URL `/underhall`:

- Minimal, centrerad sida i Talls designtokens (cream-bakgrund, ink-text, Inter extra-bold).
- Stor rubrik: **TALL.**
- Undertext: **Kommer snart**
- Ingen nav, ingen sidfot, inga länkar – ren underhållsskärm.
- Egen `head()` med `noindex` (så den inte indexeras av Google) och title "Tall – Kommer snart".
- Går att förhandsgranska på `/underhall` direkt.

## Hur du använder den

1. När du vill dölja sidan: peka besökare mot `/underhall` (t.ex. via en redirect, eller tillfälligt byt startsidan).
2. När underhållet är klart: ta bort redirecten – huvudsidan visar igen.

## Val (påverkar inte bygget)

- Vill du att `tall-mark.png`-logotypen ska visas ovanför "TALL."? (annars bara text)
- Ska undertexten vara "Kommer snart" eller "Underhåll pågår"?

Jag går vidare med textversionen ("TALL." + "Kommer snart") om inget annat sägs.
