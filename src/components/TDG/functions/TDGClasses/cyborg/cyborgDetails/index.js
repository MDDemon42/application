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
    laser, rocket,
    nanoVest, nanoMatrix,
    reactiveFeet,
    null, null
);

export default cyborgDetails;