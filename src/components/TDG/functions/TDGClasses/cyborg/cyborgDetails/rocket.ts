import functionsTDG from "../../..";
import images from '../../../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const rocket = createTDGAbility(
    2, 'Rocket', 'Real demolishing weapon to make ashes from enemies',
    true, true, images.cyborgDetails.rocket
);

export default rocket;