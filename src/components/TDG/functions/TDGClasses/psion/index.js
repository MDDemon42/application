import psionInsights from "./psionInsights";
import psionNickNames from "./psionNickNames";
import images from '../../../../../uploads/images';
import functionsTDG from "../../";
const { createTDGClass } = functionsTDG;

const psion = createTDGClass(
    images.classIcons.psion, 'Psion',
    'Ultimate warrior from another dimension which main and only battle tool is his mind',
    psionInsights, psionNickNames, 200, 'rgb(117, 95, 195)'
);

export default psion;