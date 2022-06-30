import functionsTDG from "../../../";
import images from '../../../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const chakram = createTDGAbility(
    2, 'Chakram', '',
    true, false, images.guildianLearnings.chakram
);

export default chakram;