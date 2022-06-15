import normal from '../../TDGClasses/normal';
import commonAbilities from '../../TDGClasses/common/commonAbilities';
import createOneTDGCharacter from './creareOneTDGCharacher';

const createInitialTDGCharacters = () => {

    const member_one = createOneTDGCharacter(
        0, 1, normal.possibleNickNames[0], normal,
        normal.abilities.melee.basic, commonAbilities.armor,
        commonAbilities.range, 
        commonAbilities.flight, commonAbilities.special
    );
    
    const member_six = createOneTDGCharacter(
        5, 1, normal.possibleNickNames[1], normal,
        commonAbilities.melee, commonAbilities.armor,
        normal.abilities.range.basic, 
        commonAbilities.flight, commonAbilities.special
    );

    return (
        [
            member_one,
            null,
            null,
            null,
            null,
            member_six
        ]
    )
};

export default createInitialTDGCharacters;