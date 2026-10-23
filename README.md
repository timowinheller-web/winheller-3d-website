# winheller-3d.com

Statische Website von Winheller 3D Manufactur, gehostet über GitHub Pages. Deploy = `git push` auf `main`.

- Design-Grundlage: Claude-Design-Entwurf „Winheller 3D Manufactur“ (Brand Guide v2: Gold #D5A34A, Anthrazit, Marmor; Barlow Condensed / Barlow / Montserrat)
- Schriften und three.js liegen lokal (`css/fonts`, `js/three.min.js`), keine Drittanbieter-Requests
- Preise: `PREISE` im Skript in `index.html` (aktuell Platzhalter)
- Offen: Impressum- und Datenschutz-Platzhalter `[…]` füllen, echte Figurenfotos
- 3D-Modell im Hero: `models/handwerker.glb`, erzeugt aus dem Druck-3MF mit `tools/3mf_to_glb.py <datei.3mf> models/<name>.glb 120000` (braucht numpy, scipy, trimesh, fast-simplification). Farben pro Filament setzt `js/main.js` (Objekt `C`).
