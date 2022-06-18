const createTDGAbility = (
    level, title, description, active, mass, image
) => {
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