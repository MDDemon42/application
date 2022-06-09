import psionInsights from "./psionInsights";
import images from '../../../uploads/images';
import functionsTDG from "../../functions";
const { createTDGClass } = functionsTDG;

const psion = createTDGClass(
    images.classIcons.psion, 'Psion',
    'Ultimate warrior from another dimension which main and only battle tool is his mind',
    psionInsights
);

export default psion;