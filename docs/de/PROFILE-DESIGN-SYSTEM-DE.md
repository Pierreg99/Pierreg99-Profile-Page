# CRYO Profil-Designsystem

Die Web-Oberfläche vom Oktober 2026 verwendet ein gemeinsames System für Portfolio, Ressourcen, Galerie und Forschungsarchiv. GitHub-Markdown-Dokumente bleiben eigenständig lesbare Referenzen.

## Visuelle Sprache

- Dunkelblauer Hintergrund (`#080e16`), helle Schrift (`#f0f5fa`) und eisblauer Akzent (`#91e5f7`).
- Zurückhaltende Texte bleiben auf dunklen Flächen gut lesbar. Grün markiert den öffentlichen Snapshot; Sprachfarben erhalten zusätzlich Textbeschriftungen.
- Space Grotesk und Manrope werden lokal mit ihren SIL-Open-Font-Lizenzen ausgeliefert.
- Abschnittsnummern, klare Abstände, dezente Rahmen und originale Konzeptkunst prägen die Identität.
- Schaltflächen, Ressourcenkarten, Explorer, Dokumentseiten und Tabellen teilen dieselben Designvariablen.

## Aufbau

Die Startseite führt von Identität und öffentlichen Daten über ausgewählte Projekte, kreative Bereiche, Explorer und Ressourcen zu Kontaktlinks. Unterseiten teilen Navigation und Fußbereich. Dokumente verlinken zur Bibliothek und bieten den Markdown-Download an.

## Responsive Bedienung und Barrierefreiheit

Fließende Typografie und Raster ergänzen ein tastaturbedienbares mobiles Menü. Fokusmarkierungen, Sprunglink und Formularbeschriftungen sind vorhanden. Filterzustände verwenden `aria-pressed`; Trefferzahlen werden zurückhaltend angekündigt. Breite Tabellen scrollen in beschrifteten Bereichen.

Animationen starten als Standbilder und laden erst auf Anforderung. Sie pausieren außerhalb des sichtbaren Bereichs oder bei aktivierter Bewegungsreduktion. Statische Inhalte bleiben ohne JavaScript verfügbar.

## Inhalte und Evidenz

Öffentliche Zahlen und Sprachanteile stammen aus einem verifizierten Snapshot. Eigene Projekte und Forks bleiben unterscheidbar. Bilder sind als Konzeptkunst gekennzeichnet. Historische Bewertungen und Inventare bleiben in datierten Archiven.

Web-Bedienelemente werden durch das gemeinsame Browsermodul übersetzt. Umfangreiche Referenzen bleiben unter `docs/de/` und `docs/en/` getrennt.

Die Gestaltung liegt in `src/styles/tokens.css`, `base.css`, `layout.css`, `components.css` und `pages.css`. Die [Architekturreferenz](./ARCHITECTURE-DE.md) beschreibt Module und Veröffentlichung.

## Eigene Technologie-Icons (November 2026)

Zwölf lokal gespeicherte SVG-Piktogramme unter `assets/technology/` werden in der GitHub-README und den Technologie-Karten der Website gemeinsam verwendet. Es handelt sich um originelle CRYO-Metaphern und nicht um offizielle Markenlogos. Jedes Symbol hat eine sichtbare Beschriftung und einen Quellnachweis. Paketabhängigkeiten belegen weder Expertise noch Produktiv-Releases. Die SVG-Dateien besitzen Titel und Beschreibung; auf der Website wird der benachbarte Text für die Beschriftung genutzt, die Bilder sind dekorativ.

Die neue README nutzt `assets/readme-flow.svg` für den Weg von Discovery über Implementierung und Prüfung zur Veröffentlichung. Die Inventar-Markierung und Zahlen-Badges bleiben durch den GitHub-Sync automatisiert.
