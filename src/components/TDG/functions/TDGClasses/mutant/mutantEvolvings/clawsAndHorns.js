import functionsTDG from "../../../functions";
import images from '../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const clawsAndHorns = createTDGAbility(
    1, 'Claws and Horns', 'Basic tools to tear apart a victim',
    true, false, images.mutantEvolvings.clawsAndHorns
);

export default clawsAndHorns;