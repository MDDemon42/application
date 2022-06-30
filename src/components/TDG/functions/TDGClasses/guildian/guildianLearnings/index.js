import sword from "../../normal/normalItems/sword";
import runicSword from './runicSword';
import bow from "../../normal/normalItems/bow";
import chakram from './chakram';
import leatherArmor from "../../normal/normalItems/leatherArmor";
import titanSkinRitual from './titanSkinRitual';
import multistrike from './multistrike';
import healingPotion from "../../normal/normalItems/healingPotion";
import functionsTDG from '../../../';
const { createTDGClassAbilities } = functionsTDG;

const guildianLearnings = createTDGClassAbilities(
    sword, runicSword,
    bow, chakram,
    leatherArmor, titanSkinRitual,
    null,
    healingPotion, multistrike 
);

export default guildianLearnings;