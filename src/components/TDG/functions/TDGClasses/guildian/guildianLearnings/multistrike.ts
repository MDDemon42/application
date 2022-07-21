import functionsTDG from "../../..";
import images from '../../../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const multistrike = createTDGAbility(
    2, 'Multistrike', 'Very unique technique hitting not only the target',
    false, false, images.guildianLearnings.multistrike
);

export default multistrike;