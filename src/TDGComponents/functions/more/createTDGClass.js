const createTDGClass = (
    icon, title, description, abilities, possibleNickNames
) => {
    return (
        {   
            icon,
            title,
            description,
            abilities,
            possibleNickNames
        }
    )
};

export default createTDGClass;