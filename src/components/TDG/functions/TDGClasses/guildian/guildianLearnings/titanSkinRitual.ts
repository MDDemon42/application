import functionsTDG from "../../..";
import images from '../../../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const titanSkinRitual = createTDGAbility(
    2, 'Titan Skin Ritual', 'Legendary spell to become a legend!',
    false, false, images.guildianLearnings.titanSkinRitual
);

export default titanSkinRitual;