import functionsTDG from "../../../";
import images from '../../../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const telekinesis = createTDGAbility(
    2, 'Telekinesis', '',
    true, false, images.psionInsights.telekinesis
);

export default telekinesis;