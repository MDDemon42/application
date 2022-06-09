import createTDGAbility from "../../../functions/more/createTDGAbility";
import images from '../../../../uploads/images';

const magicBolt = createTDGAbility(
    1, 'Magic Bolt', 'Novice spell to hurt somebody',
    true, false, images.wizardSpells.magicBolt
);

export default magicBolt;