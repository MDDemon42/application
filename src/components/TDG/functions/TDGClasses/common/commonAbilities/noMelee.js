import functionsTDG from "../../../functions";
import images from '../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const noMelee = createTDGAbility(
    0, 'No Weapon', 'Bare Hands',
    true, false, images.noImage
);

export default noMelee;