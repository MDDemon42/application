import psionInsights from "./psionInsights";
import psionNickNames from "./psionNickNames";
import images from '../../../uploads/images';
import functionsTDG from "../../functions";
const { createTDGClass } = functionsTDG;

const psion = createTDGClass(
    images.classIcons.psion, 'Psion',
    'Ultimate warrior from another dimension which main and only battle tool is his mind',
    psionInsights, psionNickNames, 200
);

export default psion;