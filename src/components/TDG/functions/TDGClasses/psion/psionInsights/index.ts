import guardianAura from "./guardianAura";
import guardianField from "./guardianField";
import intuition from "./intuition";
import telekinesis from './telekinesis';
import levitation from "./levitation";
import psiLightning from "./psiLightning";
import psiBlades from "./psiBlades";
import functionsTDG from '../../..';
const { createTDGClassAbilities } = functionsTDG;

const psionInsights = createTDGClassAbilities(
    psiBlades, null,
    guardianField, guardianAura,
    psiLightning, null,
    levitation,
    intuition, telekinesis
);

export default psionInsights;