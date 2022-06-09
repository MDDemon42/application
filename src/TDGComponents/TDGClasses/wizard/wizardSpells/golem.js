import createTDGAbility from "../../../functions/more/createTDGAbility";
import images from '../../../../uploads/images';

const golem = createTDGAbility(
    1, 'Golem', 'Creature of clay and stones listening to wizard`s commands',
    true, false, images.wizardSpells.golem
);

export default golem;