import functionsTDG from "../../../functions";
import images from '../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const psiLightning = createTDGAbility(
    1, 'Psi-Lightning', '',
    true, false, images.psionInsights.psiLightning
);

export default psiLightning;