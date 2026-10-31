# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Privatleute, die etwas Persönliches verschenken oder sich selbst gönnen.** Hauptanlass ist die Figur nach Foto (Hochzeit, Jubiläum, Geburtstag, Abschied im Job, Erinnerung an ein Haustier). Sie kommen meist mit einem Handyfoto und einer Idee, oft mit Termin.
- **Firmen und Vereine** als zweite, ähnlich wichtige Zielgruppe: Logo-Aufsteller, Werbegeschenke, Pokale, Jubiläumsfiguren, Klein- und Mittelserien, Staffelpreise für Gruppen.

Ihre Aufgabe auf der Website: verstehen, was möglich ist, Vertrauen fassen, dass aus ihrem Foto ein gutes Stück wird, und eine Anfrage per E-Mail schicken.

## Product Purpose

Winheller 3D Manufaktur fertigt personalisierte 3D-Drucke auf Anfrage: Figuren nach Foto (einzeln, Paar, Familie, Tier), Fotolampen (Lithophanien) und Designlampen, Namensartikel (Handyhüllen, Anhänger, Schilder), Deko in Holz- und Marmoroptik, Hochzeits- und Fest-Ausstattung sowie Firmen- und Vereinsartikel. Daneben Sonderwünsche und Ersatzteile.

Erfolg der Website = eine vollständige E-Mail-Anfrage an info@winheller-3d.com (Fotos, Wunsch, Größe/Farben, Anlass und Termin).

## Positioning

- **Vollfarbe ohne Bemalung:** bis zu 8 Farben direkt gedruckt, keine Abziehbilder, nichts nachbemalt.
- **Vorschau vor dem Druck:** Kunde bekommt eine Vorschau und gibt sie frei; erst dann wird gedruckt. Der Preis kommt zusammen mit der Vorschau.
- **Kleine Manufaktur:** Inhaber Volker Winheller fertigt selbst in Reichshof (Oberbergischer Kreis), persönlicher Kontakt per E-Mail.
- **Fast alles druckbar:** über das Sortiment hinaus Sonderwünsche, Ersatzteile nach Maß und Kleinserien ohne Werkzeugkosten.

## Operating Context

Ablauf: Foto schicken → Vorschau bekommen und freigeben → Druck → Versand gut verpackt in der Geschenkbox. Kontakt ausschließlich per E-Mail; es gibt keinen Shop, keinen Warenkorb und kein Formular.

## Capabilities and Constraints

- Statische Website (HTML/CSS/JS) auf GitHub Pages, Deploy per Push auf `main`. Schriften und three.js lokal, keine Drittanbieter-Requests (Datenschutz).
- Hero mit interaktivem 3D-Modell (`models/*.glb`), nachgeladen; Standbild `img/hero.webp` als Fallback.
- Technische Eckdaten (von der Seite): Mehrfarbdruck bis 8 Farben, Teile bis 26 cm hoch, 0,25-mm-Düse, harte und flexible Materialien in einem Teil. Materialien: PLA matt, PLA Seide, PLA weiß, Marmor-PLA, Holz-PLA, PETG, TPU, PLA-CF.
- **Keine Preise auf der Seite.** Alles auf Anfrage.
- Drucke sind nicht lebensmittelecht; Lampen-Elektrik besteht aus geprüften Fertigteilen.
- Kunden dürfen nur Fotos/Logos schicken, an denen sie die Rechte haben.
- Offen: Liefergebiet und Lieferzeiten sind nicht festgelegt und dürfen nicht erfunden werden.

## Brand Commitments

- Name: Winheller 3D Manufaktur; Claim „Dein Bild. Unser Werk.“
- Ansprache: Du, Deutsch, kurz und konkret.
- Bestehender Brand Guide v2 (Farben und Schriften im Code, siehe README); verbindlich, bis der Inhaber etwas anderes sagt.
- Figurenstil: Bobblehead-Proportionen, matte Oberfläche mit sichtbaren Schichtlinien, runder schwarzer Sockel.

## Evidence on Hand

- Produkt- und Lifestyle-Bilder sind **KI-generiert** (`docs/BILD-PROMPTS.md`, Quellen in `docs/bilder-quellen/`) und zeigen erfundene Figuren.
- 3D-Modelle im Hero (`models/`).
- **Nicht vorhanden:** echte Fotos fertiger Drucke, Kundenstimmen, Bewertungen, Kundenzahlen, Presse. Nichts davon erfinden; keine Formulierungen, die KI-Bilder als echte Kundenaufträge ausgeben.

## Product Principles

1. Die Anfrage per E-Mail ist das Ziel jeder Seite; alles führt dorthin und sagt, was in die E-Mail gehört.
2. Ehrlich statt aufgeblasen: keine erfundenen Belege, Preise oder Lieferversprechen.
3. Das Risiko für Kunden klein zeigen: Vorschau und Freigabe vor dem Druck, Preis mit der Vorschau.
4. Handwerk sichtbar machen: echte Technik, echte Materialien, eine Person, die fertigt.
5. Privatkunden zuerst ansprechen, Firmen und Vereine klar erreichbar halten.

## Accessibility & Inclusion

Kein besonderer Standard vereinbart. Zielgruppe ist breit; Anfragen laufen über Handyfotos, die Seite muss auf dem Handy voll funktionieren.
