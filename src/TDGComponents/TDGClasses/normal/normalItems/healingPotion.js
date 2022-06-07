import createTDGAbility from "../../../functions/more/createTDGAbility";
import images from '../../../../uploads/images';

const healingPotion = createTDGAbility(
    1, 'Healing Potion', 'Elixir made of herbal essences',
    true, false, images.normalItems.healingPotion
);

export default healingPotion;