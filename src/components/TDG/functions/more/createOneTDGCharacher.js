const createOneTDGCharacter = (
    id, level, nick_name, TDGClass, melee, armor,
    range, flight, special_basic, special_advanced
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