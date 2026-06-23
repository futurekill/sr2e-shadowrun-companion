# Shadowrun Companion Module — Development Notes

A FoundryVTT **V13** content module adding *Shadowrun Companion: Beyond the
Shadows* (FASA 7905) character options to the **Shadowrun 2nd Edition system**
(`sr2e`). Separate package: own repo, own packs, no shared code. Depends on the
system via `module.json` → `relationships.systems` (sr2e ≥ 0.9.0).

The headline content is the full **Edges & Flaws** catalog, which uses the
system's `quality` item type (Edge/Flaw with a build-point value, kind, category,
source, notes). Rigger 2 shipped only its 5 new rigger qualities; this module is
the whole system (Attribute / Skill / Physical / Mental / Social / Magical /
Miscellaneous Edges & Flaws, book ~p.21+).

## Source material — HAS A TEXT LAYER
Unlike Rigger 2 / Fields of Fire (scanned images), the Companion PDF
(`../Shadowrun 2e - Shadowrun Companion - Beyond the Shadows {FASA7905}.pdf`) is
**digital with a real text layer** — `pdftotext` extracts cleanly. Still verify
point values against the source (tables can mis-order), but transcription is much
faster than the scanned books. Extraction lives in `_work/` (git-ignored).

## The `quality` item type (system contract)
`QualityData` = { kind: "edge"|"flaw", category: skill|mental|physical|social|
other (+ attribute/magical mapped as appropriate), pointValue (Edges positive,
Flaws negative — the build-point cost/grant), source, notes }. Match these fields
exactly; see the system `module/data/item-data.mjs` and `config.mjs` qualityKinds
/ qualityCategories.

## Authoring conventions
- Content is **game facts** (name, kind, category, point value) into per-document
  JSON, with **original/summarised** descriptions — never paste verbatim flavour.
- One generator per category (`tools/gen-*.mjs`). `npm run validate` after build.
- Build batched by Edge/Flaw category; commit each batch.

## Packs are COMMITTED (not gitignored)
Like Rigger 2 / FF, `packs/` (built LevelDB) is committed so a fresh checkout
never shows empty compendiums. Close Foundry before rebuilding (LevelDB locks).

## Build workflow
`packs-src/` (JSON, source of truth) → `npm run build-packs [name]` → `packs/`.
`npm run extract-packs` pulls Foundry edits back. Release fires on a `vX.Y.Z` tag.

## Copyright
*Shadowrun Companion* / *Shadowrun* are © FASA and rights holders. Personal table
use only, from a PDF the owner has; not for distribution. Keep `_work/` out of git.
