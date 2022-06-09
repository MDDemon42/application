import mutantEvolvings from "./mutantEvolvings";
import images from '../../../uploads/images';
import functionsTDG from "../../functions";
const { createTDGClass } = functionsTDG;

const mutant = createTDGClass(
    images.classIcons.mutant, 'Mutant',
    'Once an ordinary person. Now a living war machine. With a great capacity of possible evolvings just to become even deadlier',
    mutantEvolvings
);

export default mutant;