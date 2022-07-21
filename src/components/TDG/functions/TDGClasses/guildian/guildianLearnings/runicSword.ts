import functionsTDG from "../../..";
import images from '../../../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const runicSword = createTDGAbility(
    2, 'Runic Sword', 'Longsword imbued with sacred runes!',
    true, false, images.guildianLearnings.runicSword
);

export default runicSword;