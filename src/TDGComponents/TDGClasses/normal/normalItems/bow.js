import createTDGAbility from "../../../functions/more/createTDGAbility";
import images from '../../../../uploads/images';

const bow = createTDGAbility(
    1, 'Bow', 'Usual bow to hunt down people',
    true, false, images.normalItems.bow
);

export default bow;