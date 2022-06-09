import createTDGAbility from "../../../functions/more/createTDGAbility";
import images from '../../../../uploads/images';

const fireBreathing = createTDGAbility(
    1, 'Fire Breathing', 'Flammable chemicals from the throat',
    true, true, images.mutantEvolvings.fireBreathing
);

export default fireBreathing;