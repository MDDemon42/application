import { TDGClassAbilities } from './createTDGClassAbilities';

export interface TDGClass {
    icon: string;
    title: string;
    description: string;
    abilities: TDGClassAbilities;
    possibleNickNames: string[];
    price: number;
    color: string
}

const createTDGClass = (
    icon: string, title: string, 
    description: string, abilities: TDGClassAbilities, 
    possibleNickNames: string[], 
    price: number, color: string
): TDGClass => {
    return (
        {   
            icon,
            title,
            description,
            abilities,
            possibleNickNames,
            price,
            color
        }
    )
};

export default createTDGClass;