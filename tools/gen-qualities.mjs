// Generate the Shadowrun Companion Edges & Flaws catalog into packs-src/sc-qualities
// (system `quality` item type). Point values verified against the master Edges &
// Flaws Table (book p.36 render). Ranges/Variable store the base magnitude; the
// full range/notes live in `notes`. Edges = positive points, Flaws = negative.
// Re-run, then `npm run build-packs sc-qualities`.
import { writeFileSync, mkdirSync } from "node:fs";
import { createHash } from "node:crypto";

const DIR = "packs-src/sc-qualities";
mkdirSync(DIR, { recursive: true });
const idFor = (s) => createHash("sha1").update("sc-quality:" + s).digest("hex").slice(0, 16);

function quality(q) {
  const _id = idFor(q.name);
  const icon = q.kind === "edge" ? "icons/svg/upgrade.svg" : "icons/svg/downgrade.svg";
  return {
    _id, name: q.name, type: "quality", img: q.img ?? icon,
    system: {
      kind: q.kind, category: q.category, pointValue: q.value,
      source: q.source ?? "Shadowrun Companion", notes: q.notes ?? ""
    },
    effects: [], flags: {}, folder: null, sort: 0,
    _stats: { coreVersion: "13.351", systemId: "sr2e", systemVersion: "0.0.1", createdTime: 1782000000000, modifiedTime: 1782000000000, lastModifiedBy: null, compendiumSource: null, duplicateSource: null, exportSource: null },
    ownership: { default: 0 }, _key: `!items!${_id}`
  };
}

const E = "edge", F = "flaw";
const QUALITIES = [
  // ===================== EDGES =====================
  // --- Attribute ---
  { name: "Bonus Attribute Point", kind: E, category: "attribute", value: 1, notes: "One extra point to distribute among your Attributes at character creation." },
  { name: "Exceptional Attribute", kind: E, category: "attribute", value: 2, notes: "Raise one Attribute one point above its natural racial maximum." },
  // --- Skill ---
  { name: "Aptitude", kind: E, category: "skill", value: 2, notes: "A natural gift for one skill — its maximum rating rises by 1 and it defaults more readily." },
  { name: "Bonus Skill Point", kind: E, category: "skill", value: 1, notes: "One extra skill point at character creation." },
  { name: "Home Ground", kind: E, category: "skill", value: 2, notes: "Intimate knowledge of one neighborhood/community — bonus dice for tasks there." },
  // --- Physical ---
  { name: "Adrenaline Surge", kind: E, category: "physical", value: 2, notes: "In a sudden crisis, a burst of speed and strength (a one-off initiative/reaction boost when first threatened)." },
  { name: "Ambidexterity", kind: E, category: "physical", value: 2, notes: "Use either hand equally well; no off-hand penalty." },
  { name: "Double-Jointed", kind: E, category: "physical", value: 1, notes: "Unusual flexibility — bonus to escape bonds or squeeze through tight spaces." },
  { name: "High Pain Tolerance", kind: E, category: "physical", value: 1, notes: "Variable: ignore wound modifiers from some damage boxes (1 point per box ignored)." },
  { name: "Lightning Reflexes", kind: E, category: "physical", value: 2, notes: "2 to 6 points: faster reactions (extra Reaction / initiative dice; cost scales with the bonus)." },
  { name: "Natural Immunity", kind: E, category: "physical", value: 1, notes: "Naturally immune to one specific disease or toxin." },
  { name: "Night Vision", kind: E, category: "physical", value: 1, notes: "See in low light without penalty (a natural trait, not cyberware)." },
  { name: "Quick Healer", kind: E, category: "physical", value: 2, notes: "Heal faster — bonus dice on healing tests / shorter recovery intervals." },
  { name: "Resistance to Pathogens", kind: E, category: "physical", value: 1, notes: "Bonus dice to resist disease." },
  { name: "Resistance to Toxins", kind: E, category: "physical", value: 1, notes: "Bonus dice to resist toxins and poisons." },
  { name: "Toughness", kind: E, category: "physical", value: 2, notes: "Bonus dice to resist physical damage." },
  { name: "Will to Live", kind: E, category: "physical", value: 1, notes: "1 to 3 points: extra Overflow damage boxes before death (1 per point)." },
  // --- Mental ---
  { name: "Bravery", kind: E, category: "mental", value: 1, notes: "Bonus dice to resist fear and intimidation." },
  { name: "College Education", kind: E, category: "mental", value: 2, notes: "Formal higher education — benefits relevant Knowledge skills and defaulting." },
  { name: "Common Sense", kind: E, category: "mental", value: 2, notes: "The gamemaster warns you before you do something obviously foolish." },
  { name: "High School Education", kind: E, category: "mental", value: 1, notes: "Secondary education — basic Knowledge skills." },
  { name: "Perceptive", kind: E, category: "mental", value: 2, notes: "Bonus dice on Perception Tests." },
  { name: "Perfect Time", kind: E, category: "mental", value: 1, notes: "An innate internal clock — always know the exact time." },
  { name: "Photographic Memory", kind: E, category: "mental", value: 3, notes: "Recall anything seen or heard in perfect detail." },
  { name: "Sense of Direction", kind: E, category: "mental", value: 1, notes: "Never get lost; always know which way you're facing." },
  { name: "Technical School Education", kind: E, category: "mental", value: 1, notes: "Vocational training — relevant technical Knowledge skills." },
  // --- Social ---
  { name: "Animal Empathy", kind: E, category: "social", value: 2, notes: "Natural rapport with animals; bonus to calm or handle them." },
  { name: "At Ease", kind: E, category: "social", value: 3, notes: "Unflappable in social situations; bonus to resist social manipulation." },
  { name: "Blandness", kind: E, category: "social", value: 2, notes: "An utterly forgettable appearance — harder to recall, describe, or track." },
  { name: "Day Job", kind: E, category: "social", value: 1, notes: "1 to 3 points: legitimate employment giving income and cover (cost scales with the job's demands)." },
  { name: "Extra Contact", kind: E, category: "social", value: 1, notes: "One additional starting Contact." },
  { name: "Friends Abroad", kind: E, category: "social", value: 3, notes: "A useful contact network in another country." },
  { name: "Friends in High Places", kind: E, category: "social", value: 2, notes: "A contact with real institutional influence or authority." },
  { name: "Human-Looking", kind: E, category: "social", value: 1, notes: "A metahuman who passes for human — avoids metatype social-reaction penalties." },
  { name: "Good Reputation", kind: E, category: "social", value: 1, notes: "1 or 2 points: a positive reputation in the shadows; bonus to relevant social tests." },
  // --- Magical ---
  { name: "Bonus Force Point", kind: E, category: "magical", value: 1, notes: "1 to 3 points: extra Force/magic points at creation (magically active characters)." },
  { name: "Focused Concentration", kind: E, category: "magical", value: 2, notes: "Bonus to maintain spells and resist distraction/Spell Defense." },
  { name: "Magic Resistance", kind: E, category: "magical", value: 1, notes: "1 to 4 points: bonus dice to resist spells (1 die per point)." },
  { name: "Magical Talent: Combat Spells", kind: E, category: "magical", value: 4, notes: "A narrow innate talent — cast Combat spells without being a full magician." },
  { name: "Magical Talent: Detection Spells", kind: E, category: "magical", value: 2, notes: "A narrow innate talent for Detection spells." },
  { name: "Magical Talent: Health Spells", kind: E, category: "magical", value: 3, notes: "A narrow innate talent for Health spells." },
  { name: "Magical Talent: Illusion Spells", kind: E, category: "magical", value: 3, notes: "A narrow innate talent for Illusion spells." },
  { name: "Magical Talent: Manipulation Spells", kind: E, category: "magical", value: 4, notes: "A narrow innate talent for Manipulation spells." },
  { name: "Magical Talent: Summoning", kind: E, category: "magical", value: 3, notes: "3 points for one spirit category, 5 for all — a conjuring talent without full magician status." },
  { name: "Magical Talent: Astral Sight", kind: E, category: "magical", value: 3, notes: "A mundane character can perceive the astral plane (limited)." },
  { name: "Magical Talent: Poor Link", kind: E, category: "magical", value: 2, notes: "A weak, narrow magical link — a limited form of Magical Talent at reduced cost." },
  // --- Miscellaneous ---
  { name: "Registered Equipment", kind: E, category: "other", value: 6, notes: "Legally licensed restricted gear — no legality problems carrying that specific item." },
  { name: "State-of-the-Art Model", kind: E, category: "other", value: 2, notes: "2, 4, or 6 points: top-of-the-line gear/cyberware model (cost by tier)." },

  // ===================== FLAWS =====================
  // --- Skill ---
  { name: "Incompetence", kind: F, category: "skill", value: -2, notes: "Hopeless at one skill — can never learn or default it." },
  // --- Physical ---
  { name: "Allergy", kind: F, category: "physical", value: -1, notes: "-1 to -4: allergic to a substance; points scale with severity and how common the substance is (Allergy Table)." },
  { name: "Bio-Rejection", kind: F, category: "physical", value: -5, notes: "Your body rejects bioware. -5 (-2 for magically active characters)." },
  { name: "Blind", kind: F, category: "physical", value: -6, notes: "Cannot see. -6 (-2 for magically active, who can rely on astral perception)." },
  { name: "Borrowed Time", kind: F, category: "physical", value: -6, notes: "A terminal or degenerative condition — you're living on borrowed time." },
  { name: "Color Blind", kind: F, category: "physical", value: -1, notes: "Cannot distinguish colors." },
  { name: "Deaf", kind: F, category: "physical", value: -3, notes: "Cannot hear." },
  { name: "Infirm", kind: F, category: "physical", value: -1, notes: "-1 to -5: physically weak/frail; penalty to athletic and Body-based tests." },
  { name: "Low Pain Tolerance", kind: F, category: "physical", value: -4, notes: "Wound modifiers affect you more severely than normal." },
  { name: "Night Blindness", kind: F, category: "physical", value: -2, notes: "Cannot see in low light at all." },
  { name: "Paraplegic", kind: F, category: "physical", value: -3, notes: "Cannot use your legs." },
  { name: "Quadriplegic", kind: F, category: "physical", value: -6, notes: "Cannot use your limbs." },
  { name: "Sensitive System", kind: F, category: "physical", value: -3, notes: "Cyberware costs double Essence. -3 (-2 for magically active characters)." },
  { name: "Weak Immune System", kind: F, category: "physical", value: -1, notes: "Penalty to resist disease." },
  // --- Mental ---
  { name: "Amnesia", kind: F, category: "mental", value: -2, notes: "-2 to -5: missing memories — lost skills/knowledge; points scale with what's gone." },
  { name: "Combat Monster", kind: F, category: "mental", value: -1, notes: "Compelled toward violence; hard to de-escalate a fight." },
  { name: "Combat Paralysis", kind: F, category: "mental", value: -4, notes: "You freeze when combat starts — penalty to initiative and your first action." },
  { name: "Compulsive", kind: F, category: "mental", value: -1, notes: "Variable: a compulsion you must indulge; points scale with how disruptive it is." },
  { name: "Flashbacks", kind: F, category: "mental", value: -4, notes: "Traumatic flashbacks triggered under stress." },
  { name: "Impulsive", kind: F, category: "mental", value: -2, notes: "Act before thinking." },
  { name: "Illiterate", kind: F, category: "mental", value: -1, notes: "Cannot read or write." },
  { name: "Oblivious", kind: F, category: "mental", value: -2, notes: "Penalty to Perception and general awareness." },
  { name: "Pacifist", kind: F, category: "mental", value: -2, notes: "Strongly reluctant to use lethal force." },
  { name: "Phobia", kind: F, category: "mental", value: -1, notes: "-1 to -4: an irrational fear; points scale with how common the trigger and how strong the reaction." },
  { name: "Total Pacifist", kind: F, category: "mental", value: -5, notes: "Will not harm or kill under any circumstances." },
  { name: "Uneducated", kind: F, category: "mental", value: -1, notes: "No formal schooling — penalties to Knowledge-skill use." },
  { name: "Vindictive", kind: F, category: "mental", value: -2, notes: "Cannot let a slight go — compelled to seek revenge." },
  // --- Social ---
  { name: "Addiction", kind: F, category: "social", value: -1, notes: "Addicted to a substance. Type modifier: Strongly Addictive -1, Debilitating -1, Incapacitating -2 (combine with the addiction's severity)." },
  { name: "Bad Reputation", kind: F, category: "social", value: -1, notes: "-1 to -4: a bad reputation in the shadows; penalty to relevant social tests." },
  { name: "Dark Secret", kind: F, category: "social", value: -2, notes: "A secret that would ruin you if it came out." },
  { name: "Dependent", kind: F, category: "social", value: -1, notes: "Variable: someone depends on you (family, ward); points scale with the burden." },
  { name: "Hung Out to Dry", kind: F, category: "social", value: -4, notes: "No safety net — fixers and contacts won't stick their necks out for you in a crisis." },
  { name: "Uncouth", kind: F, category: "social", value: -2, notes: "Socially inept — penalty to social skills." },
  // --- Magical ---
  { name: "Bad Karma", kind: F, category: "magical", value: -5, notes: "Karma works against you — the dice betray you at the worst dramatic moments." },
  // --- Miscellaneous ---
  { name: "Cortex Bomb", kind: F, category: "other", value: -6, notes: "An explosive charge implanted in your skull, triggered by someone else." },
  { name: "Hunted", kind: F, category: "other", value: -2, notes: "-2, -4, or -6: a powerful enemy actively hunts you; points scale with their reach." },
  { name: "Mysterious Cyberware/Bioware", kind: F, category: "other", value: -5, notes: "Implants of unknown origin and function — who put them there, and why?" },
  { name: "Police Record", kind: F, category: "other", value: -6, notes: "A criminal record — flagged and wanted by law enforcement." }
];

let n = 0;
for (const q of QUALITIES) {
  const safe = q.name.replace(/[^A-Za-z0-9]+/g, "_").replace(/^_|_$/g, "");
  writeFileSync(`${DIR}/${safe}_${idFor(q.name)}.json`, JSON.stringify(quality(q), null, 2) + "\n");
  n++;
}
const edges = QUALITIES.filter(q => q.kind === E).length;
console.log(`wrote ${n} qualities (${edges} edges, ${n - edges} flaws)`);
