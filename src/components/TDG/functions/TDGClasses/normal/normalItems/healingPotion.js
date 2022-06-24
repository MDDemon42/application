import functionsTDG from "../../../";
import images from '../../../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const healingPotion = createTDGAbility(
    1, 'Healing Potion', 'Elixir made of herbal essences',
    true, false, images.normalItems.healingPotion
);

export default healingPotion;