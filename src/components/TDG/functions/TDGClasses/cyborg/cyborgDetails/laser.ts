import functionsTDG from "../../..";
import images from '../../../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const laser = createTDGAbility(
    1, 'Laser', 'Real accurate weapon to make holes in enemies',
    true, false, images.cyborgDetails.laser
);

export default laser;