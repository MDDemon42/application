import createTDGAbility from "../../../functions/more/createTDGAbility";
import images from '../../../../uploads/images';

const noWeapon = createTDGAbility(
    0, 'No Weapon', 'Bare Hands',
    true, false, images.noImage
);

export default noWeapon;