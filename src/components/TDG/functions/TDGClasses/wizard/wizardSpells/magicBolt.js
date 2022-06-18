import functionsTDG from "../../../functions";
import images from '../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const magicBolt = createTDGAbility(
    1, 'Magic Bolt', 'Novice spell to hurt somebody',
    true, false, images.wizardSpells.magicBolt
);

export default magicBolt;