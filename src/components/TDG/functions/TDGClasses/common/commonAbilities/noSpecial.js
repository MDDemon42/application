import functionsTDG from "../../../";
import images from '../../../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const noSpecial = createTDGAbility(
    0, 'Nothing at all', 'Nothing at all',
    false, false, images.noImage
);

export default noSpecial;