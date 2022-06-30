import functionsTDG from "../../../";
import images from '../../../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const multistrike = createTDGAbility(
    2, 'Multistrike', '',
    false, false, images.guildianLearnings.multistrike
);

export default multistrike;