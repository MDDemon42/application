import createTDGClass from "../../functions/more/createTDGClass";
import wizardSpells from './wizardSpells';
import images from '../../../uploads/images';

const wizard = createTDGClass(
    images.classIcons.wizard, 'Wizard',
    'Highly helpful man of knowledge. Variability of skills can overcompensate lack of physical strength.',
    wizardSpells
);

export default wizard;