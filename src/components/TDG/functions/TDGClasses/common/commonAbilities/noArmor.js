import functionsTDG from "../../../";
import images from '../../../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const noArmor = createTDGAbility(
    0, 'Nothing', 'Just a clothing',
    false, false, images.noImage
);

export default noArmor;