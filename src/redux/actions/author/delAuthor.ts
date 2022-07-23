import C from '../../constants';

function delAuthor(id: number) {
    return {
        type: C.DELETE_AUTHOR,
        id
    };
};

export default delAuthor;