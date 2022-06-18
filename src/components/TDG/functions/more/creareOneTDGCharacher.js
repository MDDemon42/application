const createOneTDGCharacter = (
    id, level, nick_name, TDGClass, melee, armor, range, flight, special
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
            special 
        }
    )
};

export default createOneTDGCharacter;