import normal from './normal';
import cyborg from './cyborg';
import wizard from './wizard';

const initialTDGClasses = [
    {
        TDGClass: normal,
        available: true
    },
    {
        TDGClass: cyborg,
        available: true
    },
    {
        TDGClass: wizard,
        available: false
    }
];

export default initialTDGClasses;