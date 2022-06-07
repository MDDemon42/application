import createTDGAbility from "../../../functions/more/createTDGAbility";
import images from '../../../../uploads/images';

const steelArmor = createTDGAbility(
    2, 'Steel Armor', 'Standart Steel Armor',
    false, false, images.normalItems.steelArmor
);

export default steelArmor;