import createTDGAbility from "../../../functions/more/createTDGAbility";
import images from '../../../../uploads/images';

const crossbow = createTDGAbility(
    2, 'Crossbow', 'Deadly invention from bowmen haters',
    true, false, images.normalItems.crossbow
);

export default crossbow;