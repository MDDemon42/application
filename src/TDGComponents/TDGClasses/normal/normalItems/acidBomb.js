import createTDGAbility from "../../../functions/more/createTDGAbility";
import images from '../../../../uploads/images';

const acidBomb = createTDGAbility(
    1, 'Acid Bomb', 'Result of battle chemistry',
    true, true, images.normalItems.acidBomb
);

export default acidBomb;