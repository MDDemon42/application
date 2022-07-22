import functionsTDG from "../../..";
import images from '../../../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const intuition = createTDGAbility(
    1, 'Intuition', 'Ability to dodge some of enemy attacks',
    true, false, images.psionInsights.intuition
);

export default intuition;