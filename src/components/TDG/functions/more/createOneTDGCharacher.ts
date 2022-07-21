import { TDGAbility } from './createTDGAbility';
import { TDGClass } from './createTDGClass'

export interface OneTDGCharacter {
    id: number,
    level: number,
    nick_name: string,
    TDGClass: TDGClass,
    melee: TDGAbility | null,
    armor: TDGAbility | null,
    range: TDGAbility | null,
    flight: TDGAbility | null,
    special: (TDGAbility | null)[]
}

const createOneTDGCharacter = (
    id: number, level: number,
    nick_name: string, TDGClass: TDGClass, 
    melee: TDGAbility | null, armor: TDGAbility | null,
    range: TDGAbility | null, flight: TDGAbility | null, 
    special_basic: TDGAbility | null, 
    special_advanced: TDGAbility | null
) => {
    return (
        {
            id,
            level,
            nick_name,
            TDGClass,
            melee,
            armor,
            range,
            flight,
            special: [special_basic, special_advanced]
        }
    )
};

export default createOneTDGCharacter;