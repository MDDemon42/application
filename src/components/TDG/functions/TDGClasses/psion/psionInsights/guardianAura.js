import functionsTDG from "../../../functions";
import images from '../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const guardianAura = createTDGAbility(
    1, 'Guardian Aura', '',
    true, true, images.psionInsights.guardianAura
);

export default guardianAura;