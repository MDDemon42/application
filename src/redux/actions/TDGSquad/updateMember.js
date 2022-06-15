import C from '../../constants';

function updateMember(id, level, melee, armor, range, flight, special) {
    return {
        type: C.UPDATE_MEMBER,
        id, level, melee, armor, range, flight, special
    };
};

export default updateMember;