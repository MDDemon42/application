import functionsTDG from "../../../functions";
import images from '../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const defensiveRunes = createTDGAbility(
    2, 'Defensive Runes', 'Powerful sorcery to rise almost invincible shield up',
    true, false, images.wizardSpells.defensiveRunes
);

export default defensiveRunes;