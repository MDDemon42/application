import functionsTDG from "../../..";
import images from '../../../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const steelArmor = createTDGAbility(
    2, 'Steel Armor', 'Standart Steel Armor',
    false, false, images.normalItems.steelArmor
);

export default steelArmor;