import functionsTDG from "../../../functions";
import images from '../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const nanoVest = createTDGAbility(
    1, 'Nano Vest', 'Layer of tiny titan plates',
    false, false, images.cyborgDetails.nanoVest
);

export default nanoVest;