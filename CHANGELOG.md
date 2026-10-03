# Changelog

## 0.3.0 — 2026-07-26

### Added
- Custom art for all 100 documents, replacing Foundry's stock icons. Edges and
  flaws are symbolic emblems (edges warm, flaws cold and damaged); the 14
  metahuman variants are portrait busts drawn from each variant's own book
  description.

### Fixed
- The dev notes gave the required system as sr2e 0.9.0; Attribute Edges need
  0.39.0.
- Releases no longer package `.DS_Store` files.

## 0.2.1 — Attribute Edges

### Fixes
- **The two Attribute Edges (p.24) now work.** Bonus Attribute Point and
  Exceptional Attribute carry their new Attribute / Attribute Bonus / Racial
  Maximum Bonus fields, so picking the Attribute on the item applies the Edge
  instead of leaving you to add the points by hand. Requires SR2E system 0.39.0.
- **Both notes were wrong and are rewritten.** Exceptional Attribute claimed to
  raise an Attribute "one point above its natural racial maximum" — the book says
  it raises the **maximum only** and does not move the rating. Bonus Attribute
  Point's note now records the 5-point cap, the racial-maximum bound, and the
  Edge value of 2 for a point taken past the original maximum.

## 0.2.0 — Metahuman variants

**14 metahuman variant races** (`sc-metatypes`, book p.39-44) as system `race`
items: Cyclops, Fomori, Giants, Minotaurs (troll); Koborokuru, Menehune, Gnomes
(dwarf); Hobgoblin, Oni, Ogre, Satyr (ork); Wakyambi, Night Ones, Dryads (elf).
Each is its base metatype's racial mods with the printed exceptions applied,
render-verified. Drag onto a character like any race.

Skipped: shapeshifters (need dual-form/regen actor support — out of scope for
now) and albinism (just any metatype + the sunlight Allergy flaw, already in
`sc-qualities`).

## 0.1.0 — Edges & Flaws

The full *Shadowrun Companion: Beyond the Shadows* (FASA 7905) Edges & Flaws
catalog — **86 qualities** (48 edges + 38 flaws) across attribute / skill /
physical / mental / social / magical / miscellaneous — in the `sc-qualities`
compendium, using the system's `quality` item type. Point values verified against
the master Edges & Flaws Table (book p.36); ranges/Variable store the base
magnitude with the full range in notes.

Requires the `sr2e` system ≥ 0.10.0 (which provides the `quality` item type and
its attribute/social/magical categories).
