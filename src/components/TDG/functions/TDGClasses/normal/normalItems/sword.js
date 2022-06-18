import functionsTDG from "../../../functions";
import images from '../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const sword = createTDGAbility(
    1, 'Sword', 'Standart Steel Sword',
    true, false, images.normalItems.sword
);

export default sword;