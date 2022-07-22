import functionsTDG from "../../..";
import images from '../../../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const fur = createTDGAbility(
    1, 'Fur', 'Dense hair defense',
    false, false, images.mutantEvolvings.fur
);

export default fur;