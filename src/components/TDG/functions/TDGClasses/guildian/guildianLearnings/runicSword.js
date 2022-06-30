import functionsTDG from "../../../";
import images from '../../../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const runicSword = createTDGAbility(
    2, 'Runic Sword', '',
    true, false, images.guildianLearnings.runicSword
);

export default runicSword;