import functionsTDG from "../../../";
import images from '../../../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const golem = createTDGAbility(
    1, 'Golem', 'Creature of clay and stones listening to wizard`s commands',
    true, false, images.wizardSpells.golem
);

export default golem;