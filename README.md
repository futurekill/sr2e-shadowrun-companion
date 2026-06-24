# Shadowrun 2E: Shadowrun Companion

A content module for the [SR2E FoundryVTT system](../sr2e-foundryvtt) adding the
character options from the *Shadowrun Companion: Beyond the Shadows* (FASA 7905) —
headlined by the full **Edges & Flaws** catalog — as compendia.

Requires the `sr2e` system (which provides the `quality` Edge/Flaw item type) and
is enabled per-world. Private repo — copyrighted FASA content, personal use only.

## Status
**Edges & Flaws catalog complete — 86 qualities** (48 edges + 38 flaws across
attribute / skill / physical / mental / social / magical / miscellaneous) in
`sc-qualities`, point values verified against the master table (book p.36). Other
Also **14 metahuman variant races** (`sc-metatypes`, book p.39-44) as `race`
items. Remaining Companion content (shapeshifters, contacts system, GM rules) is
out of scope for now. See `docs/PLAN.md`. Released as **v0.2.0**.

## Build
```
npm install
npm run build-packs   # packs-src/ JSON -> packs/ LevelDB (close Foundry first)
npm run validate      # JSON/keys/dup-id/count checks
```
See `CLAUDE.md` and `docs/PLAN.md`.
