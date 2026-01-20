# udyāna: GTM MANIFESTO — "Morning Bloom"

> A gentle space for your thoughts to breathe.  
> Colors should feel like soft morning light filtering through petals.

---

## 🎯 CORE PHILOSOPHY

**Presence over permanence.**

Most apps want you to keep everything forever. udyāna reminds you that emotions are temporary. Thoughts naturally fade — like petals falling from a flower. You choose what to preserve.

---

## 🎨 COLOR PALETTE — Warm Light

### Backgrounds — Creamy Warmth
| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-void` | `#FDF9F6` | Base canvas |
| `--bg-surface` | `#FFFFFF` | Cards, inputs |
| `--bg-elevated` | `#FFF8F3` | Modals, overlays |
| `--bg-hover` | `#FFF0E8` | Interactive hover |

### Accents — Feminine Softness
| Token | Hex | Usage |
|-------|-----|-------|
| `--accent-primary` | `#E8A4C4` | Rose — Main accent |
| `--accent-secondary` | `#C4B0E8` | Lavender |
| `--accent-tertiary` | `#A4D4C4` | Mint |
| `--accent-warm` | `#F0C898` | Honey |
| `--accent-danger` | `#E89494` | Soft coral |
| `--accent-success` | `#94D4A4` | Growth green |

### Text — Warm Contrast
| Token | Hex | Usage |
|-------|-----|-------|
| `--text-primary` | `#3D3A38` | Main text |
| `--text-secondary` | `#6B6560` | 85% - Supporting |
| `--text-muted` | `#9A948E` | 60% - Subtle |
| `--text-ghost` | `#C8C4BE` | 40% - Whisper |

---

## 🌸 EMOTION COLORS

Each emotion has its own gentle hue:

| Emotion | Color | Hex |
|---------|-------|-----|
| Joy | Soft Rose | `#E8A4C4` |
| Peace | Mint | `#A4D4C4` |
| Melancholy | Lavender | `#C4B0E8` |
| Anxiety | Honey | `#F0C898` |
| Anger | Soft Coral | `#E89494` |
| Love | Blush | `#F0C4D8` |
| Confusion | Pale Lavender | `#D4C4E8` |

---

## 🔤 TYPOGRAPHY — "Refined Gentle"

| Element | Font | Weight |
|---------|------|--------|
| UI/Body | `DM Sans` | 400, 500, 600 |
| Display/Heading | `Fraunces` | 400, 500 |

### Scale (Fluid)
```css
--text-xs:   clamp(0.65rem, 0.6rem + 0.25vw, 0.75rem)
--text-sm:   clamp(0.8rem, 0.75rem + 0.25vw, 0.875rem)
--text-base: clamp(0.95rem, 0.9rem + 0.25vw, 1rem)
--text-lg:   clamp(1.1rem, 1rem + 0.5vw, 1.25rem)
--text-xl:   clamp(1.4rem, 1.2rem + 1vw, 1.75rem)
--text-2xl:  clamp(1.8rem, 1.5rem + 1.5vw, 2.5rem)
```

---

## 📐 SPACING — 4px Base

| Token | Value |
|-------|-------|
| `--sp-1` | 0.25rem (4px) |
| `--sp-2` | 0.5rem (8px) |
| `--sp-3` | 0.75rem (12px) |
| `--sp-4` | 1rem (16px) |
| `--sp-5` | 1.5rem (24px) |
| `--sp-6` | 2rem (32px) |
| `--sp-8` | 3rem (48px) |

---

## ✨ ANIMATIONS — Physics-Based

```css
--ease-spring:   cubic-bezier(0.34, 1.56, 0.64, 1)  /* Bouncy */
--ease-friction: cubic-bezier(0.4, 0, 0.2, 1)       /* Smooth */
--ease-expo:     cubic-bezier(0.19, 1, 0.22, 1)     /* Dramatic */
```

### Timing
- Fast: `0.2s` — Hover states
- Medium: `0.5s` — Transitions
- Slow: `0.8s` — Page changes
- Cinematic: `1.2s` — Landing animations

---

## 📱 MOBILE RULES

- Touch targets: **minimum 44px**
- Safe area insets respected (`env(safe-area-inset-*)`)
- Editor height: `50svh` for comfortable typing
- Bottom buttons within thumb reach
- No horizontal scroll

---

## 🌿 ATMOSPHERE EFFECTS

1. **Floating Petals** — Landing page ambiance
2. **Velocity Particles** — React to typing speed
3. **Spotlight Gradient** — Follows cursor
4. **Film Grain** — Subtle texture
5. **Vignette** — Soft edge darkening

---

## 🌻 GARDEN CONSTELLATION

Preserved thoughts become flowers:
- **Petal count** based on content length
- **Petal shape** varies by emotion type
- **Clustering** by emotion proximity
- **Connection lines** between same-emotion blooms
- **Breathing animation** — Gentle pulse

---

## ✅ SUCCESS CRITERIA

- [x] Warm, not clinical
- [x] Readable at all sizes
- [x] 44px touch targets
- [x] No horizontal scroll
- [x] Centered, calm editor
- [x] Emotions feel distinct but harmonious
- [x] Decay feels natural, not punishing
- [x] Export cards are shareable

---

## 💡 TAGLINES

**Primary:** *"a gentle space for your thoughts to breathe"*

**Alternatives:**
- *"let your emotions bloom, then let them go"*
- *"presence over permanence"*
- *"write. feel. release."*

---

*Built with 🤍 and AI assistance.*
