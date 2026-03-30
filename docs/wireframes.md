# Wireframes - Haircare Style Webshop

## Breakpoints (Media Queries)

| Breakpoint | Breite | Grid-Spalten | Layout |
|------------|--------|--------------|--------|
| Desktop | > 980px | 12 | 2-Spalten, 3-Spalten Cards |
| Tablet | 560px - 980px | 6 | 1-Spalten Hero, 2-Spalten Cards |
| Mobile | < 560px | 12 | Einspaltig, gestapelt |

---

## Desktop (> 980px)

### Startseite (index.html)

```
┌─────────────────────────────────────────────────────────┐
│ HEADER (sticky)                                         │
│ [Logo: Haircare Style]    [Nav: Home|Products|Quiz...] │
├─────────────────────────────────────────────────────────┤
│ HERO SECTION                                            │
│ ┌─────────────────────────┐ ┌─────────────────────────┐ │
│ │ Minimal. Modern.        │ │ Quick paths:            │ │
│ │ Your best hair days    │ │ [Chip] [Chip] [Chip]    │ │
│ │ start here.            │ │                         │ │
│ │ [Btn: Quiz] [Btn: Shop]│ │ Newsletter inline:      │ │
│ └─────────────────────────┘ │ [Email] [Join]         │ │
│                             └─────────────────────────┘ │
├─────────────────────────────────────────────────────────┤
│ FEATURED TODAY                                          │
│ ┌───────────┐ ┌───────────┐ ┌───────────┐              │
│ │ [Bild]    │ │ [Bild]    │ │ [Bild]    │  (3 Cards) │
│ │ Bestseller│ │ Best choice│ │ Viral    │              │
│ │ Product 1 │ │ Product 2  │ │ Product 3 │              │
│ │ $XX.XX    │ │ $XX.XX     │ │ $XX.XX    │              │
│ │ [View]    │ │ [View]     │ │ [View]    │              │
│ └───────────┘ └───────────┘ └───────────┘              │
├─────────────────────────────────────────────────────────┤
│ CATEGORIES                                             │
│ ┌──────────────────────┐ ┌──────────────────────────┐  │
│ │ Shop by hair type    │ │ Shop by product type    │  │
│ │ [Straight] [Wavy]   │ │ [Shampoo] [Conditioner]  │  │
│ │ [Curly] [Coily]     │ │ [Mask] [Styling Gel]     │  │
│ └──────────────────────┘ └──────────────────────────┘  │
├─────────────────────────────────────────────────────────┤
│ FOOTER                                                 │
│ [Haircare Style Shop]  [Links: Products|Quiz|...]    │
└─────────────────────────────────────────────────────────┘
```

### Produktübersicht (products.html)

```
┌─────────────────────────────────────────────────────────┐
│ HEADER                                                  │
├─────────────────────────────────────────────────────────┤
│ HERO: "Order-ready picks" [Back] [Retake Quiz]         │
├─────────────────────────────────────────────────────────┤
│ FILTERS (CSS-only Checkbox Hack)                       │
│ ○ All  ○ Straight  ○ Wavy  ○ Curly  ○ Coily  ○ Fine    │
├─────────────────────────────────────────────────────────┤
│ PRODUCT GRID (CSS-only Filter)                         │
│ ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌─────────┐  │
│ │ [Bild]    │ │ [Bild]    │ │ [Bild]    │ │ [Bild]  │  │
│ │ Brand     │ │ Brand     │ │ Brand     │ │ Brand   │  │
│ │ Product   │ │ Product   │ │ Product   │ │ Product │  │
│ │ $XX.XX    │ │ $XX.XX    │ │ $XX.XX    │ │ $XX.XX  │  │
│ │ [View]    │ │ [View]    │ │ [View]    │ │ [View]  │  │
│ └───────────┘ └───────────┘ └───────────┘ └─────────┘  │
│ ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌─────────┐  │
│ │ ...       │ │ ...       │ │ ...       │ │ ...     │  │
└─────────────────────────────────────────────────────────┘
```

### Produktdetail (product.html)

```
┌─────────────────────────────────────────────────────────┐
│ HEADER                                                  │
├─────────────────────────────────────────────────────────┤
│ PRODUCT SWITCHER (Tabs)                                │
│ [ManeWave] [CurlCraft] [CoilyKind] [SilkStraight] ... │
├─────────────────────────────────────────────────────────┤
│ PRODUCT DETAIL                                         │
│ ┌─────────────────────────┐ ┌─────────────────────────┐ │
│ │ GALLERY                 │ │ PRODUCT INFO            │ │
│ │ ┌─────────────────────┐ │ │ Product Name            │ │
│ │ │                     │ │ │ Subtitle + Description  │ │
│ │ │    Main Image       │ │ │                        │ │
│ │ │                     │ │ │ [Badge] [Badge]        │ │
│ │ └─────────────────────┘ │ │ Price: $XX.XX          │ │
│ │ ┌───┐ ┌───┐ ┌───┐      │ │                        │ │
│ │ │ 1 │ │ 2 │ │ 3 │      │ │ [Order via email]      │ │
│ │ └───┘ └───┘ └───┘      │ │                        │ │
│ └─────────────────────────┘ └─────────────────────────┘ │
├─────────────────────────────────────────────────────────┤
│ VIDEO SECTION                                          │
│ ┌─────────────────────────────────────────────────────┐ │
│ │              YouTube Video Embed                     │ │
│ └─────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────┤
│ ORDER FORM                                             │
│ Name: [______] Email: [______]                         │
│ Quantity: [__] Delivery: [Standard ▼]                   │
│ Address: [_________________________]                   │
│ [Order via email]                                      │
└─────────────────────────────────────────────────────────┘
```

### Kontakt (contact.html)

```
┌─────────────────────────────────────────────────────────┐
│ HEADER                                                  │
├─────────────────────────────────────────────────────────┤
│ HERO: "We'd love to help"                              │
├─────────────────────────────────────────────────────────┤
│ ┌─────────────────────┐ ┌────────────────────────────┐ │
│ │ TEAM CARD           │ │ CONTACT FORM               │ │
│ │ [Team Image]        │ │ Name:  [__________]        │ │
│ │                     │ │ Email: [__________]         │ │
│ │ Meet the crew       │ │ Subject: [Dropdown ▼]      │ │
│ │ We curate brands    │ │   - Order question          │ │
│ │ for all hair types. │ │   - Product recommendation  │ │
│ │                     │ │   - Shipping & delivery     │ │
│ │                     │ │   - Returns & refunds       │ │
│ │                     │ │   - Newsletter             │ │
│ │                     │ │   - Other                  │ │
│ │                     │ │ Message: [___________]      │ │
│ │                     │ │ [Send message]              │ │
│ └─────────────────────┘ └────────────────────────────┘ │
├─────────────────────────────────────────────────────────┤
│ QUICK CONTACT                                           │
│ [Order & pricing] [Find my match] [Watch routines]    │
└─────────────────────────────────────────────────────────┘
```

---

## Tablet (560px - 980px)

### Layout-Änderungen

```
┌─────────────────────────┐
│ HEADER (flex-wrap)     │
│ [Logo] [Nav]           │
├─────────────────────────┤
│ HERO (1 Spalte)        │
│ ┌─────────────────────┐ │
│ │ Title + Description│ │
│ │ [Btn] [Btn]        │ │
│ └─────────────────────┘ │
│ ┌─────────────────────┐ │
│ │ Sidebar Content    │ │
│ └─────────────────────┘ │
├─────────────────────────┤
│ PRODUCT GRID (2 Spalten)│
│ ┌───────┐ ┌───────┐    │
│ │ Card  │ │ Card  │    │
│ └───────┘ └───────┘    │
│ ┌───────┐ ┌───────┐    │
│ │ Card  │ │ Card  │    │
│ └───────┘ └───────┘    │
├─────────────────────────┤
│ FOOTER                  │
└─────────────────────────┘
```

### Key Changes
- Hero: 2-Spalten → 1-Spalte
- Grid: 3 Cards/Row → 2 Cards/Row
- Detail Layout: Side-by-side → 1-Spalte (Bilder oben, Info unten)
- Order Form: 2-Spalten → 1-Spalte

---

## Mobile (< 560px)

### Layout-Änderungen

```
┌───────────────┐
│ HEADER        │
│ [Logo]        │
│ [Nav Links]   │
├───────────────┤
│ HERO          │
│ Title         │
│ Description   │
│ [Btn] [Btn]   │
├───────────────┤
│ CARDS (1 col) │
│ ┌───────────┐ │
│ │ [Bild]    │ │
│ │ Product   │ │
│ │ Price     │ │
│ │ [View]    │ │
│ └───────────┘ │
│ ┌───────────┐ │
│ │ [Bild]    │ │
│ │ ...       │ │
│ └───────────┘ │
├───────────────┤
│ FOOTER        │
└───────────────┘
```

### Key Changes
- Navigation: Horizontales Menü mit wrap
- Grid: 2 Cards → 1 Card pro Zeile
- Cards: 4 Spalten → 12 Spalten (volle Breite)
- Side-by-Side Panels: 2 Spalten → 1 Spalte
- Newsletter Popup: 2-Spalten Form → 1-Spalte

---

## Technische Details

### Grid System
- **Basis:** CSS Grid mit 12 Spalten
- **Gap:** 18px (Desktop), 14px (Tablet)
- **Card-Breite:** 
  - Desktop: `span 4` (3 pro Reihe)
  - Tablet: `span 6` (2 pro Reihe)
  - Mobile: `span 12` (1 pro Reihe)

### Filter-System (CSS-only)
```css
/* Checkbox-Hack für Filterung */
#hair-all:checked ~ .product-grid .card { display: block; }
#hair-straight:checked ~ .product-grid .card.hair-straight { display: block; }
/* usw. */
```

### Produkt-Detail Navigation
```css
/* :target Selector für Tab-Umschaltung */
.product-detail { display: none; }
.product-detail:target { display: block; }
.product-detail:first-child { display: block; }
```
