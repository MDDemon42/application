import energyWhip from './energyWhip';
import laser from './laser';
import nanoMatrix from './nanoMatrix';
import nanoVest from './nanoVest';
import powerFist from './powerFist';
import reactiveFeet from './reactiveFeet';
import rocket from './rocket';
import functionsTDG from '../../../';
const { createTDGClassAbilities } = functionsTDG;

const cyborgDetails = createTDGClassAbilities(
    powerFist, energyWhip,
    nanoVest, nanoMatrix,
    laser, rocket,
    reactiveFeet,
    null, null
);

export default cyborgDetails;