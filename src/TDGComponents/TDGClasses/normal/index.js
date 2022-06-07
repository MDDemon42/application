import createTDGClass from "../../functions/more/createTDGClass";
import normalItems from './normalItems';
import images from '../../../uploads/images';

const normal = createTDGClass(
    images.classIcons.normal, 'Normal',
    'Just a normal adventurer with a big potential but flying. Good at (almost) everything. Nice choice for a start!',
    normalItems
);

export default normal;