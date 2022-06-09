import functionsTDG from "../../../functions";
import images from '../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const intuition = createTDGAbility(
    1, 'Intuition', '',
    true, false, images.psionInsights.intuition
);

export default intuition;