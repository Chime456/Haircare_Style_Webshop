# Styling Guide - Care To Style Webshop

## Design-Prinzipien

1. **Premium Gold Theme** - Gold (`#c5a572`), Grey und Weiss als Hauptfarben
2. **Uppercase Typografie** - Alle Titel, Navigation und Buttons in Grossbuchstaben
3. **Grosse Typografie** - Auffaellige, fette Ueberschriften fuer maximale Wirkung
4. **Accessibility** - Skip-Links, ARIA-Labels, Fokus-States
5. **Responsive** - Mobile, Tablet, Desktop mit 3 Breakpoints
6. **100% HTML/CSS** - Keine Frameworks, minimale JS (nur Warenkorb & Popups)

---

## Farben (Color Palette)

| Variable | Wert | Verwendung |
|----------|------|------------|
| `--bg` | `#ffffff` | Haupt-Hintergrund |
| `--bg-alt` | `#f2f0ed` | Alternate Sektionen, Footer |
| `--panel` | `#ffffff` | Card/Panel Hintergrund |
| `--text` | `#2c2c2c` | Primaerer Text, Buttons |
| `--text-muted` | `#6e6e6e` | Sekundaerer Text, Labels |
| `--gold` | `#c5a572` | Akzentfarbe, Hover, Active |
| `--gold-dark` | `#a88b5a` | Hover-Buttons |
| `--gold-light` | `#f5efe7` | Leichte Akzent-Hintergruende |
| `--border` | `#d9d4ce` | Rahmen, Trennlinien |
| `--shadow` | `0 4px 20px rgba(0,0,0,0.06)` | Card Schatten |
| `--shadow-hover` | `0 8px 30px rgba(197,165,114,0.15)` | Hover Schatten |

```
#2c2c2c (Text)      ████████████████████
#c5a572 (Gold)       ████████████████████
#6e6e6e (Muted)      ████████████████████
#d9d4ce (Border)     ████████████████████
#f2f0ed (Bg-alt)     ████████████████████
#ffffff (Bg)         ████████████████████
```

---

## Typografie

### Schriftfamilie
```css
font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
```

### Schriftgroessen

| Element | Groesse | Weight | Besonderheiten |
|---------|---------|--------|----------------|
| Hero Title | `clamp(38px, 5vw, 64px)` | 800 | uppercase |
| Section Title | 32px | 700 | uppercase, letter-spacing |
| Product Name | 15px | 600 | - |
| Product Price | 18px | 700 | - |
| Body Text | 15px | 400 | line-height: 1.7 |
| Labels | 13px | 500 | - |
| Nav Links | 13px | 600 | uppercase, letter-spacing: 0.08em |
| Logo | 18px | 700 | uppercase, letter-spacing: 0.1em |
| Badges | 12px | 500 | - |
| Newsletter Overlay | 15px | - | color: #fff |

---

## Abstaende (Spacing)

| Element | Wert |
|---------|------|
| Container Max | 1400px |
| Container Padding | 0 32px (Desktop), 0 24px (Tablet), 0 20px (Mobile) |
| Section Padding | 60px 0 |
| Section Title Margin | 0 0 8px |
| Section Subtitle Margin | 0 0 32px |
| Grid Gap | 24px |
| Card Padding | 16px |
| Button Padding | 14px 28px |

### Border Radius
| Element | Wert |
|---------|------|
| `--radius` | 8px (Buttons, Inputs) |
| `--radius-sm` | 6px (Badges) |
| `--radius-lg` | 12px (Cards, Panels) |

---

## Komponenten

### Header
```
sticky, position: fixed, weisser Hintergrund, 1px Border unten
Flex-Layout: Logo links, Nav absolut zentriert, Cart Icon rechts
Padding: 20px 0 (Desktop), 18px 0 (Tablet)
```

### Navigation
- Horizontale Links, 36px Abstand, uppercase, letter-spacing: 0.08em
- Aktiver Link: goldene Farbe + untere Border in Gold
- Hover: Farbe wechselt zu `--gold`
- Tablet: Nav wird statisch, gap reduziert auf 14px
- Mobile: Nav wrapped, zentriert

### Buttons
```css
/* Primary */
background: var(--gold); color: #fff;
padding: 14px 28px; border-radius: var(--radius);
font-weight: 600; font-size: 14px; text-transform: uppercase;

/* Outline */
background: transparent; color: var(--text);
border: 1px solid var(--border);

/* Small */
padding: 10px 18px; font-size: 12px;
```

### Produkt-Karten
```
Border: 1px solid var(--border)
Border-Radius: var(--radius-lg)
Overflow: hidden
Hover: shadow-hover + translateY(-2px)
Bild: aspect-ratio: 1, object-fit: cover (oder contain bei speziellen Produkten)
Titel: 15px, uppercase
Preis: 18px, bold
```

### Marken-Karten (Brands Page)
```
Border: 1px solid var(--border)
Border-Radius: var(--radius-lg)
Padding: 32px 24px
Text: zentriert
Hover: border-color: var(--gold) + shadow
```

### Newsletter (Inline)
```
Full-width Section, Hintergrund: var(--text) (#2c2c2c)
Min-Height: 500px (Desktop), 350px (Mobile)
Text: weiss, zentriert
Formular: Email-Input + Button nebeneinander
Mobile: Formular stapelt vertikal
```

### Newsletter-Popup
```
Overlay: fixed, inset: 0, background: rgba(0,0,0,0.5)
Box: max-width 480px, zentriert, weiss
Erscheint nur beim ersten Besuch (sessionStorage)
Schliessen via X-Button oder Bestaetigung
```

### Warenkorb
```
Badge: absolut positioniert, gold, rund, min-width: 18px
Cart Items: Border-bottom Trennung, Flex-Layout
Mengen-Steuerung: +/- Buttons, Anzahl-Anzeige
Gesamt: rechtsbuendig, bold
Checkout-Button: gold, full-width
```

### Payment-Badges (Footer)
```
Span-Tags mit Border, Border-Radius, Padding
Visa, Mastercard, TWINT, PostFinance, PayPal, Rechnung, Vorauskasse
```

### FAQ-Akkordeon
```
details/summary Element
Border: 1px solid var(--border)
Border-Radius: var(--radius)
Padding: 20px
Cursor: pointer
```

### Ueber-Uns-Karten
```
Border: 1px solid var(--border)
Border-Radius: var(--radius-lg)
Padding: 32px 24px
Text: zentriert
Hover: border-color: var(--gold) + shadow
3-Spalten-Grid
```

### Formular-Elemente
```
Padding: 12px 16px
Border: 1px solid var(--border)
Border-Radius: var(--radius)
Background: var(--bg)
Focus: border-color: var(--gold), outline: none
Textarea: min-height: 120px, resize: vertical
```

### Badges
```
Padding: 6px 12px
Background: var(--bg-alt)
Border: 1px solid var(--border)
Border-Radius: var(--radius-sm)
Font-Size: 12px
```

### Footer
```
Background: var(--bg-alt)
Border-Top: 1px solid var(--border)
Padding: 48px 0 24px
Grid: 3 Spalten (Nav, Zahlungsmethoden, Service)
```

---

## Layout-System

### Produkt-Grid
```css
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 24px;

@media (max-width: 980px) { grid-template-columns: repeat(2, 1fr); }
@media (max-width: 560px) { grid-template-columns: 1fr; }
```

### Marken-Grid (Brands Page)
```css
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 24px;

@media (max-width: 980px) { grid-template-columns: repeat(2, 1fr); }
@media (max-width: 560px) { grid-template-columns: 1fr; }
```

### Ueber-Uns-Grid
```css
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 24px;

@media (max-width: 980px) { grid-template-columns: repeat(2, 1fr); }
@media (max-width: 560px) { grid-template-columns: 1fr; }
```

### Produkt-Detail-Grid
```css
display: grid;
grid-template-columns: 1fr 1fr;
gap: 48px;

@media (max-width: 980px) { grid-template-columns: 1fr; }
```

### Kontakt-Grid
```css
display: grid;
grid-template-columns: 1fr 1fr;
gap: 48px;

@media (max-width: 980px) { grid-template-columns: 1fr; }
```

### Formular-Grid
```css
display: grid;
grid-template-columns: 1fr 1fr;
gap: 16px;

.full { grid-column: 1 / -1; }

@media (max-width: 560px) { grid-template-columns: 1fr; }
```

### Footer-Grid
```css
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 40px;

@media (max-width: 980px) { grid-template-columns: 1fr; }
```

---

## Responsive Breakpoints

| Breakpoint | Breite | Anpassungen |
|------------|--------|-------------|
| Desktop | > 980px | 3 Spalten Grids, Header-Padding 20px, Section 60px |
| Tablet | 768px - 980px | 2 Spalten, Header-Padding 18px, Container 40px, Section 50px |
| Mobile | < 560px | 1 Spalte, Header wraps, Container 20px, Section 40px |

### Tablet-spezifisch
- `.container { padding: 0 40px; }` — Mehr Abstand an den Raendern
- `.header-inner { padding: 18px 0; }` — Grosserer Header
- Navigation wird statisch (nicht mehr absolut zentriert)
- Footer-Grid stapelt zu 1 Spalte

### Mobile-spezifisch
- `.header-inner { flex-wrap: wrap; justify-content: center; }`
- Alle Grids auf 1 Spalte
- Newsletter-Formular stapelt vertikal
- Popup-Formular stapelt, max-height mit Scroll

---

## Seiten-Liste

| Seite | Datei | Besonderheiten |
|-------|-------|---------------|
| Startseite | `index.html` | Hero, Bestseller, Kategorien, Newsletter, Footer |
| Produkte | `products.html` | 30 Produkte, CSS-only Filter (10 Kategorien) |
| Produktdetail | `product.html` | 30 Sektionen, CSS `:target` Routing |
| Marken | `brands.html` | 10+ Marken-Karten, Haartypen-Guide |
| Kontakt | `contact.html` | Ueber uns, Kontaktformular, FAQ-Akkordeon |
| Warenkorb | `cart.html` | localStorage, Mengen-Steuerung, Checkout |
| Bestaetigung | `thankyou.html` | Bestellbestaetigung, Warenkorb wird geleert |
