import functionsTDG from "../../../functions";
import images from '../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const crossbow = createTDGAbility(
    2, 'Crossbow', 'Deadly invention from bowmen haters',
    true, false, images.normalItems.crossbow
);

export default crossbow;