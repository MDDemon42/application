import functionsTDG from "../../..";
import images from '../../../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const acidBreathing = createTDGAbility(
    1, 'Acid Breathing', 'Dangerous chemicals from the throat',
    true, true, images.mutantEvolvings.acidBreathing
);

export default acidBreathing;