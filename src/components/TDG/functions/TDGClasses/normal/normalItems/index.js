import sword from "./sword";
import greataxe from "./greataxe";
import bow from "./bow";
import crossbow from "./crossbow";
import leatherArmor from "./leatherArmor";
import steelArmor from "./steelArmor";
import acidBomb from "./acidBomb";
import healingPotion from "./healingPotion";
import functionsTDG from '../../../functions';
const { createTDGClassAbilities } = functionsTDG;

const normalItems = createTDGClassAbilities(
    sword, greataxe,
    bow, crossbow,
    leatherArmor, steelArmor,
    null,
    acidBomb, healingPotion
);

export default normalItems;