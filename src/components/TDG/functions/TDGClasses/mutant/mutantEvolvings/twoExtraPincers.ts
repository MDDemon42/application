import functionsTDG from "../../..";
import images from '../../../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const twoExtraPincers = createTDGAbility(
    1, 'Two Extra Pincers', 'In case you want two another extremities for killing',
    false, false, images.mutantEvolvings.twoExtraPincers
);

export default twoExtraPincers;