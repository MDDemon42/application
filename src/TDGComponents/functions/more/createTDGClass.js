const createTDGClass = (
    icon, title, description, abilities
) => {
    return (
        {   
            icon, // let it be on position 0
            title,
            description,
            abilities
        }
    )
};

export default createTDGClass;