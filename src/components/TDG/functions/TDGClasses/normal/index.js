import normalItems from './normalItems';
import normalNickNames from './normalNickNames';
import images from '../../../uploads/images';
import functionsTDG from "../../functions";
const { createTDGClass } = functionsTDG;

const normal = createTDGClass(
    images.classIcons.normal, 'Normal',
    'Just a normal adventurer with a big potential but flying. Good at (almost) everything. Nice choice for a start!',
    normalItems, normalNickNames, 100
);

export default normal;