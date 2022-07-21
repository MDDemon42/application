import { TDGClass } from '../more/createTDGClass';
import normal from './normal';
import cyborg from './cyborg';
import wizard from './wizard';
import mutant from './mutant';
import psion from './psion';
import guildian from './guildian';

interface AvailableTDGClass {
    TDGClass: TDGClass,
    available: boolean
}

const initialTDGClasses: AvailableTDGClass[] = [
    {
        TDGClass: normal,
        available: true
    },
    {
        TDGClass: guildian,
        available: true
    },
    {
        TDGClass: cyborg,
        available: true
    },
    {
        TDGClass: mutant,
        available: true
    },
    {
        TDGClass: wizard,
        available: false
    },
    {
        TDGClass: psion,
        available: false
    }
];

export default initialTDGClasses;