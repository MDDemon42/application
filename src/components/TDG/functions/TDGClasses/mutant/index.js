import mutantEvolvings from "./mutantEvolvings";
import mutantNickNames from "./mutantNickNames";
import images from '../../../../../uploads/images';
import functionsTDG from "../../";
const { createTDGClass } = functionsTDG;

const mutant = createTDGClass(
    images.classIcons.mutant, 'Mutant',
    'Once an ordinary person. Now a living war machine. With a great capacity of possible evolvings just to become even deadlier',
    mutantEvolvings, mutantNickNames, 200
);

export default mutant;