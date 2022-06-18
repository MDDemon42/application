import functionsTDG from "../../../functions";
import images from '../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const fireball = createTDGAbility(
    2, 'Fireball', 'Excellent example of battle magic',
    true, true, images.wizardSpells.fireball
);

export default fireball;