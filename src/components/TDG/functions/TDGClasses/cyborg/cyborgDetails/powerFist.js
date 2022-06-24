import functionsTDG from "../../../";
import images from '../../../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const powerFist = createTDGAbility(
    1, 'Power Fist', 'Smashing the bones becomes easier',
    true, false, images.cyborgDetails.powerFist
);

export default powerFist;