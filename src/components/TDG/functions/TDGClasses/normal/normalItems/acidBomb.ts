import functionsTDG from "../../..";
import images from '../../../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const acidBomb = createTDGAbility(
    1, 'Acid Bomb', 'Result of battle chemistry',
    true, true, images.normalItems.acidBomb
);

export default acidBomb;