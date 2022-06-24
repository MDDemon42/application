import normal from '../TDGClasses/normal';
import commonAbilities from '../TDGClasses/common/commonAbilities';
import createOneTDGCharacter from './creareOneTDGCharacher';

const createInitialTDGCharacters = () => {

    const member_one = createOneTDGCharacter(
        0, 1, normal.possibleNickNames[0], normal,
        normal.abilities.melee.basic, commonAbilities.armor.basic,
        commonAbilities.range.basic, 
        commonAbilities.flight.basic, commonAbilities.special.basic
    );
    
    const member_six = createOneTDGCharacter(
        5, 1, normal.possibleNickNames[1], normal,
        commonAbilities.melee.basic, commonAbilities.armor.basic,
        normal.abilities.range.basic, 
        commonAbilities.flight.basic, commonAbilities.special.basic
    );

    const initialMembers = [];

    for (let i=0; i<9; i++) {
        initialMembers.push({
            id: i,
            level: -1
        })
    };

    initialMembers[0] = member_one;
    initialMembers[5] = member_six;

    return (
        initialMembers
    )
};

export default createInitialTDGCharacters;