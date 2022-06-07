import createTDGAbility from "../../../functions/more/createTDGAbility";
import images from '../../../../uploads/images';

const teleport = createTDGAbility(
    1, 'Teleport', '',
    true, true, images.wizardSpells.teleport
);

export default teleport;