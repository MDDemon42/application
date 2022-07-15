import commonAbilities from "./commonAbilities";
import commonNickNames from "./commonNickNames";
import images from '../../../../../uploads/images';
import functionsTDG from "../../";
const { createTDGClass } = functionsTDG;

const common = createTDGClass(
    images.noImage, 'Common',
    'Even no description',
    commonAbilities, commonNickNames, 0, 'rgb(0, 0, 0)'
);

export default common;