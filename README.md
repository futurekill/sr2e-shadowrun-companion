# Shadowrun 2E: Shadowrun Companion

A Foundry VTT V13 module bringing *Shadowrun Companion: Beyond the Shadows* (FASA 7905) to the [Shadowrun 2nd Edition system](https://github.com/futurekill/sr2e-foundryvtt) (`sr2e`). The full **Edges & Flaws** catalog (48 edges, 38 flaws; point values from the master table, p.36) and 14 metahuman variant races (p.39–44).

## Contents

| Pack | Contents |
|---|---|
| SC Edges & Flaws | 86 items |
| SC Metahuman Variants | 14 items |

## Notes

- Edges and flaws use the system's `quality` item type; metahuman variants are `race` items.
- Shapeshifters, the contacts system and the GM rules aren't imported yet.

## Requirements

- Foundry VTT V13
- The `sr2e` system, version 0.39.0 or later

## Installation

In Foundry, **Add-on Modules → Install Module**, and paste this manifest URL:

```
https://github.com/futurekill/sr2e-shadowrun-companion/releases/latest/download/module.json
```

Then enable it in your world (**Game Settings → Manage Modules**).

## Development

`packs-src/` (one JSON file per document) is the source of truth. `packs/` is built from it, gitignored, and rebuilt by the release workflow.

```bash
npm install
npm run build-packs     # packs-src/ JSON -> packs/ LevelDB (close Foundry first)
npm run extract-packs   # pull edits made in Foundry back to packs-src/
npm run validate        # pre-flight checks on the pack sources
npm run lint
```

To release: add a `## X.Y.Z — date` section to `CHANGELOG.md` (the release notes come from it), bump `module.json`, then tag and push `vX.Y.Z`.

## Copyright

*Shadowrun Companion: Beyond the Shadows* and *Shadowrun* are © FASA and their rights holders. This is a fan-made, non-commercial module for personal table use by owners of the book.
