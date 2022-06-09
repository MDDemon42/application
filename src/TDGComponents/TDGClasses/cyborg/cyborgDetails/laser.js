import createTDGAbility from "../../../functions/more/createTDGAbility";
import images from '../../../../uploads/images';

const laser = createTDGAbility(
    1, 'Laser', 'Real accurate weapon to make holes in enemies',
    true, false, images.cyborgDetails.laser
);

export default laser;