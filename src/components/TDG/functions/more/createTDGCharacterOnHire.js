import createOneTDGCharacter from './createOneTDGCharacher';
import common from '../TDGClasses/common';

const createTDGCharacterOnHire = (nick_name, TDGClass) => {

    // console.log('creating character on hire', nick_name)

    const character = createOneTDGCharacter(
        0, 1, nick_name, TDGClass,
        common.abilities.melee.basic, common.abilities.armor.basic,
        common.abilities.range.basic, 
        common.abilities.flight.basic, 
        common.abilities.special.basic, common.abilities.special.basic
    );

    let startingAbility;
    const { possibleNickNames } = TDGClass;

    switch (TDGClass.title) {
        case 'Normal':
            switch (nick_name) {
                case possibleNickNames[0]:
                    startingAbility = TDGClass.abilities.range.basic;
                    character.range = startingAbility;
                    break
                case possibleNickNames[1]:
                    startingAbility = TDGClass.abilities.melee.basic;
                    character.melee = startingAbility;
                    break
                case possibleNickNames[2]:
                    startingAbility = TDGClass.abilities.armor.basic;
                    character.armor = startingAbility;
                    break
                case possibleNickNames[3]:
                    startingAbility = TDGClass.abilities.special.basic;
                    character.special[0] = startingAbility;
                    break
                case possibleNickNames[4]:
                    startingAbility = TDGClass.abilities.special.advanced;
                    character.special[1] = startingAbility;
                    break
                default:
                    break
            };
            break
        case 'Mutant':
            switch (nick_name) {
                case possibleNickNames[0]:
                    startingAbility = TDGClass.abilities.armor.basic;
                    character.armor = startingAbility;
                    break
                case possibleNickNames[1]:
                    startingAbility = TDGClass.abilities.melee.basic;
                    character.melee = startingAbility;
                    break
                case possibleNickNames[2]:
                    startingAbility = TDGClass.abilities.flight.basic;
                    character.flight = startingAbility;
                    break
                case possibleNickNames[3]:
                    startingAbility = TDGClass.abilities.special.basic;
                    character.special[0] = startingAbility;
                    break
                case possibleNickNames[4]:
                    startingAbility = TDGClass.abilities.special.advanced;
                    character.special[1] = startingAbility;
                    break
                default:
                    break
            };
            break
        case 'Cyborg':
            switch (nick_name) {
                case possibleNickNames[0]:
                    startingAbility = TDGClass.abilities.armor.basic;
                    character.armor = startingAbility;
                    break
                case possibleNickNames[1]:
                    startingAbility = TDGClass.abilities.melee.basic;
                    character.melee = startingAbility;
                    break
                case possibleNickNames[2]:
                    startingAbility = TDGClass.abilities.flight.basic;
                    character.flight = startingAbility;
                    break
                case possibleNickNames[3]:
                    startingAbility = TDGClass.abilities.range.basic;
                    character.range = startingAbility;
                    break
                default:
                    break
            };
            break
        case 'Wizard':
            switch (nick_name) {
                case possibleNickNames[0]:
                    startingAbility = TDGClass.abilities.flight.basic;
                    character.flight = startingAbility;
                    break
                case possibleNickNames[1]:
                    startingAbility = TDGClass.abilities.range.basic;
                    character.range = startingAbility;
                    break
                case possibleNickNames[2]:
                    startingAbility = TDGClass.abilities.armor.basic;
                    character.armor = startingAbility;
                    break
                case possibleNickNames[3]:
                    startingAbility = TDGClass.abilities.special.basic;
                    character.special[0] = startingAbility;
                    break
                case possibleNickNames[4]:
                    startingAbility = TDGClass.abilities.special.advanced;
                    character.special[1] = startingAbility;
                    break
                default:
                    break
            };
            break
        case 'Psion':
            switch (nick_name) {
                case possibleNickNames[0]:
                    startingAbility = TDGClass.abilities.special.advanced;
                    character.special[1] = startingAbility;
                    break
                case possibleNickNames[1]:
                    startingAbility = TDGClass.abilities.flight.basic;
                    character.flight = startingAbility;
                    break
                case possibleNickNames[2]:
                    startingAbility = TDGClass.abilities.special.basic;
                    character.special[0] = startingAbility;
                    break
                case possibleNickNames[3]:
                    startingAbility = TDGClass.abilities.melee.basic;
                    character.melee = startingAbility;
                    break
                case possibleNickNames[4]:
                    startingAbility = TDGClass.abilities.range.basic
                    character.range = startingAbility;
                    break
                case possibleNickNames[5]:
                    startingAbility = TDGClass.abilities.armor.basic;
                    character.armor = startingAbility;
                    break
                default:
                    break
            };
            break
        case 'Guildian':
            switch (nick_name) {
                case possibleNickNames[0]:
                    startingAbility = TDGClass.abilities.armor.basic;
                    character.armor = startingAbility;
                    break
                case possibleNickNames[1]:
                    startingAbility = TDGClass.abilities.special.advanced;
                    character.special[1] = startingAbility;
                    break
                case possibleNickNames[2]:
                    startingAbility = TDGClass.abilities.melee.basic;
                    character.melee = startingAbility;
                    break
                case possibleNickNames[3]:
                    startingAbility = TDGClass.abilities.range.basic;
                    character.range = startingAbility;
                    break
                case possibleNickNames[4]:
                    startingAbility = TDGClass.abilities.special.basic
                    character.special[0] = startingAbility;
                    break
                default:
                    break
            };
            break
        default:
            break
    };

    return (
        [character, startingAbility]
    )
};

export default createTDGCharacterOnHire;