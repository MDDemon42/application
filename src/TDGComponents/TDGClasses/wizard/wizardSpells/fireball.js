import createTDGAbility from "../../../functions/more/createTDGAbility";
import images from '../../../../uploads/images';

const fireball = createTDGAbility(
    2, 'Fireball', 'Excellent example of battle magic',
    true, true, images.wizardSpells.fireball
);

export default fireball;