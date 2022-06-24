import functionsTDG from "../../../";
import images from '../../../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const reactiveFeet = createTDGAbility(
    1, 'Reactive Feet', 'Powerful enough to lift up a man',
    true, false, images.cyborgDetails.reactiveFeet
);

export default reactiveFeet;