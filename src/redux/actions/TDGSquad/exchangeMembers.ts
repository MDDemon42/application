import C from '../../constants';

function exchangeMembers(
    id_one: number, id_two: number
) {
    return {
        type: C.EXCHANGE_MEMBERS,
        id_one, id_two
    };
};

export default exchangeMembers;