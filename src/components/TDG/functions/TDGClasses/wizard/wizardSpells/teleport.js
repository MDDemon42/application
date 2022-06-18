import functionsTDG from "../../..";
import images from '../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const teleport = createTDGAbility(
    1, 'Teleport', 'When you need an instant way out of here',
    true, true, images.wizardSpells.teleport
);

export default teleport;