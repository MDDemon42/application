import wizardSpells from './wizardSpells';
import wizardNickNames from './wizardNickNames';
import images from '../../../uploads/images';
import functionsTDG from "../../functions";
const { createTDGClass } = functionsTDG;

const wizard = createTDGClass(
    images.classIcons.wizard, 'Wizard',
    'Highly helpful man of knowledge. Variability of skills can overcompensate lack of physical strength.',
    wizardSpells,
    wizardNickNames
);

export default wizard;