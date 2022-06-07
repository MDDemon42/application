import createTDGAbility from "../../../functions/more/createTDGAbility";
import images from '../../../../uploads/images';

const defensiveRunes = createTDGAbility(
    2, 'Defensive Runes', '',
    true, false, images.wizardSpells.defensiveRunes
);

export default defensiveRunes;