# Changelog

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
