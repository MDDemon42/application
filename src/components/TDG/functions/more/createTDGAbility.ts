export interface TDGAbility {
    level: number;
    title: string;
    description: string;
    active: boolean;
    mass: boolean;
    image: string
}

const createTDGAbility = (
    level: number, title: string, 
    description: string, active: boolean, 
    mass: boolean, image: string
): TDGAbility => {
    return (
        {
            level,
            title,
            description,
            active,
            mass,
            image
        }
    )
};

export default createTDGAbility;