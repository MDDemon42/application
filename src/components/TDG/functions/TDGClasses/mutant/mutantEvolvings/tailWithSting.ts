import functionsTDG from "../../..";
import images from '../../../../../../uploads/images';
const { createTDGAbility } = functionsTDG;

const tailWithSting = createTDGAbility(
    1, 'Tail with Sting', 'In case you want another extremity for killing',
    true, false, images.mutantEvolvings.tailWithSting
);

export default tailWithSting;