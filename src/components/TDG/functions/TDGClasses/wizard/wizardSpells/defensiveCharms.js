import functionsTDG from "../../../functions";
import images from '../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const defensiveCharms = createTDGAbility(
    1, 'Defensive Charms', 'Usual sorcery to deflect physical hits',
    true, false, images.wizardSpells.defensiveCharms
);

export default defensiveCharms;