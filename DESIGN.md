---
version: "1.0"
name: SectorHLabs
description: "A near-black developer studio landing canvas built around #010102 (deep dark surface), light gray text (#f7f8f8), and a signature lavender-blue (#5e6ad2) accent. The system reads as technical, minimal, and quietly luxurious — perfect for a small dev studio building games, apps, and AI tools. Display type uses Inter (SF Pro Display fallback) at 500-700 with measured negative tracking. Cards live as charcoal panels (#0f1011) with hairline borders."

colors:
  primary: "#5e6ad2"
  on-primary: "#ffffff"
  primary-hover: "#828fff"
  primary-focus: "#5e69d1"
  ink: "#f7f8f8"
  ink-muted: "#d0d6e0"
  ink-subtle: "#8a8f98"
  ink-tertiary: "#62666d"
  canvas: "#010102"
  surface-1: "#0f1011"
  surface-2: "#141516"
  surface-3: "#18191a"
  hairline: "#23252a"
  hairline-strong: "#34343a"
  semantic-success: "#27a644"

typography:
  display-xl:
    fontFamily: "Inter, SF Pro Display, -apple-system, system-ui, sans-serif"
    fontSize: 72px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-3.0px"
  display-lg:
    fontFamily: "Inter, SF Pro Display, -apple-system, system-ui, sans-serif"
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.10
    letterSpacing: "-1.8px"
  display-md:
    fontFamily: "Inter, SF Pro Display, -apple-system, system-ui, sans-serif"
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-1.0px"
  headline:
    fontFamily: "Inter, SF Pro Display, -apple-system, system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: "-0.6px"
  subhead:
    fontFamily: "Inter, SF Pro Display, -apple-system, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: "-0.2px"
  body-lg:
    fontFamily: "Inter, -apple-system, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.60
    letterSpacing: "-0.1px"
  body:
    fontFamily: "Inter, -apple-system, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.60
    letterSpacing: "0"
  caption:
    fontFamily: "Inter, -apple-system, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: "0"
  button:
    fontFamily: "Inter, -apple-system, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: "0"
  eyebrow:
    fontFamily: "Inter, -apple-system, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.30
    letterSpacing: "0.8px"
    textTransform: "uppercase"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: "0"

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  pill: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    border: "1px {colors.hairline-strong}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
  card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "24px"
    border: "1px {colors.hairline}"
  nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    height: 56px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.caption}"
    padding: "48px 24px"

## Overview

SectorHLabs landing page follows a deep dark canvas (#010102) with lavender-blue (#5e6ad2) as the single chromatic accent. The design is technical, minimal, and product-focused — reflecting a small dev studio that builds games, apps, and AI tools without committing to a single niche.

**Key Characteristics:**
- Deep dark canvas (#010102) — near-pure black with faint blue tint
- Single lavender-blue accent (#5e6ad2) used sparingly for CTAs and brand elements
- Inter font family with aggressive negative tracking on display type
- Charcoal cards (#0f1011) with hairline borders for content elevation
- Generous section spacing (96px) with dense content within sections
- No gradients, no decorative elements — pure technical minimalism

## Colors

### Brand & Accent
- **Primary** (#5e6ad2): Lavender-blue — CTAs, links, brand emphasis
- **Primary Hover** (#828fff): Lighter lavender for hover states
- **Primary Focus** (#5e69d1): Focus ring tint

### Surface
- **Canvas** (#010102): Default page background
- **Surface 1** (#0f1011): Card backgrounds, elevated panels
- **Surface 2** (#141516): Featured cards, hovered states
- **Hairline** (#23252a): Card borders, dividers
- **Hairline Strong** (#34343a): Focus rings, emphasized borders

### Text
- **Ink** (#f7f8f8): Headlines, primary text
- **Ink Muted** (#d0d6e0): Secondary text, descriptions
- **Ink Subtle** (#8a8f98): Tertiary text, footer, captions
- **Ink Tertiary** (#62666d): Disabled, subtle hints

## Typography

### Font Stack
- **Display/Body**: `Inter, SF Pro Display, -apple-system, system-ui, sans-serif`
- **Mono**: `JetBrains Mono, ui-monospace, SF Mono, Menlo, monospace`

### Hierarchy
| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| display-xl | 72px | 600 | 1.05 | -3.0px | Hero headline |
| display-lg | 48px | 600 | 1.10 | -1.8px | Section headlines |
| display-md | 36px | 600 | 1.15 | -1.0px | Sub-section headlines |
| headline | 24px | 600 | 1.20 | -0.6px | Card titles |
| subhead | 18px | 400 | 1.40 | -0.2px | Lead paragraphs |
| body-lg | 16px | 400 | 1.60 | -0.1px | Default body |
| body | 14px | 400 | 1.60 | 0 | Small text, footer |
| caption | 12px | 400 | 1.40 | 0 | Captions, meta |
| button | 14px | 500 | 1.20 | 0 | Button labels |
| eyebrow | 12px | 500 | 1.30 | 0.8px | Section labels (uppercase) |

## Layout

### Spacing System
- Base unit: 4px
- Section spacing: 96px
- Card padding: 24px
- Container max-width: 1200px

### Grid
- Desktop: 3-column grid for cards
- Tablet (768px): 2-column grid
- Mobile (480px): Single column

## Components

### Buttons
- **Primary**: Lavender background, white text, 8px radius
- **Secondary**: Transparent background, hairline border, white text

### Cards
- Surface-1 background, hairline border, 12px radius, 24px padding

### Navigation
- Sticky top bar, 56px height, canvas background
- Logo left, links center, CTA right

## Do's and Don'ts

### Do
- Use canvas (#010102) as the anchor surface
- Reserve lavender (#5e6ad2) for CTAs and brand emphasis only
- Apply negative letter-spacing on display type
- Use surface ladder for hierarchy (canvas → surface-1 → surface-2)
- Keep sections dense and technical

### Don't
- Don't introduce secondary accent colors
- Don't use atmospheric gradients or decorative elements
- Don't use true black (#000000) as canvas
- Don't overload sections with visual noise

## Responsive Behavior

### Breakpoints
| Name | Width | Changes |
|---|---|---|
| Desktop | 1200px | Default layout, 3-column grids |
| Tablet | 768px | 2-column grids, nav hamburger |
| Mobile | 480px | Single column, display-xl scales to 36px |

### Touch Targets
- Minimum 44px tap height for all interactive elements
- Form inputs ≥44px on touch viewports
