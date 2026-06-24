// Generate the Shadowrun Companion metahuman variants (book p.39-44) as system
// `race` items into packs-src/sc-metatypes. Each variant = a base metatype's
// racial mods with the printed exceptions applied (render-verified). Attribute
// mods are absolute (from the human base); maximums inherit the base metatype.
// One-off quirks with no system ability key (single eye, sunlight allergy, limited
// Animal Empathy) live in the description. Re-run, then build-packs sc-metatypes.
//
// ponytail: shapeshifters and metahuman albinism are skipped. Shapeshifters need
// dual-form/regen actor support (YAGNI until played); albinism is just "any
// metatype + the sunlight Allergy flaw", already covered by sc-qualities.
import { writeFileSync, mkdirSync } from "node:fs";
import { createHash } from "node:crypto";

const DIR = "packs-src/sc-metatypes";
mkdirSync(DIR, { recursive: true });
const idFor = (s) => createHash("sha1").update("sc-metatype:" + s).digest("hex").slice(0, 16);

// Base metatype maximums (from the system's shipped race items) + default abilities.
const BASE = {
  troll: { max: { body: 11, quickness: 5, strength: 10, charisma: 4, intelligence: 4, willpower: 5, essence: 6, magic: 6, reaction: 5 }, abil: ["thermographic_vision", "dermal_armor", "reach_1"] },
  dwarf: { max: { body: 7, quickness: 5, strength: 8, charisma: 6, intelligence: 6, willpower: 7, essence: 6, magic: 6, reaction: 6 }, abil: ["thermographic_vision", "disease_resistance"] },
  ork:   { max: { body: 9, quickness: 6, strength: 8, charisma: 5, intelligence: 5, willpower: 6, essence: 6, magic: 6, reaction: 6 }, abil: ["low_light_vision"] },
  elf:   { max: { body: 6, quickness: 7, strength: 6, charisma: 8, intelligence: 6, willpower: 6, essence: 6, magic: 6, reaction: 7 }, abil: ["low_light_vision"] }
};
const M = (body, quickness, strength, charisma, intelligence, willpower) =>
  ({ body, quickness, strength, charisma, intelligence, willpower });

// name, base, mods (absolute from human), abilities (override base), page, desc
const VARIANTS = [
  // --- Troll variants ---
  { name: "Cyclops", base: "troll", mods: M(5, -1, 6, -2, -2, -1), abil: ["thermographic_vision", "reach_1"], page: 39,
    desc: "Greek and Mediterranean trolls with a single central eye and no dermal bone deposits. <strong>Mods:</strong> standard troll except Strength +6 (max 10) and no Dermal Armor. The single eye costs them depth perception — apply a +2 target number to ranged attacks." },
  { name: "Fomori", base: "troll", mods: M(4, -1, 3, 0, -2, -1), abil: ["thermographic_vision", "reach_1"], page: 40,
    desc: "Irish/Celtic trolls, leaner and more attractive than most, with a higher-than-average aptitude for magic. <strong>Mods:</strong> standard troll except Body +4, Strength +3, no Dermal Armor, no Charisma penalty." },
  { name: "Giants", base: "troll", mods: M(5, -1, 5, -2, -2, -1), abil: ["thermographic_vision", "reach_1"], page: 41,
    desc: "Nordic trolls, fairer and taller than most (averaging 3.5m), lacking the dermal bone deposits. <strong>Mods:</strong> standard troll except Strength +5 and no Dermal Armor." },
  { name: "Minotaurs", base: "troll", mods: M(4, -1, 3, -1, -1, -1), abil: ["thermographic_vision", "dermal_armor", "reach_1"], page: 43,
    desc: "Mediterranean trolls with pronounced snouts, wide-set eyes, long horns and extensive body hair. <strong>Mods:</strong> standard troll except Body +4, Strength +3, Charisma −1, Intelligence −1." },
  // --- Dwarf variants ---
  { name: "Koborokuru", base: "dwarf", mods: M(1, 0, 2, 0, 0, 1), page: 39,
    desc: "Japanese dwarfs, slightly smaller than their Western counterparts, with extensive body hair. <strong>Mods:</strong> standard dwarf except no Quickness penalty." },
  { name: "Menehune", base: "dwarf", mods: M(2, -1, 2, 0, 0, 1), page: 40,
    desc: "The “little people” of Hawai’i — shorter than most dwarfs, with luxuriant body hair, thick muscles and large noses. <strong>Mods:</strong> standard dwarf except Body +2." },
  { name: "Gnomes", base: "dwarf", mods: M(1, -1, 2, 0, 0, 2), page: 41,
    desc: "A dwarf subgroup of Central Europe and Asia Minor — shorter, with childlike physiques, longer noses and a tendency toward magic (most gnomes are shamans). <strong>Mods:</strong> standard dwarf except Willpower +2." },
  // --- Ork variants ---
  { name: "Hobgoblin", base: "ork", mods: M(2, 0, 2, -1, 0, 0), page: 41,
    desc: "Middle-Eastern orks — smaller and slighter, with greenish skin, sharp teeth and a fierce, vicious reputation. <strong>Mods:</strong> standard ork except Body +2 and no Intelligence penalty." },
  { name: "Oni", base: "ork", mods: M(3, 0, 2, -1, -1, 0), page: 42,
    desc: "Japanese orks with brightly colored skin, enlarged ears and horns, and a higher-than-average aptitude for magic. <strong>Mods:</strong> standard ork. By gamemaster discretion an oni may be built with Resources A / Race B / Magic C to reflect that magical propensity; otherwise use normal priorities." },
  { name: "Ogre", base: "ork", mods: M(3, 0, 2, 0, -1, 0), page: 42,
    desc: "European orks with smoother skin, less hair and pronounced jawlines. <strong>Mods:</strong> standard ork except no Charisma penalty." },
  { name: "Satyr", base: "ork", mods: M(3, -1, 2, -1, -1, 1), page: 43,
    desc: "Mediterranean orks with furry lower bodies, cloven hooves and small curly horns; nearly all are magicians, usually following the totem of Bacchus (use Coyote). <strong>Mods:</strong> standard ork except Quickness −1 (hooves) and Willpower +1." },
  // --- Elf variants ---
  { name: "Wakyambi", base: "elf", mods: M(0, 0, 0, 2, 0, 1), page: 42,
    desc: "An African elf subgroup — taller and thinner than most elves, almost always albino, dwelling deep in the African heartland. <strong>Mods:</strong> standard elf except Willpower +1 and no Quickness bonus." },
  { name: "Night Ones", base: "elf", mods: M(0, 2, 0, 2, 0, 0), page: 44,
    desc: "Eastern European elves (“Dark Elves”) covered in a fine layer of fur, with dark coloring and silver hair and eyes. <strong>Mods:</strong> standard elf except Quickness +2 and a Mild allergy to sunlight (see the Allergy flaw)." },
  { name: "Dryads", base: "elf", mods: M(-1, 1, -1, 3, 0, 0), page: 44,
    desc: "An all-female elf metavariant averaging just over 1m tall, with seasonal hair/eye color and a deep bond to the wild. <strong>Mods:</strong> standard elf except Body −1, Strength −1, Charisma +3, a Mild allergy to urban areas, and a free, limited Animal Empathy Edge that affects only birds and small tree-dwelling animals (squirrels, chipmunks)." }
];

function race(v) {
  const _id = idFor(v.name);
  const base = BASE[v.base];
  return {
    _id, name: v.name, type: "race", img: "icons/svg/mystery-man.svg",
    system: {
      raceKey: v.base,
      attributeMods: v.mods,
      attributeMaximums: base.max,
      specialAbilities: v.abil ?? base.abil,
      karmaCost: 0,
      description: `<p>${v.desc}</p><p><em>Shadowrun Companion p.${v.page}</em></p>`
    },
    effects: [], flags: {}, folder: null, sort: 0,
    _stats: { coreVersion: "13.351", systemId: "sr2e", systemVersion: "0.1.0", createdTime: 1782000000000, modifiedTime: 1782000000000, lastModifiedBy: null, compendiumSource: null, duplicateSource: null, exportSource: null },
    ownership: { default: 0 }, _key: `!items!${_id}`
  };
}

let n = 0;
for (const v of VARIANTS) {
  const safe = v.name.replace(/[^A-Za-z0-9]+/g, "_").replace(/^_|_$/g, "");
  writeFileSync(`${DIR}/${safe}_${idFor(v.name)}.json`, JSON.stringify(race(v), null, 2) + "\n");
  n++;
}
console.log(`wrote ${n} metahuman variants`);
