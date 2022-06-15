import C from '../../constants';

function addMember(id, level, nick_name, TDGClass, melee, armor, range, flight, special) {
    return {
        type: C.ADD_MEMBER,
        id, level, nick_name, TDGClass, melee, armor, range, flight, special
    };
};

export default addMember;