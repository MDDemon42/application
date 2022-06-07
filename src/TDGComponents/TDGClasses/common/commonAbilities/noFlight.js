import createTDGAbility from "../../../functions/more/createTDGAbility";
import images from '../../../../uploads/images';

const noFlight = createTDGAbility(
    0, 'No Flight', 'Commonly men cannot fly',
    true, false, images.noImage
);

export default noFlight;