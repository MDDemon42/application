import functionsTDG from "../../../functions";
import images from '../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const bow = createTDGAbility(
    1, 'Bow', 'Usual bow to hunt down people',
    true, false, images.normalItems.bow
);

export default bow;