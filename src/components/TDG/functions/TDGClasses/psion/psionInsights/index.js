import guardianAura from "./guardianAura";
import guardianField from "./guardianField";
import intuition from "./intuition";
import telekinesis from './telekinesis';
import levitation from "./levitation";
import psiLightning from "./psiLightning";
import psiPush from "./psiPush";
import functionsTDG from '../../../functions';
const { createTDGClassAbilities } = functionsTDG;

const psionInsights = createTDGClassAbilities(
    psiPush, null,
    psiLightning, null,
    guardianField, guardianAura,
    levitation,
    intuition, telekinesis
);

export default psionInsights;