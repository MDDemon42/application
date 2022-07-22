import wizardSpells from './wizardSpells';
import wizardNickNames from './wizardNickNames';
import images from '../../../../../uploads/images';
import functionsTDG from "../..";
const { createTDGClass } = functionsTDG;

const wizard = createTDGClass(
    images.classIcons.wizard, 'Wizard',
    'Highly helpful man of knowledge. Variability of skills can overcompensate lack of physical strength.',
    wizardSpells, wizardNickNames, 200, 'rgb(255, 127, 38)'
);

export default wizard;