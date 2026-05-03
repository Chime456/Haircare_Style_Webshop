# KI-Einsatz Dokumentation - Haircare Style Webshop

## Projektuebersicht

Dieses Projekt ist ein Webshop fuer Haarpflegeprodukte, erstellt mit reinem HTML, CSS und minimalem JavaScript. Das Design ist hell und minimal, mit Fokus auf verschiedene Haartypen.

**Technologien:** HTML5, CSS3, Vanilla JavaScript (keine Frameworks)
**Seiten:** 7 (index, products, product, brands, quiz, styling-guide, contact)
**Produkte:** 12 ueber 6 Marken (Wave, Curly, Coily, Straight, Fine, Repair)

---

## Verwendete KI-Tools

| Tool | Typ | Einsatzzweck |
|------|-----|-------------|
| **opencode (Claude)** | AI-IDE | Code-Generierung, Refactoring, Debugging |
| **ChatGPT** (Web) | LLM Chat | Konzeption, Struktur-Planung |

---

## KI-Einsatz nach Phase

### 1. Projektstruktur & Design
- **KI-Anteil:** Hoch
- **Beschreibung:** Die gesamte Seitenstruktur, das Farbschema und das Layout-System wurden mit KI-Hilfe geplant und implementiert.
- **Beispiel:** CSS Grid-System mit 12-Spalten-Logik und responsive Breakpoints.

### 2. HTML-Seiten
- **KI-Anteil:** Hoch
- **Beschreibung:** Alle 7 HTML-Seiten wurden mit KI-Generierung erstellt, einschliesslich semantischer Struktur, ARIA-Labels und Accessibility-Features.
- **Seiten:**
  - `index.html`: Hero, Bestseller, Kategorien, Videos, Newsletter
  - `products.html`: 12 Produkt-Karten mit JS-Filter
  - `product.html`: Dynamisches Produktdetail mit `?id=` Parameter
  - `brands.html`: 6 Marken-Karten
  - `quiz.html`: Haartyp-Quiz mit Produkt-Empfehlung
  - `styling-guide.html`: Video-Tutorials
  - `contact.html`: Team-Infos, Kontaktformular mit Betreff-Dropdown

### 3. CSS-Styling
- **KI-Anteil:** Hoch
- **Beschreibung:** Das komplette CSS-Stylesheet (`style.css`) wurde mit KI-Hilfe erstellt, einschliesslich CSS-Variablen, Grid-Layouts, Komponenten-Styling und responsive Media Queries.

### 4. JavaScript
- **KI-Anteil:** Mittel
- **Beschreibung:** JavaScript wurde fuer folgende Funktionen implementiert:
  - Produkt-Filter auf `products.html` (Kategorie-Filter)
  - URL-Parameter-Auswertung auf `products.html` und `product.html`
  - Dynamisches Produktladen auf `product.html`
  - Quiz-Empfehlungen auf `quiz.html`

### 5. Dokumentation
- **KI-Anteil:** Hoch
- **Beschreibung:** Wireframes, Styleguide und diese KI-Dokumentation wurden mit KI-Unterstützung erstellt.

---

## Konkrete Beispiele

### Beispiel 1: CSS Grid Layout

**Prompt:**
```
Create a CSS grid for product cards: 4 columns desktop, 2 tablet, 1 mobile.
Light minimal style, white cards with subtle borders.
```

**Ergebnis:**
```css
.product-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}
.product-card {
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    overflow: hidden;
}
@media (max-width: 980px) {
    .product-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
    .product-grid { grid-template-columns: 1fr; }
}
```

### Beispiel 2: Dynamisches Produktladen

**Prompt:**
```
Create a product detail page that loads product data from a JS array
based on a URL parameter ?id=X. Include image, description, price,
badges, video embed, and an order form.
```

**Ergebnis:** Ein `products` Array mit 12 Produkten, das per `URLSearchParams` abgefragt und die DOM-Elemente dynamisch befuellt.

### Beispiel 3: Kontaktformular mit Betreff-Dropdown

**Prompt:**
```
Create a contact form with: name, email, subject dropdown (Bestellung,
Produktberatung, Feedback, Versand, Sonstiges), message textarea.
Include team member cards on the left side.
```

**Ergebnis:** 2-spaltiges Layout mit Team-Karten links und Formular rechts.

---

## Lessons Learned

1. **KI als Werkzeug, nicht als Ersatz:** KI beschleunigt die Entwicklung enorm, aber man muss den Code verstehen und anpassen koennen.

2. **Konsistenz ist wichtig:** Einheitliches Design ueber alle Seiten hinweg erfordert sorgfaeltige Planung der CSS-Variablen und Komponenten.

3. **Iteratives Vorgehen:** Kleine, gezielte Prompts liefern bessere Ergebnisse als grosse, vage Anfragen.

4. **Testing:** KI-generierter Code muss immer getestet werden, besonders bei JavaScript-Logik.

5. **Dokumentation:** Die parallele Dokumentation von Wireframes und Styleguide hilft, das Design konsistent zu halten.

---

## Fazit

KI-Tools haben die Entwicklung dieses Webshop-Projekts massiv beschleunigt. Besonders bei der Erstellung wiederholbarer Komponenten (Produkt-Karten, Formulare, Grid-Layouts) war die KI sehr effektiv. Fuer individuelles Design-Feeling und Feinabstimmung war jedoch manuelle Anpassung notwendig.

**Empfehlung:** KI als produktiven Assistenten nutzen, aber immer den Code verstehen und anpassen koennen.
