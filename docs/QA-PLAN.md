# QA plan — Shadowrun Companion module

Run before every release. Automated checks first, then the in-Foundry pass.

## Automated
- `npm run lint` — ESLint 9, 0 errors and 0 warnings.
- `npm run validate` — every pack document matches the live sr2e schema.
- `npm run build-packs` — builds `packs/` from `packs-src/` (Foundry closed).

## Edges & Flaws (sc-qualities)
- Point values match the Edges and Flaws Table (p.35); a ranged or "Variable" entry holds its lowest value and the
  player edits it on the item.
- Drop Bonus Attribute Point (pick an Attribute) on a character in creation: the rating rises by one.
- Drop Exceptional Attribute: the racial maximum rises, the rating doesn't.

## Metahuman variants (sc-metatypes)
- Drop a variant (e.g. Cyclops) on a character: its base race applies; the description lists the variant's differences.
- Every variant shows its own portrait (not the mystery-man icon).

## Shapeshifters (sc-metatypes, needs sr2e 0.125.0)
- Drop "Shapeshifter (Bear)" on a character: Race reads Shapeshifter, Species Bear, human form; Body and Strength +1.
- The priority panel uses the Shapeshifter table (Attributes B = 24) and warns until Race is A.
- Shift to animal form: Body +5, Strength +5, Willpower −2, worn armor drops out; Shift back restores it.
- Each of the six items sets its own species (Fox, Leopard, Seal, Tiger, Wolf).
