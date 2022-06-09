import createTDGAbility from "../../../functions/more/createTDGAbility";
import images from '../../../../uploads/images';

const defensiveRunes = createTDGAbility(
    2, 'Defensive Runes', 'Powerful sorcery to rise almost invincible shield up',
    true, false, images.wizardSpells.defensiveRunes
);

export default defensiveRunes;