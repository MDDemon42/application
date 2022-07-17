import wings from "./wings";
import twoExtraPincers from './twoExtraPincers';
import clawsAndHorns from "./clawsAndHorns";
import tailWithSting from "./tailWithSting";
import fur from "./fur";
import scales from "./scales";
import acidBreathing from "./acidBreathing";
import functionsTDG from '../../../';
const { createTDGClassAbilities } = functionsTDG;

const mutantEvolvings = createTDGClassAbilities(
    clawsAndHorns, tailWithSting,
    fur, scales,
    null, null,
    wings,
    twoExtraPincers, acidBreathing
);

export default mutantEvolvings;