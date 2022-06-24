import functionsTDG from "../../../";
import images from '../../../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const wings = createTDGAbility(
    1, 'Wings', 'Good enough to fly and strike',
    false, false, images.mutantEvolvings.wings
);

export default wings;