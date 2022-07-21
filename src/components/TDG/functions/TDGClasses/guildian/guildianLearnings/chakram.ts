import functionsTDG from "../../..";
import images from '../../../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const chakram = createTDGAbility(
    2, 'Chakram', 'Confusing at first, death bringing at last',
    true, false, images.guildianLearnings.chakram
);

export default chakram;