import functionsTDG from "../../..";
import images from '../../../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const psiBlades = createTDGAbility(
    1, 'Psi-Blades', 'When your mind is sharp enough',
    true, false, images.psionInsights.psiBlades
);

export default psiBlades;