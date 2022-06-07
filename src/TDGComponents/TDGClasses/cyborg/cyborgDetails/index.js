import energyWhip from './energyWhip';
import laser from './laser';
import nanoMatrix from './nanoMatrix';
import nanoVest from './nanoVest';
import powerFist from './powerFist';
import reactiveFeet from './reactiveFeet';
import rocket from './rocket';

const cyborgDetails = {
    melee: {
        title: 'Melee',
        basic: powerFist,
        advanced: energyWhip
    },
    range: {
        title: 'Range',
        basic: laser,
        advanced: rocket
    },
    armor: {
        title: 'Armor',
        basic: nanoVest,
        advanced: nanoMatrix
    },
    flight: {
        title: 'Flight',
        basic: reactiveFeet,
        advanced: null
    }
};

export default cyborgDetails;