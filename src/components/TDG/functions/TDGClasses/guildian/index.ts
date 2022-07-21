import guildianLearnings from './guildianLearnings';
import guildianNickNames from './guildianNickNames';
import images from '../../../../../uploads/images';
import functionsTDG from "../..";
const { createTDGClass } = functionsTDG;

const guildian = createTDGClass(
    images.classIcons.guildian, 'Guildian',
    'What happens to a Normal if he finished Guild`s education? He becomes a Guildian, of course!',
    guildianLearnings, guildianNickNames, 150, 'rgb(0, 163, 232)'
);

export default guildian;