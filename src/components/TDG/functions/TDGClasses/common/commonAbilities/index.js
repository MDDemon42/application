import noFlight from './noFlight';
import noMelee from './noMelee';
import noRange from './noRange';
import noSpecial from './noSpecial';
import noArmor from './noArmor';
import functionsTDG from '../../../';
const { createTDGClassAbilities } = functionsTDG;

const commonAbilities = createTDGClassAbilities(
    noMelee, null,
    noRange, null,
    noArmor, null,
    noFlight,
    noSpecial, noSpecial
);

export default commonAbilities;