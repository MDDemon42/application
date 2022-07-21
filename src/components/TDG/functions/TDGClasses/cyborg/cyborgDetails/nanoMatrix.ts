import functionsTDG from "../../..";
import images from '../../../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const nanoMatrix = createTDGAbility(
    2, 'Nano Matrix', 'Layer of medium layers of tiny titan plates',
    false, false, images.cyborgDetails.nanoMatrix
);

export default nanoMatrix;