# Styling Guide - Haircare Style Webshop

## Farben (Color Palette)

| Variable | Wert | Verwendung |
|----------|------|------------|
| `--bg` | `#ffffff` | Haupt-Hintergrund |
| `--panel` | `#ffffff` | Card-/Panel-Hintergrund |
| `--text` | `#111111` | Primärer Text |
| `--muted` | `#5f5f5f` | Sekundärer Text, Subtitles |
| `--border` | `#e5e5e5` | Rahmen, Unterteilungen |
| `--shadow` | `0 12px 34px rgba(0,0,0,.06)` | Schatten für Cards/Popups |

### Farbpalette Visualisierung

```
┌─────────────────────────────────────────────┐
│ #111111 (Text)                              │
│ ██████████████████████████████████████████  │
│                                             │
│ #5f5f5f (Muted)                             │
│ ████████████████████████████████████████    │
│                                             │
│ #e5e5e5 (Border)                             │
│ ████████████████████████████████████████    │
│                                             │
│ #ffffff (Background)                        │
│ ████████████████████████████████████████    │
└─────────────────────────────────────────────┘
```

---

## Typografie

### Schriftfamilie

```css
font-family: ui-sans-serif, system-ui, -apple-system, 
              Segoe UI, Roboto, Helvetica, Arial, 
              "Apple Color Emoji","Segoe UI Emoji";
```

### Schriftgrößen

| Element | Größe | Weight | Line-Height |
|---------|-------|--------|--------------|
| Hero Title | `clamp(34px, 4vw, 56px)` | 900 | 1.03 |
| Section Title | 20px | 900 | - |
| Product Title | 16px | 900 | - |
| Body Text | 14px | 400 | 1.5 |
| Labels | 13px | - | - |
| Badges | 12px | - | - |
| Nav Links | 12px | 650 | - |
| Logo Name | - | 800 | - |

### Schrift-Guide

```
HERO TITLE
The quick brown fox jumps over the lazy dog.
Size: clamp(34px, 4vw, 56px), Weight: 900

SECTION TITLE
The quick brown fox jumps over the lazy dog.
Size: 20px, Weight: 900

PRODUCT TITLE
The quick brown fox jumps over the lazy dog.
Size: 16px, Weight: 900

BODY TEXT
The quick brown fox jumps over the lazy dog.
Size: 14px, Weight: 400

LABELS
The quick brown fox jumps over the lazy dog.
Size: 13px, Weight: 400, Color: #5f5f5f

BADGES
[Badge] [Badge] [Badge]
Size: 12px, Weight: 400, Color: #5f5f5f
```

---

## Abstände (Spacing)

### Container
```css
--container: 1200px;
padding: 0 24px;
```

### Section-Abstände
| Element | Wert |
|---------|------|
| Main Padding | 34px 0 70px |
| Section Title Margin | 44px 0 16px |
| Card Padding | 14px |
| Panel Padding | 16px |
| Grid Gap | 18px |

### Border Radius
```css
--radius: 14px;      /* Cards, Popups */
--radius-sm: 10px;   /* Buttons, Inputs */
```

---

## Komponenten

### Buttons

```css
/* Primary Button */
background: #111111;
color: #ffffff;
border: 1px solid #111111;
padding: 11px 14px;
border-radius: 12px;
font-weight: 650;

/* Secondary Button */
background: #ffffff;
color: #111111;
border: 1px solid #e5e5e5;
```

### Formularelemente

```css
input[type="email"],
input[type="text"],
input[type="number"],
select,
textarea {
    padding: 11px 12px;
    border: 1px solid #e5e5e5;
    border-radius: 12px;
    background: #ffffff;
    font-size: 14px;
}

textarea {
    min-height: 110px;
    resize: vertical;
}
```

### Cards

```css
background: #ffffff;
border: 1px solid #e5e5e5;
border-radius: 14px;
overflow: hidden;
transition: transform .12s ease, border-color .12s ease, box-shadow .12s ease;

.card:hover {
    transform: translateY(-2px);
    border-color: #cfcfcf;
    box-shadow: 0 12px 30px rgba(0,0,0,.06);
}
```

### Badges

```css
border: 1px solid #e5e5e5;
background: #f7f7f7;
padding: 6px 10px;
border-radius: 999px;
font-size: 12px;
color: #5f5f5f;
```

### Chips

```css
padding: 8px 10px;
border-radius: 999px;
border: 1px solid #e5e5e5;
background: #f7f7f7;
font-size: 13px;
color: #5f5f5f;
```

---

## Layout-System

### Grid

```css
.grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 18px;
}

/* Card-Breiten */
.card { grid-column: span 4; }  /* Desktop: 3 pro Reihe */
@media (max-width: 980px) {
    .card { grid-column: span 6; }  /* Tablet: 2 pro Reihe */
}
@media (max-width: 560px) {
    .card { grid-column: span 12; }  /* Mobile: 1 pro Reihe */
}
```

### Container

```css
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
}
```

---

## Responsive Breakpoints

| Breakpoint | Breite | Anpassungen |
|------------|--------|--------------|
| Desktop | > 980px | Standard-Layout |
| Tablet | 560px - 980px | Hero 1-spaltig, Grid 2-spaltig, Detail Layout gestapelt |
| Mobile | < 560px | Alles 1-spaltig, Navigation wrapped |

### Media Queries

```css
/* Tablet */
@media (max-width: 980px) {
    .hero { grid-template-columns: 1fr; }
    .card { grid-column: span 6; }
    .detail-layout { grid-template-columns: 1fr; }
    .order-grid { grid-template-columns: 1fr; }
    .quiz-form { grid-template-columns: 1fr; }
}

/* Mobile */
@media (max-width: 560px) {
    nav ul { gap: 8px; }
    .hero-title { font-size: 34px; }
    .card { grid-column: span 12; }
    .popup-form { grid-template-columns: 1fr; }
}
```

---

## Spezielle Elemente

### Newsletter Popup (CSS-only)

```css
.newsletter-toggle {
    position: absolute;
    left: -9999px;
}

/* Checkbox-Hack für Toggle */
.newsletter-toggle:checked ~ .newsletter-overlay { display: block; }
.newsletter-toggle:checked ~ .newsletter-popup { display: block; }
```

### Produkt-Filter (CSS-only)

```css
.product-grid .card { display: none; }

#hair-all:checked ~ .product-grid .card { display: block; }
#hair-straight:checked ~ .product-grid .card.hair-straight { display: block; }
/* usw. für: wavy, curly, coily, fine */
```

### Produkt-Detail Tabs (CSS-only)

```css
.product-detail { display: none; }
.product-detail:target { display: block; }
.product-detail:first-child { display: block; }
```

---

## Design-Prinzipien

1. **Minimal & Modern** - Wenig Farben, klare Typografie
2. **Texture-first** - Fokus auf verschiedene Haartypen
3. **Accessibility** - Skip-Links, ARIA-Labels, Fokus-States
4. **CSS-only Interaktion** - Kein JavaScript für Filter/Popups
5. **Responsive First** - Mobile zuerst entwickeln
