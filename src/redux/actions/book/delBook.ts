import C from '../../constants';

function delBook(id: number) {
    return {
        type: C.DELETE_BOOK,
        id
    };
};

export default delBook;