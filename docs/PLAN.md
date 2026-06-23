# Shadowrun Companion — Survey & Transcription Plan

Source: *Shadowrun Companion: Beyond the Shadows* (FASA 7905). **Digital PDF with
a real text layer** (`pdftotext` works) — but the master table's numbers come out
OCR-garbled, so verify point values against a page render of the table.

## Scope (this module)
The headline content is the full **Edges & Flaws** catalog → `sc-qualities`
(system `quality` item type). Other Companion content (new character types /
shapeshifters, contacts/archetypes, gear) is out of scope for now.

## Edges & Flaws (book ~p.21-39 / PDF p.25-39)
Master list: the **EDGES AND FLAWS TABLE** (PDF p.36) gives every entry + point
value; descriptions are in the category sections (PDF p.25-39). Point value sign:
Edges **positive** (cost build points), Flaws **negative** (grant build points);
stored on `quality.pointValue`. `category` maps to skill/mental/physical/social/
other (Attribute→other or a dedicated value; Magical→other).

Categories (≈70 entries):
- **Attribute Edges:** Bonus Attribute Point, Exceptional Attribute
- **Skill:** Aptitude, Bonus Skill Point, Home Ground (Edges); Incompetence (Flaw)
- **Physical:** Adrenaline Surge, Ambidexterity, Double-Jointed, High Pain
  Tolerance, Lightning Reflexes, Natural Immunity, Night Vision, Quick Healer,
  Resistance to Pathogens/Toxins, Toughness, Will to Live (Edges); Allergy,
  Bio-Rejection, Blind, Borrowed Time, Color Blind, Deaf, Infirm, Low Pain
  Tolerance, Night Blindness, Paraplegic, Quadriplegic, Sensitive System, Weak
  Immune System (Flaws)
- **Mental:** Bravery, College/High-School/Technical-School Education, Common
  Sense, Perceptive, Perfect Time, Photographic Memory, Sense of Direction
  (Edges); Amnesia, Combat Monster, Combat Paralysis, Compulsive, Flashbacks,
  Impulsive, Illiterate, Oblivious, Pacifist, Phobia, Total Pacifist, Uneducated,
  Vindictive (Flaws)
- **Social:** Animal Empathy, At Ease, Blandness, Day Job, Extra Contact, Friends
  Abroad, Friends in High Places, Human-Looking, Good Reputation (Edges);
  Addiction, Bad Reputation, Dark Secret, Dependent, Hung Out to Dry, Uncouth
  (Flaws)
- **Magical:** Bonus Force Point, Focused Concentration, Magic Resistance, Magical
  Talent (Spellcasting/Summoning/Astral Sight/Poor Link) (Edges); Bad Karma (Flaw)
- **Miscellaneous:** Registered Equipment, State-of-the-Art Model (Edges); Cortex
  Bomb, Hunted, Mysterious Cyberware/Bioware, Police Record (Flaws)

## Batch order
1. **Edges** (positive) → `sc-qualities`, by category.
2. **Flaws** (negative) → `sc-qualities`, by category.
3. (Later) other Companion content if desired.

## Notes
- Rigger 2 already shipped 5 new rigger qualities (Computer Illiterate, Sensitive
  Neural Structure, Simsense Vertigo, Spike Resistance, Gremlins) — those are
  Rigger-2-native; the Companion catalog is the general system.
- Several values are "Variable" / ranges (Allergy −1 to −4, Magic Resistance 1-4,
  Lightning Reflexes 2-6, etc.) — store the base/representative value + the full
  range in notes.
