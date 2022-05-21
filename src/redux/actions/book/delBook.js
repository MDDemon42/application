import C from '../../constants';

function delBook(id) {
    return {
        type: C.DELETE_BOOK,
        id
    };
};

export default delBook;