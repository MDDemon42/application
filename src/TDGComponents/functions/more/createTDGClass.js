const createTDGClass = (
    icon, title, description, abilities, possibleNickNames, price
) => {
    return (
        {   
            icon,
            title,
            description,
            abilities,
            possibleNickNames,
            price
        }
    )
};

export default createTDGClass;