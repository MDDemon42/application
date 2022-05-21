import C from '../../constants';

function delAuthor(id) {
    return {
        type: C.DELETE_AUTHOR,
        id
    };
};

export default delAuthor;