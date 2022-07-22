import functionsTDG from "../../..";
import images from '../../../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const guardianField = createTDGAbility(
    1, 'Guardian Field', 'Field of protection against any attack',
    true, false, images.psionInsights.guardianField
);

export default guardianField;