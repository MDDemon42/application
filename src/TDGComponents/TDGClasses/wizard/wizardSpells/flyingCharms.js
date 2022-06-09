import createTDGAbility from "../../../functions/more/createTDGAbility";
import images from '../../../../uploads/images';

const flyingCharms = createTDGAbility(
    1, 'Flying Charms', 'When somebody wants to pretend to be a bee',
    true, false, images.wizardSpells.flyingCharms
);

export default flyingCharms;