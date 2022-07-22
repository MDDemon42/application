import functionsTDG from "../../..";
import images from '../../../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const flyingCharms = createTDGAbility(
    1, 'Flying Charms', 'When somebody wants to pretend to be a bee',
    true, false, images.wizardSpells.flyingCharms
);

export default flyingCharms;