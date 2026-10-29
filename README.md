# winheller-3d.com

Statische Website von Winheller 3D Manufaktur, gehostet über GitHub Pages. Deploy = `git push` auf `main`.

- Design-Grundlage: Claude-Design-Entwurf „Winheller 3D Manufaktur“ (Brand Guide v2: Gold #D5A34A, Anthrazit, Marmor; Barlow Condensed / Barlow / Montserrat)
- Schriften (als `@font-face` am Anfang von `css/style.css`) und three.js liegen lokal, keine Drittanbieter-Requests
- Preise stehen nicht auf der Seite, alles auf Anfrage per E-Mail
- 3D-Modelle im Hero (`models/*.glb`) werden erst nach dem Laden der Seite nachgeladen; bis dahin steht `img/hero.webp`
- Bilder: `python3 tools/make_images.py <quelle> <ziel-basisname>` erzeugt 400/800/1200-px-WebP für `srcset`
- OG-Bild: `tools/og.html` im Browser bei 1200 × 630 rendern und als `img/og.jpg` speichern
- Bild-Prompts für neue Produkt-/Lifestyle-Fotos: `docs/BILD-PROMPTS.md`
