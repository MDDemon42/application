import defensiveCharms from "./defensiveCharms";
import defensiveRunes from "./defensiveRunes";
import flyingCharms from "./flyingCharms";
import fireball from "./fireball";
import magicBolt from "./magicBolt";
import golem from "./golem";
import teleport from "./teleport";
import createTDGClassAbilities from '../../../functions/more/createTDGClassAbilities';

const wizardSpells = createTDGClassAbilities(
    null, null,
    magicBolt, fireball,
    defensiveCharms, defensiveRunes,
    flyingCharms,
    golem, teleport
);

export default wizardSpells;