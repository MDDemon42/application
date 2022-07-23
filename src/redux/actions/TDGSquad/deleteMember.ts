import C from '../../constants';

function deleteMember(id: number) {
    return {
        type: C.DELETE_MEMBER,
        id
    };
};

export default deleteMember;