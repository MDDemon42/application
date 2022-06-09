import functionsTDG from "../../../functions";
import images from '../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const guardianField = createTDGAbility(
    1, 'Guardian Field', '',
    true, false, images.psionInsights.guardianField
);

export default guardianField;