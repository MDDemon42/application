const createTDGClass = (
    icon, title, description, abilities, possibleNickNames, price, color
) => {
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