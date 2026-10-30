# Lehrvideo „Bürgergeld-Anspruch berechnen (SGB II)“

Selbstablaufendes Lehrvideo (ca. 25 Min., 6 Kapitel) für den Verwaltungsfachwirt-Lehrgang, als einzelne HTML-Datei ohne Abhängigkeiten.

- `index.html` – der Video-Player: `index.html` im Browser öffnen und auf „Video starten“ klicken.
- `audio/` – vorproduzierte Sprecherstimme (85 MP3-Dateien, eine je Szene bzw. Quiz-Auflösung), erzeugt mit der freien neuronalen Stimme „Thorsten“ (Piper TTS, CC0). Fehlen die Dateien, springt die Sprachausgabe des Browsers ein.
- `SKRIPT.md` – Sprecher-Skript und Storyboard aller Szenen mit Zeitangaben, automatisch aus `index.html` erzeugt. Grundlage für eine klassische Produktion mit Sprecher und Schnitt.

## Bedienung

| Taste / Element | Wirkung |
|---|---|
| Leertaste oder ▶/⏸ | Pause und Weiter |
| ← → | Szene zurück oder vor |
| 1 bis 6 | Kapitel anspringen |
| Stimme | Sprecher „Thorsten“ (Audio) oder eine Browser-Stimme, Tempo wählbar, an/aus |
| Balken unten | zum Zeitpunkt springen |

Bei jedem Quiz blinkt „Pause drücken“. Antwort anklicken oder 20 Sekunden warten, dann kommt die Auflösung.

## Didaktik

- Pro Kapitel ein Kernpunkt, Hook-Frage am Anfang, 3-Satz-Zusammenfassung am Ende.
- Feste Farben: Bedarf blau, Einkommen rot, Freibetrag grün, Anspruch gold.
- Fortschrittsbalken „Schritt X von 7“ (Prüfschema) ist immer sichtbar.
- Eine Beispielfamilie durch das ganze Video; die Rechentabelle wächst Zeile für Zeile. Endergebnis: 387,49 € / 347,40 € / 157,15 € / 172,48 €.
- Am Schluss eine leere Übungstabelle mit einblendbarer Lösung.

Die Szenentexte und Zahlen stehen als Daten am Anfang des `<script>`-Blocks in `index.html` und lassen sich dort ändern.

## Sprecherstimme neu erzeugen

Texte in `index.html` ändern, dann mit Piper TTS (`pip install piper-tts`, Stimme `de-thorsten-low` aus den Piper-Releases) je Szene eine MP3 erzeugen und die Dauern in `AUDIO_DUR` eintragen. Dateinamen: `sNN.mp3` für Szene NN, `qNN.mp3` für die Quiz-Auflösung der Szene NN.
