import noFlight from './noFlight';
import noMelee from './noMelee';
import noRange from './noRange';
import noSpecial from './noSpecial';
import noArmor from './noArmor';

const commonAbilities = {
    melee: noMelee,
    armor: noArmor,
    range: noRange,
    flight: noFlight,
    special: noSpecial
};

export default commonAbilities;