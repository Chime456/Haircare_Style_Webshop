# Styling Guide - Haircare Style Webshop

## Design-Prinzipien

1. **Hell & Minimal** - Weisse Hintergruende, dezente Akzente
2. **Texture-first** - Fokus auf verschiedene Haartypen
3. **Accessibility** - Skip-Links, ARIA-Labels, Fokus-States
4. **Responsive** - Mobile, Tablet, Desktop
5. **100% HTML/CSS** - Keine Frameworks, minimale JS

---

## Farben (Color Palette)

| Variable | Wert | Verwendung |
|----------|------|------------|
| `--bg` | `#ffffff` | Haupt-Hintergrund |
| `--bg-alt` | `#f7f7f7` | Alternate Sektionen |
| `--panel` | `#ffffff` | Card/Panel Hintergrund |
| `--text` | `#111111` | Primaerer Text, Buttons |
| `--text-muted` | `#6b6b6b` | Sekundaerer Text, Labels |
| `--border` | `#e5e5e5` | Rahmen, Trennlinien |
| `--shadow` | `0 4px 20px rgba(0,0,0,0.06)` | Card Schatten |
| `--shadow-hover` | `0 8px 30px rgba(0,0,0,0.1)` | Hover Schatten |

```
#111111 (Text)      ████████████████████
#6b6b6b (Muted)     ████████████████████
#e5e5e5 (Border)    ████████████████████
#f7f7f7 (Bg-alt)    ████████████████████
#ffffff (Bg)        ████████████████████
```

---

## Typografie

### Schriftfamilie
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
             Helvetica, Arial, sans-serif;
```

### Schriftgroessen

| Element | Groesse | Weight | Zeilenhoehe |
|---------|---------|--------|-------------|
| Hero Title | `clamp(32px, 5vw, 56px)` | 800 | 1.1 |
| Section Title | 28px | 700 | - |
| Product Name | 14px | 600 | - |
| Product Price | 16px | 700 | - |
| Body Text | 14px | 400 | 1.6 |
| Labels | 13px | 500 | - |
| Badges | 12px | 500 | - |
| Nav Links | 14px | 500 | - |
| Logo | 16px | 700 | - |

---

## Abstaende (Spacing)

| Element | Wert |
|---------|------|
| Container Max | 1200px |
| Container Padding | 0 24px |
| Section Padding | 60px 0 |
| Section Title Margin | 0 0 8px |
| Section Subtitle Margin | 0 0 32px |
| Grid Gap | 20px |
| Card Padding | 16px |
| Button Padding | 12px 24px |

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
sticky, weisser Hintergrund, 1px Border unten
Flex-Layout: Logo links, Nav mittig, Cart rechts
```

### Navigation
- Horizontale Links, 28px Abstand
- Aktiver Link: untere Border in Textfarbe
- Hover: Farbe wechselt zu `--text`

### Buttons
```css
/* Primary */
background: var(--text); color: var(--bg);
padding: 12px 24px; border-radius: var(--radius);
font-weight: 600; font-size: 14px;

/* Outline */
background: transparent; color: var(--text);
border: 1px solid var(--border);
```

### Produkt-Karten
```
Border: 1px solid var(--border)
Border-Radius: var(--radius-lg)
Overflow: hidden
Hover: shadow-hover + translateY(-2px)
Bild: aspect-ratio: 1, object-fit: cover
```

### Marken-Karten
```
Border: 1px solid var(--border)
Border-Radius: var(--radius-lg)
Padding: 28px 20px
Text: zentriert
Hover: border-color: var(--text) + shadow
```

### Formular-Elemente
```
Padding: 10px 14px
Border: 1px solid var(--border)
Border-Radius: var(--radius)
Background: var(--bg)
Focus: border-color: var(--text), outline: none
Textarea: min-height: 100px, resize: vertical
```

### Badges
```
Padding: 6px 12px
Background: var(--bg-alt)
Border: 1px solid var(--border)
Border-Radius: var(--radius-sm)
Font-Size: 12px
```

### Video-Karten
```
Border: 1px solid var(--border)
Border-Radius: var(--radius-lg)
Overflow: hidden
iframe: width: 100%, aspect-ratio: 16/9
```

### Footer
```
Background: var(--bg-alt)
Border-Top: 1px solid var(--border)
Padding: 48px 0 24px
Grid: 2fr 1fr 1fr 1fr
```

---

## Layout-System

### Produkt-Grid / Marken-Grid
```css
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 20px;

@media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
}
@media (max-width: 560px) {
    grid-template-columns: 1fr;
}
```

### Video-Grid
```css
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 24px;

@media (max-width: 980px) {
    grid-template-columns: 1fr;
}
```

### Kontakt-Grid / Produkt-Detail-Grid
```css
display: grid;
grid-template-columns: 1fr 1fr;
gap: 48px;

@media (max-width: 980px) {
    grid-template-columns: 1fr;
}
```

### Formular-Grid
```css
display: grid;
grid-template-columns: 1fr 1fr;
gap: 16px;

.full { grid-column: 1 / -1; }

@media (max-width: 560px) {
    grid-template-columns: 1fr;
}
```

### Footer-Grid
```css
display: grid;
grid-template-columns: 2fr 1fr 1fr 1fr;
gap: 40px;

@media (max-width: 980px) {
    grid-template-columns: 1fr;
}
```

---

## Responsive Breakpoints

| Breakpoint | Breite | Anpassungen |
|------------|--------|-------------|
| Desktop | > 980px | Standard-Layout, 4 Spalten Grids |
| Tablet | 560px - 980px | 2 Spalten Grids, Detail-Layout gestapelt |
| Mobile | < 560px | Alles 1-spaltig, Navigation wrapped |

---

## Seiten-Liste

| Seite | Datei | Besonderheiten |
|-------|-------|---------------|
| Startseite | `index.html` | Hero, Bestseller, Kategorien, Videos, Newsletter |
| Produkte | `products.html` | 12 Produkte, JS-Filter, URL-Parameter |
| Produktdetail | `product.html` | Dynamisch via `?id=`, Bild, Video, Bestellformular |
| Marken | `brands.html` | 6 Marken-Karten |
| Quiz | `quiz.html` | Haartyp-Auswahl, JS-Empfehlungen |
| Styling Guide | `styling-guide.html` | Video-Tutorials, Produktempfehlungen |
| Kontakt | `contact.html` | Team, Formular mit Betreff-Dropdown, FAQ |
