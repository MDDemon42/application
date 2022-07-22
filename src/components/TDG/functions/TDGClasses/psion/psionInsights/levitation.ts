import functionsTDG from "../../..";
import images from '../../../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const levitation = createTDGAbility(
    1, 'Levitation', 'Ability to walk the sky',
    true, false, images.psionInsights.levitation
);

export default levitation;