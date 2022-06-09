import functionsTDG from "../../../functions";
import images from '../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const noFlight = createTDGAbility(
    0, 'No Flight', 'Commonly men cannot fly',
    true, false, images.noImage
);

export default noFlight;