import C from '../../constants';

function addMember(
    price, id, level, nick_name, TDGClass, melee, armor, range, flight, special
) {
    return {
        type: C.ADD_MEMBER,
        price, id, level, nick_name, TDGClass,
        melee, armor, range, flight, special
    };
};

export default addMember;