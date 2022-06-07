import sword from "./sword";
import greataxe from "./greataxe";
import bow from "./bow";
import crossbow from "./crossbow";
import leatherArmor from "./leatherArmor";
import steelArmor from "./steelArmor";
import acidBomb from "./acidBomb";
import healingPotion from "./healingPotion";

const normalItems = {
    melee: {
        title: 'Melee',
        basic: sword,
        advanced: greataxe
    },
    range: {
        title: 'Range',
        basic: bow,
        advanced: crossbow
    },
    armor: {
        title: 'Armor',
        basic: leatherArmor,
        advanced: steelArmor
    },
    special: {
        title: 'Special',
        basic: acidBomb,
        advanced: healingPotion
    }
};

export default normalItems;