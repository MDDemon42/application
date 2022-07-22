import functionsTDG from "../../..";
import images from '../../../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const psiLightning = createTDGAbility(
    1, 'Psi-Lightning', 'While some can feel tension in the air, you can turn it to voltage',
    true, false, images.psionInsights.psiLightning
);

export default psiLightning;