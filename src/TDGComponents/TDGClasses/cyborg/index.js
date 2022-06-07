import createTDGClass from "../../functions/more/createTDGClass";
import cyborgDetails from "./cyborgDetails";
import images from '../../../uploads/images';

const cyborg = createTDGClass(
    images.classIcons.cyborg, 'Cyborg',
    'Partly mechanized warrior that can (in theory) carry on much more pain than anyone...',
    cyborgDetails
);

export default cyborg;