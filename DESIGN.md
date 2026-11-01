---
name: Winheller 3D Manufaktur
description: Dein Bild. Unser Werk. Personalisierte Vollfarb-3D-Drucke aus einer kleinen Manufaktur.
colors:
  gold: "#D5A34A"
  gold-hi: "#E3B357"
  gold-lo: "#B8862F"
  gold-text: "#7F5C1C"
  gold-display: "#8F6A22"
  anthrazit: "#3A3939"
  tief: "#1E1E1E"
  nacht: "#141313"
  weiss: "#FFFFFF"
  marmor: "#F3F1ED"
  marmor-2: "#E9E5DE"
  stein: "#605D59"
  linie: "#E3E0DA"
  nacht-text: "#B9B5AE"
typography:
  display:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "clamp(58px, 9vw, 136px)"
    fontWeight: 700
    lineHeight: 0.84
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "clamp(40px, 5.4vw, 64px)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.005em"
  title:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "0.01em"
  body:
    fontFamily: "'Barlow', system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  body-small:
    fontFamily: "'Barlow', system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "17px"
    fontWeight: 700
    letterSpacing: "0.04em"
  brand:
    fontFamily: "'Montserrat', system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 600
rounded:
  tag: "999px"
  sm: "14px"
  md: "18px"
  lg: "22px"
  xl: "26px"
spacing:
  s2: "8px"
  s3: "12px"
  s4: "16px"
  s6: "24px"
  s8: "32px"
  s12: "48px"
  s16: "64px"
  s24: "96px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.tief}"
    typography: "{typography.label}"
    rounded: "{rounded.tag}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.gold-hi}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.tief}"
    typography: "{typography.label}"
    rounded: "{rounded.tag}"
    padding: "14px 24px"
  button-line-hover:
    backgroundColor: "{colors.tief}"
    textColor: "{colors.weiss}"
  button-small:
    padding: "10px 16px"
    rounded: "{rounded.tag}"
  chip:
    backgroundColor: "{colors.weiss}"
    textColor: "{colors.tief}"
    rounded: "{rounded.tag}"
    padding: "10px 15px"
  chip-selected:
    backgroundColor: "{colors.tief}"
    textColor: "{colors.weiss}"
  card-glass:
    rounded: "{rounded.xl}"
    padding: "16px"
  faq-item:
    textColor: "{colors.tief}"
    rounded: "{rounded.md}"
    padding: "20px 24px"
---

# Design System: Winheller 3D Manufaktur

## Overview

**Creative North Star: "Die Druckplatte"**

Die Seite zeigt, wie eine Figur Schicht für Schicht entsteht. Feine waagerechte Schichtlinien liegen wie auf einem gedruckten Objekt über dem Hero, der Claim baut sich in sichtbaren Druckschichten von unten auf, ein Höhen-Readout zählt die Druckhöhe mit. Das Material der Marke ist das Material der Produkte: Marmor als ruhige Fläche, Anthrazit als Struktur, Gold als einzelner, kostbarer Akzent wie das Schild am Sockel.

Die Typografie spricht laut und kurz: schmale, fette Versalien (Barlow Condensed) für alles, was ruft, eine ruhige Barlow für alles, was erklärt. Bilder sind groß, warm und zeigen die Figur im Alltag. Die Dichte ist großzügig: wenige Abschnitte mit viel Luft (96 px Abstand zwischen Bändern), jeder Abschnitt hat eine klare Aufgabe.

Der aktuelle Stand trägt außerdem eine Glas-Schicht: halbtransparente helle und dunkle Flächen vor weichen Kulissenbildern und Lichtkreisen, stark abgerundete Formen. Diese Glas-Schicht ist **dokumentiert, aber offen**: Sie gilt für neue Bereiche, bis eine Prüfung (z. B. `/impeccable critique`) etwas anderes empfiehlt und der Inhaber zustimmt. Die Druckplatte selbst (Schichtlinien, Farben, Schriften) ist verbindlich.

**Key Characteristics:**
- Schichtlinien und Schicht-für-Schicht-Aufbau als wiederkehrendes Motiv
- Marmor + Anthrazit als Grundton, Gold sparsam als Akzent
- Schmale fette Versalien für Überschriften, ruhige Grotesk für Text
- Große warme Produktbilder, großzügige Abstände
- Glas-Flächen und runde Formen (offen, wird geprüft)

## Colors

Warme, erdige Neutraltöne mit einem einzigen metallischen Akzent – wie eine Figur auf Marmorsockel mit goldenem Namensschild.

### Primary
- **Sockelgold** (gold): Flächenfarbe für den Haupt-Button, Fortschrittsbalken, Unterstriche in der Navigation, Trennlinie über dem Abschlussaufruf, E-Mail-Adresse auf dunklem Grund. Nie für Fließtext auf Hell.
- **Helles Sockelgold** (gold-hi): Hover des Haupt-Buttons, warmer Lichtkreis in den Kulissen.
- **Dunkles Gold** (gold-lo): Reserve für Tiefe im Goldverlauf.
- **Gold für Schrift** (gold-text): Gold, das auf Weiß und Marmor lesbar ist: Links in Rechtstexten, Fokusring, FAQ-Plus, E-Mail-Adresse auf Hell.
- **Gold für Überschriften** (gold-display): erste Claim-Zeile („Dein Bild.“), Gruppentitel im Sortiment, Listenpunkte.

### Neutral
- **Tiefschwarz** (tief): Überschriften, aktive Chips, Footer, Textfarbe auf Gold.
- **Nachtschwarz** (nacht): Hintergrund des dunklen Anfrage-Bands.
- **Anthrazit** (anthrazit): Fließtext.
- **Stein** (stein): Nebentext, Antworten im FAQ, Tabellenköpfe.
- **Marmor** (marmor): Hero-Fläche, helle Bänder, Bildhintergrund.
- **Marmor tief** (marmor-2): Bildplatzhalter, Hover heller Chips, Fortschrittsspur.
- **Fuge** (linie): dünne Linien und Rahmen.
- **Weiß** (weiss): Grundfläche der Seite.
- **Nachttext** (nacht-text): Fließtext auf dunklem Grund.

### Named Rules
**The Sockelschild Rule.** Gold ist der Akzent, nie die Fläche. Pro Bildschirm trägt höchstens ein Element eine goldene Fläche (meist der Haupt-Button).

**The Lesbares-Gold Rule.** Gold als Schrift auf Hell immer in gold-text oder gold-display, nie im reinen Sockelgold (Kontrast zu gering).

## Typography

**Display Font:** Barlow Condensed 600/700 (mit Arial Narrow)
**Body Font:** Barlow 300 kursiv/400/500/600 (mit system-ui)
**Brand Font:** Montserrat 400–600, nur für die E-Mail-Adresse und Markennähe

**Character:** Schmale, fette Versalien wirken wie gestanzte Beschriftung an einer Maschine; die offene Barlow darunter bleibt freundlich und gut lesbar. Alle Schriften liegen lokal (`css/fonts/`), keine externen Anfragen.

### Hierarchy
- **Display** (700, clamp(58px, 9vw, 136px), 0.84): nur der Claim im Hero, zweizeilig, Zeile 1 in gold-display, Zeile 2 in tief.
- **Headline** (700, clamp(40px, 5.4vw, 64px), 0.95): Abschnittsüberschriften (h2), Versalien.
- **Title** (700, 22–26px, 1.0–1.05): Produktnamen, Schritt-Titel, FAQ-Fragen, Versalien.
- **Body** (400, 17px, 1.6): Fließtext, max. 52–65 Zeichen pro Zeile.
- **Body small** (400, 15px): Fakten, Bildunterschriften, Nebentext.
- **Label** (700, 17px bzw. 15px klein, 0.04–0.06em, Versalien): Buttons, Navigation, Chips.

Typo-Skala: Quarte (1,333): 13 / 15 / 17 / 22 / 30 px, dann fluide 40–64 und 58–136 px.

### Named Rules
**The Versalien-ruft Rule.** Barlow Condensed in Versalien nur für Überschriften, Buttons, Navigation und kurze Kennzahlen. Fließtext ist nie in Versalien.

**The Eine-Marke Rule.** Montserrat erscheint nur bei der E-Mail-Adresse. Keine vierte Schrift.

## Layout

Zentrierter Container mit max. 1240 px und 16 px Seitenrand (plus Safe-Area). Abschnitte sind volle Bänder mit 96 px Innenabstand oben und unten (64 px unter 700 px Breite), im Wechsel Weiß, Marmor und Nachtschwarz.

Abschnittskopf als zweispaltiges Raster: Überschrift links, Einleitung rechts, unten bündig. Inhalte in 2er- oder 3er-Rastern (Ablauf 3 Spalten, Kennzahlen 2 Spalten, Ideen 3 Spalten). Produkte im Katalog-Wechsel: Bild und Text abwechselnd links und rechts; kleinere Produktgruppen als 2er-Raster.

Hero: zwei Spalten (Text 1.1 : 3D-Bühne 0.9), fast bildschirmhoch (max. 900 px).

Abstandsskala: 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 px.

Umbrüche: 900 px (Navigation wird Menü, Hero einspaltig), 800/860 px (Katalog einspaltig, kleine Produkte als Liste mit 104-px-Bild), 700 px (weniger Bandabstand, Tabelle als Liste), 600 px (kompakter Hero).

## Elevation & Depth

Tiefe entsteht über Schichten, nicht über harte Schatten: Kulissenbilder (sehr klein, weich hochskaliert) und weiche Lichtkreise in Gold, Kupfer und Weiß liegen hinter halbtransparenten Glas-Flächen. Schatten sind breit, weich und nach unten versetzt, dazu eine helle Lichtkante oben. Echte Live-Unschärfe (backdrop-filter) nur bei der Navigation; die übrigen Flächen sind aus Leistungsgründen nur halbtransparent.

### Shadow Vocabulary
- **Glas hell** (`box-shadow: 0 1px 0 rgba(255,255,255,.6) inset, 0 10px 24px -16px rgba(30,30,30,.25)`): helle Glasflächen (Produkte, Kennzahlen, Ideen).
- **Glas dunkel** (`box-shadow: 0 1px 0 rgba(255,255,255,.12) inset, 0 12px 28px -18px rgba(0,0,0,.5)`): dunkle Glasfläche im Anfrage-Band.
- **Menü** (`box-shadow: 0 12px 28px -18px rgba(30,30,30,.35)`): aufgeklapptes Handy-Menü.

### Named Rules
**The Feste-Fläche Rule.** Wer reduzierte Transparenz eingestellt hat, bekommt feste weiße bzw. dunkle Flächen und keine Kulissen.

## Shapes

Weich und rund: Buttons, Chips, Etiketten und Hinweise als Pille (999 px). Flächen mit großzügigen Radien: 14 px (kleine Bilder), 18 px (FAQ, Kennzahl-Leiste, Menü), 20–22 px (Bilder, Tabelle, Ideen), 26 px (Produktkarten, Anfrage-Fläche). Linien sind dünn (1 px, 10 % Schwarz); einzige kräftige Linie ist die 2 px goldene Trennlinie über dem Abschlussaufruf. Das Druckmotiv kommt über Schichtlinien (1 px alle 7 px), nicht über eckige Formen.

## Components

### Buttons
- **Shape:** Pille (999 px).
- **Primary:** Sockelgold mit Tiefschwarz-Schrift, Label-Typo in Versalien, 14 × 24 px Innenabstand.
- **Hover / Focus:** Hover auf helles Gold (nur bei echter Maus); beim Drücken minimal kleiner (scale .97, 160 ms ease-out); Fokus als 2 px Ring in gold-text mit 3 px Abstand.
- **Line:** transparent mit 2 px Kontur in Textfarbe, Hover füllt Tiefschwarz mit weißer Schrift; auf Dunkel umgekehrt.
- **Small:** 15 px, 10 × 16 px, für die Navigation.

### Chips
- **Style:** helle Pille (86 % Weiß) mit Lichtkante, Label-Typo; Kategorie-Chips im Sortiment als Kontur-Pille.
- **State:** ausgewählt = Tiefschwarz mit weißer Schrift (`aria-pressed`); Farbpunkt 14 px rund vor dem Text bei der Finish-Wahl. Min. 44 px hoch auf dem Handy.

### Cards / Containers
- **Corner Style:** 20–26 px.
- **Background:** helles Glas (70 % Weiß) bzw. dunkles Glas (74 % Nachtschwarz).
- **Shadow Strategy:** siehe Glas hell / Glas dunkel.
- **Border:** 1 px helle Glaskante.
- **Internal Padding:** 16–24 px.
- Lichtreflex folgt dem Mauszeiger (radialer Verlauf, auf Dunkel goldfarben).

### Navigation
- Klebende Glasleiste (60 % Weiß, Live-Unschärfe), 68 px hoch, Logo links, Links in Barlow Condensed 600 Versalien mit goldenem Unterstrich, der beim Hover von links einläuft (250 ms ease-out). Rechts „Figur anfragen“ als kleiner Gold-Button. Unter 900 px ein Menü-Knopf mit aufklappender weißer Liste (18 px Radius).

### FAQ
- Aufklappbare Streifen in hellem Glas, 18 px Radius, Frage als Title-Typo in Versalien, goldenes Plus rechts, das sich beim Öffnen zum Kreuz dreht.

### Druckplatten-Hero (Signature)
- Marmorfläche mit feinen Schichtlinien (rechts sichtbarer), zweizeiliger Claim, der sich in 14 Druckschritten von unten aufbaut, 3D-Figur zum Drehen mit Höhen-Readout („0,0 cm von 15 cm“) und goldenem Fortschrittsbalken, darunter Chips für Figur und Finish (Vollfarbe, Gold, Marmor-Weiß).

### Produkt-Karte (Katalog)
- Glas-Karte mit Bild (4:5, 20 px Radius, leichter Zoom bei Hover) und Text im Wechsel; Fakten als Liste mit Bezeichnung links (110 px) und Wert rechts, dünne Linien dazwischen; Button „Anfragen“ linksbündig.

## Do's and Don'ts

### Do:
- **Do** Gold sparsam einsetzen: eine goldene Fläche pro Bildschirm, Gold als Schrift nur in gold-text oder gold-display.
- **Do** Überschriften in Barlow Condensed 700 Versalien, Text in Barlow 400 bei 17 px / 1.6.
- **Do** Bänder mit 96 px Abstand (64 px mobil) und dem 1240-px-Container.
- **Do** Bewegung mit ease-out (`cubic-bezier(.23,1,.32,1)`), kurz (160–700 ms), und bei reduzierter Bewegung alles sofort sichtbar.
- **Do** Schriften und Skripte lokal halten, Bilder als WebP in 400/800/1200 px mit `srcset`.
- **Do** Klickflächen mindestens 44 px auf dem Handy.

### Don't:
- **Don't** reines Sockelgold (#D5A34A) als Schriftfarbe auf Weiß oder Marmor.
- **Don't** eine weitere Schriftfamilie oder eine neue Akzentfarbe einführen.
- **Don't** Fließtext in Versalien oder in Barlow Condensed setzen.
- **Don't** Google Fonts, CDNs oder andere externe Anfragen einbinden.
- **Don't** Live-Unschärfe (backdrop-filter) auf weitere große Flächen legen; sie bleibt der Navigation vorbehalten.
