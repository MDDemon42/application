import functionsTDG from "../../..";
import images from '../../../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const energyWhip = createTDGAbility(
    2, 'Energy Whip', 'Flesh slicing through piece of weaponry art',
    true, false, images.cyborgDetails.energyWhip
);

export default energyWhip;