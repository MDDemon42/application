import cyborgDetails from "./cyborgDetails";
import cyborgNickNames from "./cyborgNickNames";
import images from '../../../../../uploads/images';
import functionsTDG from "../../";
const { createTDGClass } = functionsTDG;

const cyborg = createTDGClass(
    images.classIcons.cyborg, 'Cyborg',
    'Partly mechanized warrior that can (in theory) carry on much more pain than anyone...',
    cyborgDetails, cyborgNickNames, 200
);

export default cyborg;