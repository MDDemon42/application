import functionsTDG from "../../../functions";
import images from '../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const fireBreathing = createTDGAbility(
    1, 'Fire Breathing', 'Flammable chemicals from the throat',
    true, true, images.mutantEvolvings.fireBreathing
);

export default fireBreathing;