import createTDGAbility from "../../../functions/more/createTDGAbility";
import images from '../../../../uploads/images';

const defensiveCharms = createTDGAbility(
    1, 'Defensive Charms', '',
    true, false, images.wizardSpells.defensiveCharms
);

export default defensiveCharms;