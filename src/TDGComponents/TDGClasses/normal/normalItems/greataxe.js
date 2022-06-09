import functionsTDG from "../../../functions";
import images from '../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const greataxe = createTDGAbility(
    2, 'Greataxe', 'Masterfull weapon to behead enemies',
    true, false, images.normalItems.greataxe
);

export default greataxe;