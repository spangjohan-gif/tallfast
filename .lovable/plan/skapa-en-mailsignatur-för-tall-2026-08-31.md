Skapa en mailsignatur för Tall

Mål
Göra en färdig mailsignatur som matchar Talls visuella identitet – TALL. + tall-ikon, med typsnitten Inter, Playfair Display och JetBrains Mono som på hemsidan.

Innehåll
- Namn: Johan Spång
- Titel: Grundare och VD
- E-post: Johan@tallfast.se
- Telefon: 073 359 54 00
- Webb: www.tall.se (länkas)

Leverabler
1. HTML-signatur
   - Inline CSS för bred kompatibilitet (Apple Mail, Outlook, Gmail).
   - TALL. + tall-ikon på en rad, därefter kontaktuppgifter.
   - Typsnitt med fallback: Inter → Helvetica/Arial, Playfair Display → Georgia, JetBrains Mono → Courier.
   - Ikontyp: antingen en absolut URL till den befintliga tall-ikonen eller inbäddad base64, beroende på vad som fungerar bäst i test.
   - Spara som `tall-signature.html` i `/mnt/documents`.

2. Bildsignatur (PNG)
   - Generera en 600–800 px bred PNG med samma layout, text och ikon.
   - Transparent eller ljus bakgrund, anpassad för ljusa e-postklienter.
   - Spara som `tall-signature.png` i `/mnt/documents`.

3. Installationsinstruktioner
   - Kort steg-för-steg för att klistra in HTML-signaturen i Apple Mail och Outlook.
   - Alternativt: hur man använder PNG-bilden som signatur.

Tekniska detaljer
- Hämta den befintliga tall-ikonen från `src/assets/tall-pine.png.asset.json`.
- För HTML-versionen används tabellayout och inline styles för att e-postklienter ska tolka den rätt.
- För PNG-versionen används Python/PIL för exakt typografi och färger.
- Båda versionerna testas visuellt innan leverans.
