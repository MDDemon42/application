import wings from "./wings";
import twoExtraPincers from './twoExtraPincers';
import clawsAndHorns from "./clawsAndHorns";
import tailWithSting from "./tailWithSting";
import fur from "./fur";
import scales from "./scales";
import fireBreathing from "./fireBreathing";
import createTDGClassAbilities from '../../../functions/more/createTDGClassAbilities';

const mutantEvolvings = createTDGClassAbilities(
    clawsAndHorns, tailWithSting,
    null, null,
    fur, scales,
    wings,
    twoExtraPincers, fireBreathing
);

export default mutantEvolvings;