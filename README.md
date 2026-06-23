# Shadowrun 2E: Shadowrun Companion

A content module for the [SR2E FoundryVTT system](../sr2e-foundryvtt) adding the
character options from the *Shadowrun Companion: Beyond the Shadows* (FASA 7905) —
headlined by the full **Edges & Flaws** catalog — as compendia.

Requires the `sr2e` system (which provides the `quality` Edge/Flaw item type) and
is enabled per-world. Private repo — copyrighted FASA content, personal use only.

## Status
Early scaffold. Transcribing the Edges & Flaws catalog (Attribute / Skill /
Physical / Mental / Social / Magical / Miscellaneous) into `sc-qualities`. See
`docs/PLAN.md`.

## Build
```
npm install
npm run build-packs   # packs-src/ JSON -> packs/ LevelDB (close Foundry first)
npm run validate      # JSON/keys/dup-id/count checks
```
See `CLAUDE.md` and `docs/PLAN.md`.
