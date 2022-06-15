import functionsTDG from "../../../functions";
import images from '../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const noRange = createTDGAbility(
    0, 'No Weapon', 'Just Bare Hands',
    false, false, images.noImage
);

export default noRange;