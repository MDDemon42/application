import functionsTDG from "../../..";
import images from '../../../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const guardianAura = createTDGAbility(
    2, 'Guardian Aura', 'Now your field can protect not only you',
    true, true, images.psionInsights.guardianAura
);

export default guardianAura;