import functionsTDG from "../../../functions";
import images from '../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const psiPush = createTDGAbility(
    1, 'Psi-Push', '',
    true, false, images.psionInsights.psiPush
);

export default psiPush;