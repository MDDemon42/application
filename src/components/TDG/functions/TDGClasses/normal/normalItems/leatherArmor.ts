import functionsTDG from "../../..";
import images from '../../../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const leatherArmor = createTDGAbility(
    1, 'Leather Armor', 'Layer of other creature`s skin',
    false, false, images.normalItems.leatherArmor
);

export default leatherArmor;