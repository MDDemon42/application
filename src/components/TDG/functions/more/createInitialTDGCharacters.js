import normal from '../TDGClasses/normal';
import cyborg from '../TDGClasses/cyborg';
import mutant from '../TDGClasses/mutant';
import commonAbilities from '../TDGClasses/common/commonAbilities';
import createOneTDGCharacter from './creareOneTDGCharacher';

const createInitialTDGCharacters = () => {

    const member_one = createOneTDGCharacter(
        0, 1, normal.possibleNickNames[0], normal,
        normal.abilities.melee.advanced, normal.abilities.armor.advanced,
        normal.abilities.range.advanced, 
        commonAbilities.flight.basic, 
        normal.abilities.special.basic, normal.abilities.special.advanced
    );

    const member_two = createOneTDGCharacter(
        1, 1, cyborg.possibleNickNames[0], cyborg,
        cyborg.abilities.melee.advanced, cyborg.abilities.armor.advanced,
        cyborg.abilities.range.advanced, 
        cyborg.abilities.flight.basic,
        commonAbilities.special.basic, commonAbilities.special.basic
    );

    const member_three = createOneTDGCharacter(
        2, 1, mutant.possibleNickNames[0], mutant,
        mutant.abilities.melee.advanced, mutant.abilities.armor.advanced,
        commonAbilities.range.basic, 
        mutant.abilities.flight.basic, 
        mutant.abilities.special.basic, mutant.abilities.special.advanced
    );
    
    const member_six = createOneTDGCharacter(
        5, 1, normal.possibleNickNames[1], normal,
        commonAbilities.melee.basic, commonAbilities.armor.basic,
        normal.abilities.range.basic, 
        commonAbilities.flight.basic, 
        commonAbilities.special.basic, commonAbilities.special.basic
    );

    const initialMembers = [];

    for (let i=0; i<9; i++) {
        initialMembers.push({
            id: i,
            level: -1
        })
    };

    initialMembers[0] = member_one;
    initialMembers[1] = member_two;
    initialMembers[2] = member_three;
    initialMembers[5] = member_six;

    return (
        initialMembers
    )
};

export default createInitialTDGCharacters;