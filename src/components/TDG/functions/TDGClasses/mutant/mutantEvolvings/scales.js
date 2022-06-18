import functionsTDG from "../../../functions";
import images from '../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const scales = createTDGAbility(
    2, 'Scales', 'Flexible and durable - ultimate natural armor',
    false, false, images.mutantEvolvings.scales
);

export default scales;