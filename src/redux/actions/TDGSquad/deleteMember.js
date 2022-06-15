import C from '../../constants';

function deleteMember(id) {
    return {
        type: C.DELETE_MEMBER,
        id
    };
};

export default deleteMember;