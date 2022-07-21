import { TDGAbility } from './createTDGAbility';

export interface TDGClassAbilities {
    melee: {
        title: string,
        basic: TDGAbility | null,
        advanced: TDGAbility | null
    },
    armor: {
        title: string,
        basic: TDGAbility | null,
        advanced: TDGAbility | null
    },
    range: {
        title: string,
        basic: TDGAbility | null,
        advanced: TDGAbility | null
    },
    flight: {
        title: string,
        basic: TDGAbility | null,
        advanced: null
    },
    special: {
        title: string,
        basic: TDGAbility | null,
        advanced: TDGAbility | null
    }   
}

const createTDGClassAbilities = (
    melee_basic: TDGAbility | null, melee_advanced: TDGAbility | null,
    armor_basic: TDGAbility | null, armor_advanced: TDGAbility | null,
    range_basic: TDGAbility | null, range_advanced: TDGAbility | null,
    flight_basic: TDGAbility | null,
    special_basic: TDGAbility | null, special_advanced: TDGAbility | null
): TDGClassAbilities => { 
    return (
        {
            melee: {
                title: 'Melee',
                basic: melee_basic,
                advanced: melee_advanced
            },
            armor: {
                title: 'Armor',
                basic: armor_basic,
                advanced: armor_advanced
            },
            range: {
                title: 'Range',
                basic: range_basic,
                advanced: range_advanced
            },
            flight: {
                title: 'Flight',
                basic: flight_basic,
                advanced: null
            },
            special: {
                title: 'Special',
                basic: special_basic,
                advanced: special_advanced
            }            
        }
    )
};

export default createTDGClassAbilities;