import defensiveCharms from "./defensiveCharms";
import defensiveRunes from "./defensiveRunes";
import flyingCharms from "./flyingCharms";
import fireball from "./fireball";
import magicBolt from "./magicBolt";
import golem from "./golem";
import teleport from "./teleport";

const normalItems = {
    range: {
        title: 'Range',
        basic: magicBolt,
        advanced: fireball
    },
    armor: {
        title: 'Armor',
        basic: defensiveCharms,
        advanced: defensiveRunes
    },
    flying: {
        title: 'Flying',
        basic: flyingCharms,
        advanced: null
    },
    special: {
        title: 'Special',
        basic: golem,
        advanced: teleport
    }
};

export default normalItems;