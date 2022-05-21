import C from '../../constants';

function addBook(id, last_name, first_name, title, created_at, image) {
    return {
        type: C.ADD_BOOK,
        id, last_name, first_name, title, created_at, image
    };
};

export default addBook;