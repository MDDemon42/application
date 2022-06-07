import createTDGAbility from "../../../functions/more/createTDGAbility";
import images from '../../../../uploads/images';

const sword = createTDGAbility(
    1, 'Sword', 'Standart Steel Sword',
    true, false, images.normalItems.sword
);

export default sword;